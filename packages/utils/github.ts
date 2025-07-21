export async function getCommitDiff(commitUrl: string): Promise<string> {
    const match = commitUrl.match(/github\.com\/(.*?)\/(.*?)\/commit\/([a-f0-9]+)/)
    if (!match) throw new Error('Invalid GitHub commit URL')
  
    const [, owner, repo, sha] = match
  
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${sha}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3.diff',
      },
    })
  
    if (!res.ok) throw new Error('GitHub commit fetch failed')
    return await res.text()
  }
  