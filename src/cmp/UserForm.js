import React, { Component } from 'react';
import { useState } from 'react';
import Userstable from './UserTable';

import FormControl from '@material-ui/core/FormControl';

const register=(obj,user,setObj,setFlag)=> {
    alert("reister done");
    console.log("old obj...",obj)
    console.log("new user...",user)
    obj=[...obj,user]
    setObj(obj)
    setFlag(true)
}

export default function UserForm({obj,setObj,isCreate,fields}) {

const [name,setName]=useState(fields.name)
const [birthDate,setBirthdate]=useState(fields.birthDate)
const [address,setAddress]=useState(fields.address)
const [college,setCollege]=useState(fields.college)
const [hobbies,setHobbies]=useState(fields.hobbies)
const [gender,setGender]=useState(fields.gender)
const [flag,setFlag]=useState(false)
const user={
    name,
    birthDate,
    address,
    gender,
    college,
    hobbies
}

if(flag){
    return(
        <Userstable usersData={obj} />
    )
}
        return (
            <div >
                    Enter Name <input 
                        value={name}
                        name="name"
                        type="text" placeholder="Enter Name"
                        onChange={(e) =>  setName(e.target.value)} 
                        /> <br /> <br/>
                    Birth Date <input type="text"
                        value={birthDate}
                         placeholder="Enter Birth Date"
                        onChange={(e) => { setBirthdate(e.target.value) }}
                        /> <br /> <br/>
                        
                    Enter Address <input 
                        value={address}
                        type="text" placeholder="Enter Address"
                        onChange={(e) => { setAddress(e.target.value) }} 
                        /> <br /> <br/>
                    Enter Gender <input 
                        value={gender}
                        type="text" placeholder="Enter Gender"
                        onChange={(e) => { setGender(e.target.value) }} 
                        /> <br /> <br/>
                    Enter College <input
                        value={college}
                         type="text" placeholder="Select College"
                        onChange={(e) => { setCollege(e.target.value) }} 
                        /> <br /> <br/>
                    Enter Hobbies <input 
                        value={hobbies}
                        type="text" placeholder="Enter Hobbies"
                        onChange={(e) => { setHobbies(e.target.value) }} 
                        /> <br /> <br/>
                    <button onClick={() => register(obj,user,setObj,setFlag)}> Register </button>
                
            </div>
        );
    }


    