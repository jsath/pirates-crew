import React, {useState, setState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';

const View = (props) => {

    const [pirate, setPirate] = useState([]);
    const {id} = useParams();
    const[pegLeg, setPeg] = useState();
    const[eyePatch, setEye] = useState();
    const[hookHand, setHook] = useState();
    const[counter, setCounter] = useState(0);

    const setAll = (pirate) => {
        setPirate(pirate);
        setPeg(pirate.pegLeg);
        setEye(pirate.eyePatch);
        setHook(pirate.hookHand);
    }

    const getPirate = () => {
        axios.get('http://localhost:8000/api/pirates/' + id)
        .then(response=>{setAll(response.data.pirate)})
    }


    const handlePeg = () => {
        if(pegLeg){
            setPeg(false)
        }else{
            setPeg(true)
        }
        setCounter(counter+1)
    }
    const handleEye = () => {
        if(eyePatch){
            setEye(false)
        }else{
            setEye(true)
        }
        setCounter(counter+1)
    }
    const handleHook = () => {
        if(hookHand){
            setHook(false)
        }else{
            setHook(true)
        }
        setCounter(counter+1)
    }


    const handleEdit = () => {
        const updatedPirate = {
            pegLeg,
            eyePatch,
            hookHand
        }
        axios.put(`http://localhost:8000/api/pirates/${id}`, updatedPirate)
        .then(() => getPirate())
    }


    useEffect(
        () => {
        document.body.style.background = '#ff9900'
        getPirate()
        handleEdit()
        },
        [counter]
    )

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
    
    const btn = {
        height: 'fit-content',
        backgroundColor: '#095394',
        color: 'white',
        boxShadow: '2px 2px 2px black',
        borderRadius: '5px'
    };

    const gbtn = {
        height: 'fit-content',
        backgroundColor: 'green',
        color: 'white',
        boxShadow: '2px 2px 2px black',
        borderRadius: '5px'
    };

    const rbtn = {
        height: 'fit-content',
        backgroundColor: 'red',
        color: 'white',
        boxShadow: '2px 2px 2px black',
        borderRadius: '5px'
    };

    const main ={
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    const content ={
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const card ={
        backgroundColor: 'gray',
        width: "60%",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '15px',
        padding: '5px'
    };

    const catchPhrase = {
        fontStyle: 'italic'
    };

    return (

    <>
    <div style={nav}>
        <span></span>
        <h1>{pirate.name}</h1>
        <Link to={`/pirates`}><button style={btn}>Home</button></Link>
    </div>

    <div style={main}>
    {
        pirate ?
        <>
            <div style={card} key={pirate._id}>
            <div style={content}>
            <img src={pirate.image} width={'250px'} alt='pirate'/>
            </div>
            <h4 style={catchPhrase}>'{pirate.phrase}'</h4>
            <h2>About</h2>
            <p><strong>Position: </strong>{pirate.position}</p>
            <p><strong>Treasures: </strong>{pirate.chests}</p>


            <p><strong>Eye Patch: </strong>{
                pirate.eyePatch? 
                <>
                Yes
                <button style={rbtn} onClick={(e) => handleEye(e)}>No</button>
                </> 
                :
                <>
                No
                <button style={gbtn} onClick={(e) => handleEye(e)}>Yes</button>
                </>
            }</p>


            <p><strong>Peg Leg: </strong>{
            pirate.pegLeg?
            <>
            Yes
            <button style={rbtn} onClick={(e) => handlePeg(e)}>No</button>
            </> 
            :
            <>
            No
            <button style={gbtn} onClick={(e) => handlePeg(e)}>Yes</button>
            </>}
            </p>


            <p><strong>Hook Hand: </strong>{pirate.hookHand?
                <>
                Yes
                <button style={rbtn} onClick={(e) => handleHook(e)}>No</button>
                </> 
                :
                <>
                No
                <button style={gbtn} onClick={(e) => handleHook(e)}>Yes</button>
                </>
            }
            </p>

            </div>
        </>
        : 
        <h4>Loading</h4>
    }
        </div>
    </>
    )
}

export default View