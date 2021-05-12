import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Dropdown(props) {
  const handleChange = (e) => {
    props.getData(e.target.value);
  };

  return (
    <div className="dropdown">
      <select
        name="bg"
        id="bg"
        class="form-select"
        style={{ width: "40%" }}
        onChange={handleChange}
      >
        <option>--Please select--</option>
        <option value="chess">Chess</option>
        <option value="badminton">Badminton</option>
        <option value="cricket">Cricket</option>
      </select>
    </div>
  );
}

export default Dropdown;
