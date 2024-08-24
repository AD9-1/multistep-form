import React, { useState } from 'react'
import Addons from "../Addons/Addons";
import Button from "../Button/Button";
import FinishUp from "../FinishUp/FinishUp";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
const Home = () => {
    const[step,setStep]=useState(1)
  return (
    <div className='home'>
      {step===1 && ( <PersonalInfo step={step} setStep={setStep}/>)}
      {step===2 && ( <Addons step={step} setStep={setStep}/>)}
      {step===3 && ( <SelectPlan step={step} setStep={setStep}/>)}
      {step===4 && ( <FinishUp step={step} setStep={setStep}/>)}
    </div>
  )
}

export default Home
