/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import people from '../../Assets/Images/people.svg';
import sex from '../../Assets/Images/sex.svg';
import './Login.css';
const Login = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [numberLength, setNumberLength] = useState(0);
  const [selectSex, setSelectSex] = useState('');

  let formData = {
    name: name,
    number: number,
    password: password,
    sex: sex,
  };
  const getNumber = (e) => {
    setNumberLength(e.target.value.length);
    setNumber(e.target.value);
  };
  const handleChange = (e) => {
    if (e.target.checked) {
      console.log('checked');
      setChecked(true);
    } else {
      setChecked(false);
      console.log('not checked');
    }
  };
  const handleSubmit = () => {
    console.log('submitted');
    console.log(formData);
    if (
      !formData.name &&
      !formData.number &&
      !formData.password &&
      !formData.sex
    ) {
      setChecked(false);
      //logic goes here
    } else {
      //logic goes here
    }
  };
  return (
    <div className='login'>
      <img src={people} />
      <form onSubmit={handleSubmit} class>
        <input type='text' placeholder='name' required />
        <div className='mobile-number'>
          <input
            type='text'
            placeholder='+91'
            className='country-code'
            required
          />
          <input
            type='tel'
            placeholder='Mobile No'
            maxlength='10'
            className='number'
            onChange={getNumber}
          />
        </div>
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className='input-length'>{numberLength}/10</span>
        <div className='select-sex'>
          <button
            onClick={() => {
              setSelectSex('male');
            }}
          >
            <img src={sex} className='sex-icon' />
          </button>
          <button
            onClick={() => {
              setSelectSex('female');
            }}
          >
            <img src={sex} className='sex-icon' />
          </button>
          <button
            onClick={() => {
              setSelectSex('others');
            }}
          >
            <img src={sex} className='sex-icon' />
          </button>
        </div>

        <div className='tnc'>
          <input
            type='checkbox'
            id='checkbox'
            name='checkbox'
            onClick={handleChange}
          />
          <label for='checkbox' />
          <span>
            I agree to <a href='#terms'>terms</a> &{' '}
            <a href='#condition'>Conditions</a>
          </span>
        </div>
        <button type='submit' className='submit-button' disabled={!checked}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
