import React from 'react';
import Countries from '../Countries/Countries';
import './Country.css'


const Country = (props) => {
    const {area, population, capital, name, flags} = props.country
    return (
        <div className='country'>
            <img src={flags.png} />
            <h2>Country : {name.common}</h2>
            <h4>population : {population}</h4>
            <p>Capital: {capital}</p>
            <p><small>Area : {area}</small></p>
            
        </div>
    );
};

export default Country;