import React from 'react';
import './Country.css'


const Country = (props) => {
    // console.log(props);
    // console.log(props.country);
    const {name, area, population, flags} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country : {name.common}</h2>
            <p>Area : <small>{area}</small></p>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;