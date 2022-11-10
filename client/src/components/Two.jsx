import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'


const Two = () => {

    const button = {
        backgroundColor: '#274690',
        color: 'white',
        marginTop: "15%"
    };

    useEffect(
        () => {
        document.body.style.background = '#302B27'
        },
        []
    )

  return (
    <>
        <Link to={'/one'}><button style={button}>Switch</button></Link>
    </>

  )
}

export default Two