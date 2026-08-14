"use client";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Star, CircleDot, GitFork } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserRepoList({ repo }: any) {
  const [repoArray, setRepoArray] = useState(repo);
  const [repoName, setRepoName] = useState("");

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoName(event.target.value);
    const resultArray = repo.filter((ele: any) => {
      return ele[1].name.toLowerCase().includes(repoName.toLowerCase());
    });
    setRepoArray([...resultArray]);
  };

  // As the Date.now() is Impure function React doesn't allow it's use as it may provide inconsistent output
  // impure render = unerilable output ont he render that occurs
  const now = useMemo(() => Date.now(), []);
  const getUpdatedAtDate = (updatedAt: string, nowDate: number) => {
    const diffInSec = (nowDate - new Date(updatedAt).getTime()) / 1000;
    // units is an Array of Tuple
    // Tuple consist of (unit,number)
    // Intl is a global Object with various methods and properties
    // one of the property that is used below is the RelativeTimeFormatUnit it is TypeScript Type that consist of year,month,day,hour and minutes
    const units: [Intl.RelativeTimeFormatUnit, number][] = [
      ["year", 31536000],
      ["month", 2592000],
      ["day", 86400],
      ["hour", 3600],
      ["minute", 60],
    ];
    for (const [unitKey, unitValue] of units) {
      if (diffInSec >= unitValue) {
        const getActualValue = Math.floor(diffInSec / unitValue);
        //  console.log(
        //    `The diffInSec ${diffInSec} and unitValue ${unitValue} and the getActualValue is ${getActualValue}`,
        //  );
        return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
          -getActualValue,
          unitKey,
        );
      }
    }
  };
  getUpdatedAtDate("2026-06-27T11:52:48Z", now);
  return (
    <div className="w-13/20  absoulte py-7">
      <Card className="border-2 border-base-content">
        <CardHeader>
          <CardTitle>
            <div>
              <p className="text-foreground">{`Public Repostitories ${repoArray.length}`}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search Repositories..."
            className="max-w-1/2 bg-brand-content border-2 focus-viso  border-base-content"
            value={repoName}
            onChange={(e) => inputChangeHandler(e)}
          ></Input>
          <br />
          <div>
            {repoArray.map((ele: any, id: string) => {
              const [
                name,
                description,
                language,
                updated_at,
                stargazers_count,
                forks_count,
                open_issues,
              ] = [
                ele[1].name,
                ele[1].description,
                ele[1].language,
                ele[1].updated_at,
                ele[1].stargazers_count,
                ele[1].forks_count,
                ele[1].open_issues,
              ];

              return (
                <Card
                  key={id}
                  className="my-5 flex flex-row border-2 border-brand-content"
                >
                  <div className="m-0 w-3/4 flex flex-col justify-center">
                    <CardHeader>
                      <CardTitle className="font-bold text-lg">
                        {name}
                      </CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h3>{language}</h3>
                      <h4>{`Updated ${getUpdatedAtDate(updated_at, now)}`}</h4>
                    </CardContent>
                  </div>
                  <div className=" border-l-2 flex flex-col justify-center p-2">
                    <ul className=" flex flex-col gap-3 ">
                      <li className="flex items-center gap-2">
                        <Star size={14} /> {stargazers_count}
                      </li>
                      <li className="flex items-center gap-2">
                        {" "}
                        <GitFork size={14} /> {forks_count}{" "}
                      </li>
                      <li className="flex items-center gap-2">
                        <CircleDot size={14} />
                        {open_issues}
                      </li>
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
