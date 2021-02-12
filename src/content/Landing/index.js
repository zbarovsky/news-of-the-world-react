import React from 'react';

export const Landing = props => {

    let articles = props.results.map((result, i) => (
       <div className='article'>
           <ul>
               <li>
                    <a href={result.url}><h4 className='articleTitle'>{result.title}</h4></a>
                    <p>{result.description}</p>
               </li>
           </ul>
       </div>
    ))

    return (
        <div>
            <h1 className='landingTitle'>Current Top News</h1>
            {articles}
        </div>
    )
};