import { useEffect, useState } from "react"

type Students = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  skill: string;
  grades: number;
}

export default function Home() {
  
  const [students, setStudents] = useState<Students[]>([])
  
  useEffect(() => {
    fetch('https://api.hatchways.io/assessment/students')
     .then(response => response.json())
     .then(data => {
       setStudents(data);
    })
  },[])
  
  return (
    <ul>
       {students.map(stu => {
            return(
                <li key={stu.firstName}>
                 <h3>{stu.firstName}</h3>
                </li>
      )
   })}
  </ul>
  )
}
