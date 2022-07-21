import axios from "axios";
import { useEffect, useState } from "react";

// import { useFetch } from "../hooks/useFetch";


// type RepositoriesProps = {
//   company: string;
//   email: string;
// }

export default function Home() {
  
  // const { data: repositories} = useFetch<RepositoriesProps[]>('https://api.hatchways.io/assessment/students');

  const [students, setStudents] = useState([])
 
  useEffect(() => {
    axios.get('https://api.hatchways.io/assessment/students')
     .then((response) => {
        setStudents(response.data.students)
        console.log(response.data)
      }).catch(() => {
        console.log("Error")
      })
  },[])
  
  return(
    <>
     {
       students.map((student, key) => {
         return(
           <div>
            <img alt="Student" id={student.id}
            src={student.pic}
            className="area"
            >{student.img}
            </img>
          
          <h1>{student.firstName}<span> {student.lastName}</span> </h1>
          <p><span>Email: </span>{student.email}</p>
          <p><span>Company: </span>{student.company}</p>
          <p><span>Skill: </span> {student.skill}</p>
          <p><span>Average: </span> {student.grades}</p>
          </div>
         )
        })}
    </>
        // <ul>
        //   {repositories?.map(repo => {
        //     return(
        //       <li>{repo.company}
        //         <h1>{repo.company}</h1>
        //          <p>{repo.email}</p>
        //       </li> 
        //      )
        //   })}
        // </ul>
    )
}
