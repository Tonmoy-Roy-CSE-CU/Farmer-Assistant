import { useState } from "react";
import "../Style/Services.css";
const Services = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setSelectedOption(selectedValue);
  };
  return (
    <div className="Services">
      <div className="sa1">
        <div>
          <h2>I can suggest you crops by taking your information below.</h2>
        </div>
        <div className="dropdown-container">
          <label htmlFor="dropdown1">Dropdown 1:</label>
          <select
            id="dropdown1"
            name="dropdown1"
            onChange={handleDropdownChange}
            value={selectedOption}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <label htmlFor="dropdown2">Dropdown 2:</label>
          <select
            id="dropdown2"
            name="dropdown2"
            onChange={handleDropdownChange}
            value={selectedOption}
          >
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
            <option value="optionC">Option C</option>
          </select>

          <p>Selected Option: {selectedOption}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
