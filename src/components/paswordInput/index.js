// import React, { Component } from 'react';

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import './style.css';

function PasswordInput(props) {
    console.log(props.passErr);
    const handleTogglePassword = () => props.setIsPasswordShown(!props.isPasswordShown);

    return (
        <div className='input_wrap'>
            <input type={(props.isPasswordShown) ? 'text' : 'password'}
                value={props.value}
                onChange={props.onChange} placeholder="Password" />
            <i onClick={handleTogglePassword}>
                {props.isPasswordShown ? <BsFillEyeFill className='eye' /> : <BsFillEyeSlashFill className='eye' />}

            </i>
            <span className="erorr__pasword">{(props.passErr === 'Passwords do not match, try again') ? props.passErr : null}</span>
        </div>

    );
}


export default PasswordInput;