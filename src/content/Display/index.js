import React from 'react';

export const Display = props => {

    //let content = props.data ? '' : 'Ruh-Roh! API or props fail!';
    // let display = props.display.map((result, i) => (
    //     <div>
    //         <ul>
    //             <li key={i}>
    //                 <a href={result.url}><h4>{result.title}</h4></a>
    //                 <p>{result.description}</p> 
    //             </li>
    //         </ul>
    //     </div>
    // ))

    return (
        <div>
            <h1>Searched News</h1>
            {/* <p>{display}</p> */}
        </div>
    )
};