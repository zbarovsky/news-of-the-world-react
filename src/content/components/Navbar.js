import React, {useEffect, useState} from 'react'
import {Router, Link} from 'react-router-dom'


export const Navbar = (props) => {

    return (
        <div className='navbar'>
            <label style={{display: "none"}}for='search'></label>
            <input type='text' placeholder='Search'/>
            <button type='submit' onClick={() => props.handleSearch}>Search</button>
        </div>
    )
}