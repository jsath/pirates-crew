import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

const Crew = () => {

    //state
    const [pirates, setPirates] = useState([]);



    const getPirates = () => {
        axios.get('http://localhost:8000/api/pirates')
        .then(response=>{setPirates(response.data.pirates)})
    }


    useEffect(
        () => {
        document.body.style.background = '#ff9900'
        getPirates()
        },
        []
    )

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }

    const deletePirate = (pirateId) => {
        axios.delete('http://localhost:8000/api/pirates/' + pirateId)
            .then(res => {
                removeFromDom(pirateId)
            })
            .catch(err => console.error(err));
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
    
    const btn = {
        height: 'fit-content',
        backgroundColor: '#095394',
        color: 'white',
        boxShadow: '2px 2px 2px black',
        borderRadius: '5px'
    };

    const bdanger = {
        height: 'fit-content',
        backgroundColor: '#cf2b27',
        color: 'white',
        boxShadow: '2px 2px 2px black',
        borderRadius: '5px'
    };

    const main ={
        width: '75%',
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
        width: "40%",
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '15px',
        padding: '15px',
        marginTop: '15px'
    };

    const img ={
        width: '250px',
        height: 'auto',
        borderRadius: '15px'
    };


    return (
    <>
    <div style={nav}>
        <span></span>
        <h1>Pirate Crew</h1>
        <Link to={`/pirate/new`}><button style={btn}>Add Pirate!</button></Link>
    </div>

    <div style={main}>
    {
        pirates ?
        pirates.map((pirate) => 
        <>
            <div style={card} key={pirate._id}>
            <h3>{pirate.name}</h3>

            <div style={content}>
            <img src={pirate.image} style={img} alt='pirate'/>
            <Link to={`/pirate/${pirate._id}`}><button style={btn}>View Pirate</button></Link>&nbsp;
            <button style={bdanger} onClick={() => deletePirate(pirate._id)}>Walk the Plank</button>
            </div>
            </div>
        </>
        )
        : 
        ''
    }
    </div>
    </>
    )
}

export default Crew