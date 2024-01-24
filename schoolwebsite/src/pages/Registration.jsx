import React, { useState } from 'react';

const RegistrationForm = () => {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [mobileno, setMobileno] = useState();
  const[password,setPassword]= useState();

  const backgroundStyle = {
    backgroundImage: 'url("../src/assets/bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '120vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const formStyle = {
    backgroundColor: ' rgba(204, 204, 204, 0.6)', 
    padding: '30px',
    borderRadius: '15px',
    width: '500px',
  
  };

  function handleRegister(e) {
    e.preventDefault();
   const body = {
   firstname, lastname, email, mobileno, password
   }
   fetch("http://localhost:3000/register", {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
}).then(response => {
    if (response.status === 201) {
        return response.json()
    } else {
        alert(" Response Was Not Successfull ")
        alert(response.body.message)
        throw new Error(response)
    }
}).then(json=> alert(json.message))
          .catch(error=> alert(error))
        }

      return(


             <div style={backgroundStyle}>
              <div style={formStyle}>
         <form onSubmit={handleRegister} action="">
      <h2 className=" text-2xl font-semibold mb-4">Register</h2>
      
      <label htmlFor="firstname" className="block text-sm font-medium text-black mt-1">
          First Name:
        </label>
        <input type="text" id="firstname" name="firstname" value={firstname} onChange={(e)=> setFirstname(e.target.value)} placeholder='Enter first name' className="mt-1 p-2 w-full border rounded-md" required />
        <br />
        <label htmlFor="lastname" className="block text-sm font-medium text-black mt-1">
        Last Name:
        </label>
        <input type="text" id="lastname" name="lastname" value={lastname} onChange={(e)=> setLastname(e.target.value)} placeholder='Enter last name' className="mt-1 p-2 w-full border rounded-md" required  />
        <br />
        <label htmlFor="email" className="block text-sm font-medium text-black mt-1">
          Email:
        </label>
        <input  type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter the email' className="mt-1 p-2 w-full border rounded-md" required />
        <br />
        <label htmlFor="mobileno" className="block text-sm font-medium text-black mt-1">
        Mobile no:
        </label>
        <input type="number" id="number" name="number" value={mobileno} onChange={(e)=> setMobileno(e.target.value)} placeholder='Enter mobile no' className="mt-1 p-2 w-full border rounded-md" required/> 
        <label htmlFor="password" className="block text-sm font-medium text-black mt-1">
          Password:
        </label>
        <input type="password" id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter the password' className="mt-1 p-2 w-full border rounded-md" required />
        <br />
        <input type="checkbox" className='m-5' required/>
        <label htmlFor="" className=' text-black mt-1 text-xl'>
          I am not robot
        </label>
        <br/>

        <button
          className=" items-center mt-4 bg-lime-500 text-white p-2 rounded-md hover:bg-lime-600">
          Submit
        </button>
      </form>
      </div>
</div>
    
      
    
  
   
  );
      
      }; 
export default RegistrationForm;
