import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Display } from './Display';
import { Landing } from './Landing';
import { Navbar } from './components/Navbar'

import '../styling/style.css';
import axios from 'axios';

// export const is quicker but must be imported directly
// rather than as a default
// refer to index.js at src root to see how import works

// --------------------- TODO --------------------------
/* 
    make navbar with routes/search functionality
        // search should take string, then use api to get appropriate articles to reference
        // search bar renders display page with appropriate info
    landing page -- DONE
        display top articles for us
*/


export const App = () => {

    let topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
    

    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')
    const [display, setDisplay] = useState([])

    useEffect(() =>{
        axios.get(topNewsUrl)
        .then(response => {
            setResults(response.data.articles)
        })
    }, [])

    function handleSearch(e) {
        setSearch(e)
        console.log(search)
        let searchNewsUrl = `https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.REACT_APP_API_KEY}`

        // useEffect(() => {
        //     axios.get(searchNewsUrl)
        //     .then(response => {
        //         setDisplay(response.data.articles)
        //     })
        // })
    }


    return (
        // Router for setting routes
        <div>
            <Navbar handleSearch={handleSearch}/>
            <Router>
                <div className='app'>
                    <Landing results={results} />
                    {/* <Display display={display} /> */}
                </div>
            </Router>
        </div>
    )
};