import { Link } from "react-router";
import "./CountryDetail.css";

export const CountryDetail = ({ country }) => {
  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].official
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)[0].name
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const borders = country.borders || [];

  return (
    <div className="country-detail">
      <div className="img-container">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="country-flag"
        />
      </div>
      <div className="details">
        <h1 className="country-detail-name">{country.name.common}</h1>

        <section className="details-section">
          <div className="details-1">
            <p>
              <span>Native Name: </span>
              {nativeName}
            </p>
            <p>
              <span>Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span>Region: </span>
              {country.region}
            </p>
            <p>
              <span>Sub Region: </span>
              {country.subregion}
            </p>
          </div>
          <div className="details-2">
            <p>
              <span>Top Level Domain: </span>
              {country.altSpellings ? country.altSpellings[0] : "N/A"}
            </p>
            <p>
              <span>Currencies: </span>
              {currencies}
            </p>
            <p>
              <span>Languages: </span>
              {languages}
            </p>
          </div>
        </section>
        <section className="border-countries-section">
          <h3 className="border-title">Border Countries:</h3>
          <div className="border-countries">
            {borders.length > 0 ? (
              borders.map((borderCountry) => (
                <Link key={borderCountry} to={`/country/${borderCountry}`}>
                  <button className="border-button">{borderCountry}</button>
                </Link>
              ))
            ) : (
              <p>No border countries available</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
