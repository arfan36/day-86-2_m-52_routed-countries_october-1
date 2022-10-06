import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h2>All Countries {countries.length}</h2>
            {
                countries.map(country =>
                    <li key={country.alpha3Code}>
                        <Link to={`/country/${country.name}`} >{country.name}</Link>
                    </li>)
            }
        </div>
    );
};

export default Countries;