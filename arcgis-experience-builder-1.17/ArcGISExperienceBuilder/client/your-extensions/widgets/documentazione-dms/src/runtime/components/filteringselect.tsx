import React, { useState } from 'react';
import Select from 'react-select';

const FilteringSelect = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    if (onChange) onChange(selected);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      getOptionLabel={(e) => e.name || e.d.results[0].Doknr} // Come eseguire il mapping del valore
      getOptionValue={(e) => e.name || e.d.results[0].Doknr}
      placeholder="Seleziona un'opzione"
      isSearchable // Abilita la ricerca
    />
  );
};

export default FilteringSelect;