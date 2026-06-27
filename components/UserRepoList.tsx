import UserRepo from "@/types/user-repo";
export default function UserRepoList({ repo }: any) {
  return (
    <div>
      {`Public Repostitories ${repo.length}`}
      <div>
        {repo.map((ele: any) => {
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
            <div>
              <h1>{name}</h1>
              <p>{description}</p>
              <h3>{language}</h3>
              <h4>{updated_at} ago</h4>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
