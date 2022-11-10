import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const One = () => {

    const button = {
        backgroundColor: '#302B27',
        color: 'white',
        marginTop: "15%"
    };

    useEffect(
        () => {
        document.body.style.background = '#274690'
        },
        []
    )

  return (
    <>
            <Link to={'/two'}><button style={button}>Switch</button></Link>    </>
  )
}

export default One