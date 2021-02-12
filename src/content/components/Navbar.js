import React, {useEffect, useState} from 'react'
import {Router, Link} from 'react-router-dom'


export const Navbar = (props) => {

    return (
        <div className='navbar'>
            <form onSubmit={() => props.handleSearch()}>
                <label style={{display: "none"}}for='search'></label>
                <input id='searchBar' type='text' placeholder='Search' value={props.value} onChange={props.handleChange} />
            </form>
        </div>
    )
}