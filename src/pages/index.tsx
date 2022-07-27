import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  const [students, setStudents] = useState([])
  const [search, setSearch] = useState("")
 
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

    <div className="leading-normal text-center">
      <input type="text" 
      placeholder="Search..."
      onChange={(event) => {
        setSearch(event.target.value)
      }}/>
     {
       students.map((student, key) => {
        if(search === ""){
    
        } else {
          return(
            <div className="flex flex-col items-center justify-around  md:flex-row">
                <img alt="Student" id={student.id}
                 src={student.pic}
                 className="skew-y-12 w-40 h-40 rounded-full "
                 >{student.img}
                 </img>
           
                   <h1 className="text-5xl font-semibold float-left">{student.firstName}<span> {student.lastName}</span> </h1>
                   <p className="text-red-600"><span>Email: </span>{student.email}</p>
                   <p> <span>Company: </span>{student.company}</p>
                   <p><span>Skill: </span> {student.skill}</p>
                   <p><span>Average: </span> {student.grades}</p>
           </div>
     )
        }
        })}
    </div>
    </>
    )
}
