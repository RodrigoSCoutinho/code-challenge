import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

  // const [students, setStudents] = useState([])
  // const [search, setSearch] = useState("")
 
  // useEffect(() => {
  //   axios.get('https://api.hatchways.io/assessment/students')
  //    .then((response) => {
  //       setStudents(response.data.students)
  //       console.log(response.data)
  //     }).catch(() => {
  //       console.log("Error")
  //     })
  // },[])

  const [values, setValues] = useState({
    email: "",
    password: "",
   });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleEmailInput = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value
    }));
  };

  const handlePasswordInput = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.email && values.password){
      setValid(true)
    }
    setSubmitted(true);
    console.log(values);
  }
  
  return(
    <>
    {/* <div className="leading-normal text-center">
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
    </div> */}


<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   <div className="max-w-md w-full space-y-8">
     <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
           <p className="mt-2 text-center text-sm text-gray-600">
             Or
             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
           </p>
 </div>
   
    <form className="mt-8 space-y-6" action="#" method="GET" onSubmit={handleSubmit}>
      { submitted && valid ? <div className="alert alert-success" role="alert">Sucess!</div> : null}
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label  className="sr-only">Email address</label>
          <input 
          id="email" 
          name="email" 
          type="email"  
          value={values.email}
          onChange={handleEmailInput}
          required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
          placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
          focus:z-10 sm:text-sm" 
          placeholder="Email address"/>
        </div>
      
        <div>
          <label  className="sr-only">Password</label>
          <input 
          id="password" 
          name="password" 
          value={values.password} 
          type="password" 
          onChange={handlePasswordInput} 
          required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
          placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
          focus:z-10 sm:text-sm" 
          placeholder="Password"/>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
    </>
    )
}
