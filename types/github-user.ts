export default interface GithubUserData {
  // required fields

  login: string;
  followers: string;
  following: string;
  created_at: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;

  // optional fields
  gists_url?: string;
  events_url?: string;
  received_events_url?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: string;
  twitter_username?: string;
  public_repos?: string;
}
