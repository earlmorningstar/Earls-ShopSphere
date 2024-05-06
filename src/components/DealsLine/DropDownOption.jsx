import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";

export default function DropDownOption() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [iso3, setIso3] = useState("");
  const [stateCode, setStateCode] = useState("");

  const url = "https://countriesnow.space/api/v0.1/countries/states";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.error === false) {
          setCountries(data.data);
        } else {
          console.error("Error fetching countries:", data.msg);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCountry && countries.length > 0) {
      const selectedCountryData = countries.find(
        (country) => country.name === selectedCountry
      );
      if (selectedCountryData) {
        setStates(selectedCountryData.states.map((state) => state.name));
        setIso3(selectedCountryData.iso3);
      }
    }
  }, [selectedCountry, countries]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    // Reset states and codes
    setStates([]);
    setIso3("");
    setSelectedState("");
    setStateCode("");
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);

    const selectedCountryData = countries.find(
      (country) => country.name === selectedCountry
    );
    if (selectedCountryData) {
      const selectedStateData = selectedCountryData.states.find(
        (s) => s.name === state
      );
      if (selectedStateData) {
        setStateCode(selectedStateData.state_code);
      }
    }
  };

  return (
    <div className="dropDownOption">
      <div>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <p>ISO3: {iso3}</p>
        {selectedCountry && (
          <div>
            <select value={selectedState} onChange={handleStateChange}>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <p>State Code: {stateCode}</p>
          </div>
        )}
      </div>

      <div className="address-parent">
        <div>
          <CiLocationOn size={18} />
          <div className="address-title">
            <p>Input a shipping address for delivery</p>
            <span>Earl's ShopSphere Address, ESA 01234</span>
          </div>
        </div>
        <button>Insert Address</button>
      </div>

      <div className="address-parent">
        <div>
          <AiOutlineHome size={18} />
          <div className="address-title">
            <p>Earl's ShopSphere HeadQuarter Address</p>
            <span>ESA 01234, World Country, All Continent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
