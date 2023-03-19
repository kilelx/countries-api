import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';

const Countries = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            // .then((res) => console.log(res.data));
            .then((res) => setData(res.data));
    }, []);

    const countryElements = data.map((country, index) => {
        return (
            <Country
                key = {index}
                name = {country.name.common}
                flag = {country.flags.png}
                altFlag = {country.flags.alt}
                population = {country.population}
                region = {country.region}
                capital = {country.capital}
            />
        )
    })

    return (
        <section className='container'>
            <ul className='countries--wrapper'>
                {countryElements}
            </ul>
        </section>
    )
}

export default Countries;