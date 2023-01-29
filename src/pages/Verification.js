import React, { useState } from 'react'
import '../sass/Verification.scss'
import logo from '../assets/logo.svg'
import image from '../assets/image.svg'

const Verification = () => {
  const [inputValues, setInputValues] = useState(['', '', '', '', '']);

  const handleInputChange = (event, index) => {
    const values = [...inputValues];
    values[index] = event.target.value;
    setInputValues(values);
    if (index < 4 && values[index].length === 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === 'Backspace' && inputValues[index].length === 0) {
      document.getElementById(`input-${index - 1}`).focus();
    }
  };

  const handleFocus = async (event, index) => {
    event.preventDefault();
    const paste = await navigator.clipboard.readText();
    const newInput = paste.split('').slice(0, 5);
    setInputValues(inputValues.map((val, i) => (i < newInput.length ? newInput[i] : val)));
  };

  return (
    <div className='verification'>
        <div className="left">
          <div className="top">
            <img src={logo} alt="" />

            <h1>Kindly enter Email verification code
              <p>To Sign up, kindly enter the verification code sent to your email address</p>
            </h1>
          </div>

          <form action="code">
            <label htmlFor="">
              {inputValues.map((value, index) => (
                <input
                  key={index}
                  id={`input-${index}`}
                  type={index < 2 ? 'text' : 'number'}
                  maxLength={1}
                  value={value}
                  onChange={(event) => handleInputChange(event, index)}
                  onKeyDown={(event) => handleBackspace(event, index)}
                  onFocus={(event) => handleFocus(event, index)}
                  className={`code`}
                />
              ))}
            </label>

            <input type="submit" value="Proceed" id='proceed' />
          </form>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Verification