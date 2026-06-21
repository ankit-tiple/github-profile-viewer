import getUserProfileData from "@/services/githubapi";
import UserBio from "@/components/UserBio";
import UserRepoList from "@/components/UserRepoList";
import getUserRepo from "@/services/getUserRepo";
export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const routeParams = await params;
  const userData = await getUserProfileData(routeParams.username);
  const userRepo = await getUserRepo(userData.repos_url);
  console.log(userRepo);

  return (
    <div className="flex space justify-around">
      <UserBio user={userData} />
      <UserRepoList repo={userRepo} />
    </div>
  );
}
