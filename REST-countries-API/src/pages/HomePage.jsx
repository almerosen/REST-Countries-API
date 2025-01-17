import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { CountryCard } from "../components/CountryCard/CountryCard";
import { Header } from "../components/Header/Header";
import "./HomePage.css";

export const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
        setCountries(data);

        const uniqueRegions = [
          ...new Set(data.map((country) => country.region)),
        ];
        console.log(uniqueRegions);
        setRegions(uniqueRegions);
      } catch (error) {
        console.error("Error fetching countries", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesRegion =
        !selectedRegion || country.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
    setFilteredCountries(filtered);
  }, [searchValue, selectedRegion, countries]);

  return (
    <div className="home-page">
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        regions={regions}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <div className="countries-list">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};
