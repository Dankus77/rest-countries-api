import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const url = 'https://restcountries.com/v2/all';
const Countries = () => {
    const [countries, setCountries] = useState([]);

    
    useEffect(() => {
    const fetchCountries = async () =>{
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    }
    fetchCountries();
    }, [])

    const removeCountry = (alpha2Code) => {
        const newCountry = countries.filter(country => country.alpha2Code !== alpha2Code)
        setCountries(newCountry)
    }

    return (
    <div>
        <section className="country">
        {countries.map(country =>{
            const {alpha2Code, name, population, region, capital, flag} = country
            return <article key={alpha2Code}>
                <div>
                <img src={flag} alt={name} />
                <div className="info">
                <h3>Name: {name}</h3>
                <h4>Population: {population}</h4> 
                <h4>Region: {region}</h4>
                <h4>Capital: {capital}</h4>
                <Link to={`/countries/${name}`} className="btn">Learn More</Link>
                <button className="btn" onClick={() => removeCountry(alpha2Code)}>Remove Country</button>
                </div>
                </div>
            </article>
        })}
        </section>
    </div>
    )
}

export default Countries;