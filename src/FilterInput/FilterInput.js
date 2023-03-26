import React, { useState } from "react";

import styles from "./FilterInput.module.css";

const FilterInput = ({ filteration }) => {
  const [filter, setFilter] = useState("");
  const handleInputChange = (e) => {
    const name = e.target.value;
    setFilter(name);
    filteration(name);
  };
  return (
    <div className={styles.np}>
      <input
        type="text"
        style={{ marginBottom: "20px" }}
        value={filter}
        // ref={inputEl}
        placeholder="Enter Name"
        onChange={handleInputChange}
      />
      {/* <button onClick={() => inputEl.current.focus()}>Focus</button> */}
    </div>
  );
};

export default FilterInput;
