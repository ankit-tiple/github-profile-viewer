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
  return (
    <div className="flex space justify-around gap-2 bg-base-100">
      <div className="w-2/5  relative">
        <UserBio user={userData} />
      </div>
      <div className="w-6/10 relative">
        <UserRepoList repo={userRepo} />
      </div>
    </div>
  );
}
