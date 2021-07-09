import React from "react";
import { ContainerInput } from "./style";

const InputSearch = ({ setFilterByName, patients, setGender }) => {
  const filterByName = (name) => {
    const filter = new RegExp(name, "gim");
    const filterName = patients.filter(
      ({ name }) => filter.test(name.first) || filter.test(name.last)
    );

    setFilterByName(filterName);
  };
  return (
    <ContainerInput>
      <div>
        <label>Search</label>

        <input
          placeholder="Searching by name..."
          onChange={({ target }) => filterByName(target.value)}
        />
      </div>

      <select onChange={({ target }) => setGender(target.value)}>
        <option value="">select the gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </ContainerInput>
  );
};

export default InputSearch;
