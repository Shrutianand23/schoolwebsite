import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState();
    const [interest, setInterest] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const[message,setMessage]= useState();

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

  function handleContact(e) {
    e.preventDefault();
   const body = {
   name , email, mobile,message, interest
   }
   fetch("http://localhost:3000/addForm", {
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
         <form onSubmit={handleContact} action="">
      <h2 className=" text-2xl font-semibold mb-4">Contact</h2>
      
      <label htmlFor="name" className="block text-sm font-medium text-black mt-1">
           Name:
        </label>
        <input type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter first name' className="mt-1 p-2 w-full border rounded-md" required />
        <br />
        <label htmlFor="email" className="block text-sm font-medium text-black mt-1">
        Email:
        </label>
        <input type=" email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter the email' className="mt-1 p-2 w-full border rounded-md" required  />
        <br />
        <label htmlFor="mobile" className="block text-sm font-medium text-black mt-1">
          Mobile:
        </label>
        <input  type="number" id="mobile" name="mobile" value={mobile} onChange={(e)=> setMobile(e.target.value)} placeholder='Enter mobile no.' className="mt-1 p-2 w-full border rounded-md" required />
        <br />
        <label htmlFor="message" className="block text-sm font-medium text-black mt-1">
        Message:
        </label>
        <input type="text" id="message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder='Enter the message' className="mt-1 p-2 w-full border rounded-md" required/> 
        <label htmlFor="interest" className="block text-sm font-medium text-black mt-1">
          Interest:
        </label>
        <input type="interest" id="interest" name="interest" value={interest} onChange={(e)=> setInterest(e.target.value)} placeholder='Enter the interest' className="mt-1 p-2 w-full border rounded-md" required />
        <br />
        

        <button
          className=" items-center mt-4 bg-lime-500 text-white p-2 rounded-md hover:bg-lime-600">
          Submit
        </button>
      </form>
      </div>
</div>
    
      
    
  
   
  );
      
      }; 
export default ContactForm;
