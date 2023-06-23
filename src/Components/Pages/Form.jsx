import React from 'react'
import Forms from '../Inputs/Forms';
import { useSelector } from 'react-redux';
import { addTemplate } from '../../Features/UserSlice';
const InputForm=()=>{
    return (
      <>
      <div> 
        <Forms/>
      </div>
      </>
    );
  
  }
  
  export default InputForm