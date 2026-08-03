"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Hero() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});

  const router = useRouter();
  const userViewButtonHandler = async () => {
    if (!username.trim()) return;
    router.push(`/${username}`);
  };

  return (
    <section className="flex flex-row bg-brand">
      <div className=" min-h-dvh flex-1 flex flex-col items-center justify-center">
        <p className="text-5xl text-center font-bold ">
          A Simpler way to show your Github Profile and Repositories
        </p>
        <div className="flex flex-row gap-2 py-2 justify-center item-center my-5">
          <Input
            placeholder="Enter a GitHub username"
            name="username"
            className="focus-visible:border-brand-content-200 focus-visible:ring-brand-content-200/50 bg-brand-content text-brand-content-200"
            value={username ?? ""}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            className="bg-base-content"
            onClick={() => userViewButtonHandler()}
          >
            Show Me
          </Button>
        </div>
      </div>
      <div className="min-h-dvh flex flex-1 justify-center items-center">
        <div className="flex w-full">
          <Card className="w-full max-w-xs relative z-10 rotate-[12deg] translate-y-10 animate-float-left ">
            <CardHeader>
              <Avatar>
                <AvatarFallback className="bg-blue-300 "></AvatarFallback>
              </Avatar>
              <Skeleton className="h-4 w-2/3 bg-brand-content-200" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="aspect-video w-full bg-brand-content-200" />
            </CardContent>
          </Card>

          <Card className="w-full max-w-xs relative z-20 -ml-10 animate-float-center">
            <CardHeader>
              <Avatar>
                <AvatarFallback className="bg-pink-200 "></AvatarFallback>
              </Avatar>
              <Skeleton className="h-4 w-2/3 bg-brand-content-200" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="aspect-video w-full bg-brand-content-200" />
            </CardContent>
          </Card>

          <Card className="w-full max-w-xs relative z-30 -ml-10 rotate-[12deg] -translate-y-15 animate-float-right">
            <CardHeader>
              <Avatar>
                <AvatarFallback className="bg-green-200 "></AvatarFallback>
              </Avatar>
              <Skeleton className="h-4 w-2/3 bg-brand-content-200" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="aspect-video w-full bg-brand-content-200" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
