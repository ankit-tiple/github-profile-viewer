import UserRepo from "@/types/user-repo";

export default async function getUserRepo(api: string): Promise<UserRepo> {
  const userRepoResponse = await fetch(api);
  if (!userRepoResponse.ok) {
    throw new Error("Unable to Fetch User Github Repo");
  }
  const userRepoData = await userRepoResponse.json();
  console.log(userRepoData);
  return {
    name: userRepoData.name,
    description: userRepoData.description,
    language: userRepoData.language,
    updated_at: userRepoData.updated_at,
    stargazers_count: userRepoData.stargazers_count,
    fork_count: userRepoData.fork_count,
  };
}
