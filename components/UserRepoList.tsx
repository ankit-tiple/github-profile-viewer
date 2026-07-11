"use client";
import { useMemo } from "react";
import UserRepo from "@/types/user-repo";
export default function UserRepoList({ repo }: any) {
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
        console.log(
          new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
            -getActualValue,
            unitKey,
          ),
        );
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
    <div>
      {`Public Repostitories ${repo.length}`}
      <div>
        {repo.map((ele: any, id: string) => {
          const [
            name,
            description,
            language,
            updated_at,
            stargazers_count,
            fork_count,
          ] = [
            ele[1].name,
            ele[1].description,
            ele[1].language,
            ele[1].updated_at,
            ele[1].stargazers_count,
            ele[1].fork_count,
          ];

          return (
            <div key={id}>
              <h1>{name}</h1>
              <p>{description}</p>
              <h3>{language}</h3>
              <h4>{`Updated ${getUpdatedAtDate(updated_at, now)}`}</h4>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
