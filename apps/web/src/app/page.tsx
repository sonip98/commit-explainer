'use client'

import { useState } from 'react'

export default function Home() {
  const [commitUrl, setCommitUrl] = useState('')
  const [explanation, setExplanation] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setExplanation('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:3001/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ commitUrl })
      })

      const data = await res.json()
      setExplanation(data.explanation || data.error || 'No explanation returned.')
    } catch (err) {
      console.error(err)
      setExplanation('Error fetching explanation.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="max-w-xl w-full bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">🧠 Explain This Commit</h1>
        <p className="text-gray-600 text-center mb-6">
          Paste a GitHub commit URL and get a natural language explanation.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter GitHub commit URL"
            value={commitUrl}
            onChange={(e) => setCommitUrl(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Explaining...' : 'Explain Commit'}
          </button>
        </form>

        {explanation && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Explanation</h2>
            <div className="bg-gray-50 border border-gray-300 p-4 rounded-md text-gray-800 whitespace-pre-wrap">
              {explanation}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
