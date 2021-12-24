import React from 'react'
import { PLAN } from "../../data/data";
import './Plan.css'

const Plan = () => {
    return (
        <div className='planContainer'>
            <div> <span>Plan : </span> <span className='data'>{PLAN.name}</span></div>
            <div> <span>Author : </span> <span className='data'>{PLAN.userCreated}</span></div>
        </div>
    )
}

export default Plan
