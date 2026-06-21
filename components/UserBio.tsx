import GithubUserData from "@/types/github-user";
export default function UserBio({ user }: { user: GithubUserData }) {
  return (
    <div className="border border-cyan-400 w-70 h-100 p-2">
      This is User Bio
      <img
        className="h-15 w-15 rounded-full"
        src={user.avatar_url}
        alt="Avatar"
      />
      <ul className="p-2">
        <li>Location {user.location}</li>
        {user.blog && <li>Website {user.blog}</li>}
        {user.email && <li>Email {user.email}</li>}
        {user.twitter_username && <li>Twitter {user.twitter_username}</li>}
        <li>Following {user.following}</li>
        <li>Followers {user.followers}</li>
        {user.public_repos && <li>Repos {user.public_repos}</li>}
        <li>Github since {new Date(user.created_at).getFullYear()}</li>
      </ul>
    </div>
  );
}

// //
//   gists_url?: string;
//   events_url?: string;
//   received_events_url?: string;
//   blog?: string;
//   location?: string;
//   email?: string;
//   hireable?: string;
//   twitter_username?: string;
//   public_repos?: string;
// //
