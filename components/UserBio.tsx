import GithubUserData from "@/types/github-user";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function UserBio({ user }: { user: GithubUserData }) {
  return (
    <div className="w-4/10  absolute right-0 py-7 ">
      <Card className="border-base-content border-2 bg-base">
        <CardHeader className="flex justify-between items-center">
          <Avatar>
            <AvatarImage src={user.avatar_url} />
            <AvatarFallback>{user.login}</AvatarFallback>
          </Avatar>
          <div className="flex gap-1">
            <Image
              src="/assets/GitHubLogo/GitHubLogo/SVG/GitHub_Invertocat_Black_Clearspace.svg"
              alt={user.login}
              width={20}
              height={20}
              className="mr-0"
            ></Image>
            <CardTitle className="text-foreground">{user.login}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className=" space-y-2 divide-y divide-border">
            {user.location && (
              <li className="py-2 flex justify-between">
                <p>Location</p> <p>{user.location}</p>
              </li>
            )}
            {user.blog && (
              <li className="py-2 flex justify-between">
                <p>Website</p> <p>{user.blog}</p>
              </li>
            )}
            {user.email && (
              <li className="py-2 flex justify-between">
                <p>Email</p> <p>{user.email}</p>
              </li>
            )}
            {user.twitter_username && (
              <li className="py-2 flex justify-between">
                <p>Twitter</p> <p>{user.twitter_username}</p>
              </li>
            )}
            <li className="py-2 flex justify-between">
              <p>Following</p> <p>{user.following}</p>
            </li>
            <li className="py-2 flex justify-between">
              <p>Followers</p> <p>{user.followers}</p>
            </li>
            {user.public_repos && (
              <li className="py-2 flex justify-between">
                <p>Repos</p> <p>{user.public_repos}</p>
              </li>
            )}
            <li className="py-2 flex justify-between">
              <p>Github member since</p>{" "}
              <p>{new Date(user.created_at).getFullYear()}</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
