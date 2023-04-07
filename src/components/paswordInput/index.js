// import React, { Component } from 'react';

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import './style.css';

function PasswordInput(props) {

    const handleTogglePassword = () => props.setIsPasswordShown(!props.isPasswordShown);

    return (
        <div className='input_wrap'>
            <input type={(props.isPasswordShown) ? 'text' : 'password'}
                value={props.value}
                onChange={props.onChange} placeholder="Password" />
            <i onClick={handleTogglePassword}>
                {props.isPasswordShown ? <BsFillEyeFill className='eye' /> : <BsFillEyeSlashFill className='eye' />}

            </i>
        </div>


    );
}


export default PasswordInput;