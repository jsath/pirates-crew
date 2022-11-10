import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const Add = (props) => {

    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[chests, setChests] = useState();
    const[phrase, setPhrase] = useState('');
    const[position, setPosition] = useState('');
    const[pegLeg, setPeg] = useState(true);
    const[eyePatch, setEye] = useState(true);
    const[hookHand, setHook] = useState(true);
    const [errors, setErrors] = useState([]); 

    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const handleChests = (e) => {
        setChests(e.target.value)
    }

    const handlePhrase = (e) => {
        setPhrase(e.target.value)
    }

    const handlePosition = (e) => {
        setPosition(e.target.value)
    }
    const handlePeg = (e) => {
        if(pegLeg){
            setPeg(false)
        }else{
            setPeg(true)
        }
    }
    const handleEye = (e) => {
        if(eyePatch){
            setEye(false)
        }else{
            setEye(true)
        }
    }
    const handleHook = (e) => {
        if(hookHand){
            setHook(false)
        }else{
            setHook(true)
        }
    }


    //styling
    const nav ={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '40%',
        backgroundColor: '#783f04',
        width: '100%',
        color: 'white',
        alignItems: 'center',
    };

    const red ={
        color: "red"
    };

    const btn = {
        height: 'fit-content',
        backgroundColor: '#095394',
        color: 'white',
        boxShadow: '2px 2px 2px black',
        borderRadius: '5px'
    };

    const main ={
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%'
    };

    const left = {
        display: 'flex',
        flexDirection: 'column',
        width: '150px'
    };
    const right={
        display: 'flex',
        flexDirection: 'column',
        width: '150px'
    };

    const card ={
        backgroundColor: 'gray',
        width: "20%",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '15px',
        padding: '5px',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px'
    };

    useEffect(
        () => {
        document.body.style.background = '#ff9900'
        },
        []
    )


    const handleSubmit = (e) => {
        setErrors([]);
        e.preventDefault()
        const newPirate =    {
                name: name,
                image: image,
                chests: chests,
                phrase: phrase,
                position: position,
                pegLeg: pegLeg,
                eyePatch: eyePatch,
                hookHand: hookHand
            }
        console.log(newPirate)
        axios.post('http://localhost:8000/api/pirates', newPirate)
        .then(res=>console.log(res))
        .then(() => navigate('/pirates'))
        .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
            console.log(errorArr);
        })
    }



    return (
    <>
    <div style={nav}>
        <span></span>
        <h1>Add Pirate</h1>
        <Link to={`/pirates`}><button style={btn}>Crew Board</button></Link>
    </div>

    <div style={main}>
        <div style={card}>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div style={left}>
            <label>Pirate Name: </label>
            <input onChange={(e) => handleName(e)}/>
            <label>Image URL: </label>
            <input onChange={(e) => handleImage(e)}/>
            <label># of Tresure Chests: </label>
            <input type='number' onChange={(e) => handleChests(e)}/>
            <label>Catch Phrase: </label>
            <input onChange={(e) => handlePhrase(e)}/>
            </div>

            <div style={right}>
            <label>Crew Position: </label>
            <select onChange={(e) => handlePosition(e)} defaultValue={'Captain'}>
                <option value="Captain">Captain</option>
                <option value="First Mate">First Mate</option>
                <option selected value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
                <option value="Chef">Chef</option>
            </select>
            <label>Peg Leg: </label>
            <input type='checkbox' defaultChecked={true} onChange={(e) => handlePeg(e)}/>
            <label>Eye Patch: </label>
            <input type='checkbox' defaultChecked={true} onChange={(e) => handleEye(e)}/>
            <label>Hook Hand: </label>
            <input type='checkbox' defaultChecked={true} onChange={(e) => handleHook(e)}/>

            {errors?errors.map((err, index) => <p key={index} style={red}>{err}</p>):''}

            <button style={btn}>Add Pirate!</button>
            </div>

        </form>
        </div>
    </div>

    

    
    
    </>
    )
}

export default Add