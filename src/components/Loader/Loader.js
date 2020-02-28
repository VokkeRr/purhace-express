import React from 'react'
import loader from './loader.gif'

export default function Loader() { 
    return (
        <img className="loader" src={loader} alt='Loading...'/>
    )
}
