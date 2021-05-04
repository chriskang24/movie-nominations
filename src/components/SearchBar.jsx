import React, { useState, useEffect, useCallback } from "react";
import useDelay from "../hooks/useDelay";
import { MDBIcon } from "mdbreact";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDelay(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <div className="input-group md-form form-sm form-1 pl-0"
      onSubmit={e => e.preventDefault()}
    >
      <div className="input-group-prepend">
        <span className="input-group-text purple lighten-3" id="basic-text1">
          <MDBIcon className="text-white" icon="search" />
        </span>
      </div>
      <input className="form-control my-0 py-1" type="text" placeholder="Search for Movies Here" aria-label="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}