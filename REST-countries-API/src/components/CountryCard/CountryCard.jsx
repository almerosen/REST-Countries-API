import { Link } from "react-router";
import "./CountryCard.css";

export const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca2}`} className="country-link">
      <div className="country-card">
        <div className="flag-container">
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="country-flag"
          />
        </div>
        <section className="country-card-details">
          <h2 className="name">{country.name.common}</h2>
          <div className="country-data">
            <p>
              <span>Population:</span> {country.population.toLocaleString()}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Capital:</span>{" "}
              {country.capital ? country.capital[0] : "N/A"}
            </p>
          </div>
        </section>
      </div>
    </Link>
  );
};
