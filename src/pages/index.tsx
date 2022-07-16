import axios from "axios";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";


// type RepositoriesProps = {
//   company: string;
//   email: string;
// }

export default function Home() {

  const [students, setStudents] = useState([])
  
  // const { data: repositories} = useFetch<RepositoriesProps[]>('https://api.hatchways.io/assessment/students');
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
    <>
     {
      students.map((student, key) => {
         return(
          <div>
            {/* <img>{student.pic}</img> */}
          <h1>{student.firstName}</h1>
          <h3><span>Email: </span>{student.email}</h3>
          <h3><span>Company: </span>{student.company}</h3>
          <h3><span>Skill: </span> {student.skill}</h3>
          <h3><span></span>{student.grades}</h3>
          </div>
         )
      })}
    </>
    )
}
