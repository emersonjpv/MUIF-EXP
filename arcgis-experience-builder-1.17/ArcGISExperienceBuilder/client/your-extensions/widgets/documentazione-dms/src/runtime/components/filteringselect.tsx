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
      getOptionLabel={(e) => e.name} // Come eseguire il mapping del valore
      getOptionValue={(e) => e.name}
      placeholder="Seleziona un'opzione"
      isSearchable // Abilita la ricerca
    />
  );
};

export default FilteringSelect;