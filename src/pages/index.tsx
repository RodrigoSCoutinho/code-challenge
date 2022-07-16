
import { useFetch } from "../hooks/useFetch";


type RepositoriesProps = {
  company: string;
  email: string;
}

export default function Home() {
  
  const { data: repositories} = useFetch<RepositoriesProps[]>('https://api.hatchways.io/assessment/students');
  
  return(
    <ul>
      {repositories?.map(repo => {
        return(
          <li key={repo.company}>
            <h1>{repo.company}</h1>
             <p>{repo.email}</p>
          </li> 
         )
      })}
    </ul>
    )
}
