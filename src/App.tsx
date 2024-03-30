import React, { useState } from 'react';
import CountryCheckbox from './components/countryCheckbox';


const countriesData: string[] = [
  'India',
  'Usa',
  'France',
];

const App: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleCountryToggle = (country: string) => {
    let updatedSelectedCountries: string[];
    if (selectedCountries.includes(country)) {
      updatedSelectedCountries = selectedCountries.filter(c => c !== country);
    } else {
      updatedSelectedCountries = [...selectedCountries, country];
    }
    setSelectedCountries(updatedSelectedCountries);
    setSelectAll(updatedSelectedCountries.length === countriesData.length);
  };

  const handleSelectAllToggle = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedCountries(newSelectAll ? [...countriesData] : []);
  };

  return (
    <div>
      <h1>Countries Checkbox</h1>
      <div>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllToggle}
        />
        <label>Select All</label>
      </div>
      <div>
        {countriesData.map(country => (
          <CountryCheckbox
            key={country}
            country={country}
            checked={selectedCountries.includes(country)}
            onChange={() => handleCountryToggle(country)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
