import getUserProfileData from "@/services/githubapi";
export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const routeParams = await params;
  const userData = await getUserProfileData(routeParams.username);
  console.log(userData);

  return <div>Hi {routeParams.username} you have arrived to the Page</div>;
}
