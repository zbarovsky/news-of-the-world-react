import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';
import { Navbar } from './components/Navbar'

import '../styling/style.css';
import axios from 'axios';

export const App = () => {

    let topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
    
    

    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')
    const [display, setDisplay] = useState('')

    useEffect(() =>{
        axios.get(topNewsUrl)
        .then(response => {
            setResults(response.data.articles)
        })
    }, [])

    function handleChange(e) {
        e.preventDefault()
        setSearch({value: e.target.value})
        //console.log('search ', search)
    }

    //console.log('bloopity ', search.value)

    function HandleSearch(e) {
        //alert(search.value)
        //GetSearch()
        e.preventDefault()
    }
    
    useEffect(() => {
        //alert('search hit')
        axios.get(`https://newsapi.org/v2/everything?q=${search.value}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            setDisplay(response.data.articles)
            console.log('display', display)
            return <Redirect to ={{pathname: "/display", state: {display: display} }} />
            //console.log('display ', response.data.articles)
        })
    }, [search])

    return (
        // Router for setting routes
        <div>
            <Navbar search={search} handleChange={handleChange} HandleSearch={HandleSearch} />
            <Router>
                <div className='app'>
                    <Landing results={results} />
                    <Route path='/display' render={(display) => <Display {...display} /> } />
                </div>
            </Router>
        </div>
    )
};