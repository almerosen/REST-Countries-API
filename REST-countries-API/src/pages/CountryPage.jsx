import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { CountryDetail } from "../components/CountryDetail/CountryDetail";
import "./CountryPage.css";

export const CountryPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${name}`
        );
        const data = await response.json();
        console.log(data[0]);
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country", error);
      }
    };

    fetchCountry();
  }, [name]);

  return (
    <div>
      {country ? (
        <div className="country-page">
          <Link to="/">
            <button className="back-button">Back</button>
          </Link>
          <CountryDetail country={country} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
