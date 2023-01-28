import React, { useState } from 'react'
import '../sass/Register.scss'
import logo from '../assets/logo.svg'
import image from '../assets/image.svg'

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    function generateAuthNumber() {
        const letters = "FC";
        const numbers = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        return letters + numbers;
    }
      

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Generate a 5 digit random authentication number
        const authNumber = generateAuthNumber();
    
        try {
          // Send the authentication number to the email
          const sendEmailResponse = await fetch('https://falconlite.com/v1/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              to: formData.email,
              authNumber
            })
          });
    
          if (!sendEmailResponse.ok) {
            throw new Error(`Error sending email: ${sendEmailResponse.statusText}`);
          }
    
          // Send the form data to the server
          const submitFormResponse = await fetch('https://falconlite.com/v1/api/verify-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
    
          if (!submitFormResponse.ok) {
            throw new Error(`Error submitting form: ${submitFormResponse.statusText}`);
          }
    
          // Redirect to another page
          window.location.href = '/verification';
        } catch (error) {
          console.error(error);
          alert(error.message);
        }
    };
    


  return (
    <div className='register'>
        <div className="left">

            <img src={logo} alt="logo" />


            <h1>Create Account
                
            <p>Register on our website with your correct email address and information</p>
            </h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">First name
                    <input type="text" name='name' placeholder='Jeremiah' id='name' value={formData.name} onChange={handleChange} required/>
                </label>

                <label htmlFor="">Email Address
                    <input type="email" name='email' placeholder='Fame@gmail.com' id='email' value={formData.email} onChange={handleChange} required/>
                </label>

                <label htmlFor="">Phone number
                    <input type="tel" name='phone' placeholder='+2348103769079' id='tel' value={formData.phone} onChange={handleChange} required/>
                </label>

                <label htmlFor="">
                    Password
                    <input type="password" name='password' placeholder='********************' value={formData.password} onChange={handleChange} required/>
                </label>

                <label htmlFor="checkbox" id='check'>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <p>Remember me</p>
                </label>

                <input type="submit" value="Sign Up" id='sign'/>
                <p id='acc'>Already have an account? <a href="">Sign in</a></p>
            </form>
        </div>
        <div className="right">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Register