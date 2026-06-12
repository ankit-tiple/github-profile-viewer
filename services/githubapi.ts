interface GithubUserData {
  login: string;
  avatar_url: string;
  html_url: string;
  gists_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  twitter_username: string;
  public_repos: string;
  followers: string;
  following: string;
  created_at: string;
}

export default async function getUserProfileData(
  user: string
): Promise<GithubUserData> {
  const API_URL = `https://api.github.com/users/${user}`;
  const result = await fetch(API_URL);
  if (!result.ok) {
    throw new Error("User not Found");
  }

  const jsonData = await result.json();
  return {
    login: jsonData.login,
    avatar_url: jsonData.avatar_url,
    html_url: jsonData.html_url,
    gists_url: jsonData.gists_url,
    repos_url: jsonData.repos_url,
    events_url: jsonData.events_url,
    received_events_url: jsonData.received_events_url,
    blog: jsonData.blog,
    location: jsonData.location,
    email: jsonData.email,
    hireable: jsonData.hireable,
    twitter_username: jsonData.twitter_username,
    public_repos: jsonData.public_repos,
    followers: jsonData.followers,
    following: jsonData.following,
    created_at: jsonData.created_at,
  };
}
