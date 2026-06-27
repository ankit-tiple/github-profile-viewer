import UserRepo from "@/types/user-repo";

export default async function getUserRepo(api: string) {
  const userRepoResponse = await fetch(api);
  if (!userRepoResponse.ok) {
    throw new Error("Unable to Fetch User Github Repo");
  }
  const userRepoData = await userRepoResponse.json();
  return Object.entries(userRepoData);
}
