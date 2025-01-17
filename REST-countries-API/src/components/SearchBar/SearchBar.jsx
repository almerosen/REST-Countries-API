import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = ({
  searchValue,
  setSearchValue,
  regions,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  return (
    <div className="searchbar">
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          className="text-field"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>

      {/* <select
        className="drop-down"
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value="" className="options">
          Filter by region
        </option>
        {regions.map((region, index) => (
          <option key={index} value={region}>
            {region}
          </option>
        ))}
      </select> */}
      <div className="custom-dropdown">
        <button
          className="dropdown-button"
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          {selectedRegion || "Select a region"}
        </button>
        {isOpen && (
          <ul className="dropdown-options">
            {regions.map((region) => (
              <li
                key={region}
                className="option"
                onClick={() => handleSelect(region)}
              >
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
