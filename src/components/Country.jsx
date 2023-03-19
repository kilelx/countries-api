const Country = (props) => {
    console.log(props);
    return (
        <article className="card bg">
            <img src={props.flag} alt={props.altFlag} className="flag"/>
            <div className="infos">
                <h3>{props.name}</h3>
                <p><span>Population : </span>{props.population}</p>
                <p><span>Region : </span>{props.region}</p>
                <p><span>Capital : </span>{props.capital}</p>
            </div>
        </article>
    )
}

export default Country;