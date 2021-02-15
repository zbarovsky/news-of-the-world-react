import React from 'react';

export const Display = props => {

    //let content = props.data ? '' : 'Ruh-Roh! API or props fail!';

    return (
        <div>
            <h1>Searched News</h1>
            <p>{props.display}</p>
        </div>
    )
};