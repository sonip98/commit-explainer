import { getCommitDiff } from './github'
import { askOpenAI } from './gptClients'

export async function explainCommitFromUrl(commitUrl: string) {
  const diff = await getCommitDiff(commitUrl)
  const prompt = `You're a senior developer. Explain this commit in simple terms:\n\n${diff}`
  return await askOpenAI(prompt)
}
