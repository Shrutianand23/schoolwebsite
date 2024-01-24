import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = () => {
const [email,setEmail] =useState();
const [password,setPassword] = useState();
const navigation = useNavigate()
  const backgroundStyle = {
    backgroundImage: 'url("../src/assets/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
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
  function handleLogin (e) {
    e.preventDefault();
   const body ={
   email,password
    }
  fetch("http://localhost:3000/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(body)
          }).then(response => {
              if (response.status === 200) {
                   response.json() .then(json=> {
                    console.log(json.token)
                    localStorage.setItem("userToken",json.token)
                    alert("Login Successfully")
                    navigation("/dashboard")
                   })
              } else {
                  alert(" Response Was Not Successfull ")
                  alert(response.body.message)
                  throw new Error(response)
              }
          }).then(json=> alert(json.message))
          .catch(error=> alert(error))
        }

  return (


<div style={backgroundStyle}>
<div style={formStyle}>
  <h2 className=' text-5xl' style={{ textAlign: 'center', marginBottom: '25px' }}>Login</h2>
    <form onSubmit={handleLogin} action="">
      <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '18px' }} />
      <input type="password" placeholder=" Enter the password" onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '18px' }} />
      <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Login</button>
      <h3 className=' text-black m-1 text-lg'> Forget Password? </h3>
      
      <h4 className='text-black m-2 flex justify-between text-lg'>Don't have an account?<button className=' bg-blue-500 hover:bg-blue-600  rounded-md h-8 w-40'>
        <Link to={'/registration'}>
        Register
      </Link>
      </button>
      </h4>
    </form>
    </div>
  </div>
 
  );
  };


export default LoginForm
