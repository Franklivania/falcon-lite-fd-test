import React from 'react'
import '../sass/Register.scss'
import logo from '../assets/logo.svg'
import image from '../assets/image.svg'

const Register = () => {
  return (
    <div className='register'>
        <div className="right">

            <img src={logo} alt="logo" />


            <h1>Create Account
                
            <p>Register on our website with your correct email address and information</p>
            </h1>

            <form action="">
                <label htmlFor="">First name
                    <input type="text" placeholder='Jeremiah' />
                </label>

                <label htmlFor="">Email Address
                    <input type="email" placeholder='Fame@gmail.com' />
                </label>

                <label htmlFor="">Phone number
                    <input type="tel" placeholder='+2348103769079' />
                </label>

                <label htmlFor="">
                    Password
                    <input type="password" placeholder='********************' />
                </label>

                <label htmlFor="">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <p>Remember me</p>
                </label>

                <input type="submit" value="Sign Up" id='sign'/>
                <p>Already have an account <a href="">Sign in</a></p>
            </form>
        </div>
        <div className="left">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Register