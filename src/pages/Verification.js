import React from 'react'
import '../sass/Verification.scss'
import logo from '../assets/logo.svg'
import image from '../assets/image.svg'

const Verification = () => {
  return (
    <div className='verification'>
        <div className="right">
          <div className="top">
            <img src={logo} alt="" />

            <h1>Kindly enter Email verification code
              <p>To Sign up, kindly enter the verification code sent to your email address</p>
            </h1>
          </div>

          <form action="">
            <label htmlFor="">
              <input type="text" name='name' required/>
              <input type="text" name='name' required/>
              <input type="number" name="number" id="" required/>
              <input type="number" name="number" id="" required/>
              <input type="number" name="number" id="" required/>
            </label>

            <input type="submit" value="Proceed" id='proceed' />
          </form>
        </div>
        <div className="left">
          <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Verification