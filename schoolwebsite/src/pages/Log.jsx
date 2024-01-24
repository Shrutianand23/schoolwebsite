import React, { useState } from 'react';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const[password,setPassword]= useState('');
  
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
   }
   const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }
const handelSubmit =(e)=>{
    e.preventdefault();
}
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
    },
    loginForm: {
      flex: 1,
      padding: '20px',
      textAlign: 'center',
      backgroundColor: 'gray',
      
    },
    imageContainer: {
      flex: 1,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
};


  return (
    <div style={styles.container}>
      <div style={styles.loginForm}>
        <form onSubmit={handelSubmit} action="">
        <h1 className='  m-5 text-5xl'>Login</h1>
        <label>
          Email:
          <input className='  p-2 w-full border rounded-md m-2' type="email" name="email" onChange={handleEmailChange} placeholder='Enter the email' required/>
        </label>
        <br />
        <label>
          Password:
          <input className='  p-2 w-full border rounded-md m-2' type="password" name="password" onChange={handlePasswordChange} placeholder='Enter the password' required />
        </label>
        <br />
        <button className=' bg-lime-500 m-2 hover:bg-lime-600 rounded-md w-64 h-10' >Login</button>
        <h2 className='m-5 flex text-lg'>Forget Password?</h2>
        <h4 className='m-5 flex justify-between text-lg'>Don't have an account
        <button className=' bg-blue-500 hover:bg-blue-600 rounded-md w-40 h-8'>Register</button></h4>
        </form>
      </div>
      <div style={styles.imageContainer}>
        <img src="../src/assets/vote.jpg" alt="Background" style={styles.image} />
       
      </div>
    </div>
    
  );



};

export default LoginPage;
