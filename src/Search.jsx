import React, { useState } from 'react';


function Search(props) {
  const [state, setState] = useState("");

  const change = (e) => {
    setState(e.target.value.toUpperCase());
  }

  const keys = (e) => {
    if (e.key === "esc") {
      setState("");
    }
  }

  let filtered = props.data.filter((element) => element.name.toUpperCase().includes(state));

  return (
    <div>
    <h1>Search for Countries</h1>
      <input type="text" value={state} onChange={(e) => change(e)} onKeyDown={(e) => keys(e)} />
      <div>
        {state && filtered.length > 0?(filtered.map((item) => {
          return (
            <p key={item.code}>{item.name}</p>
          )
        })):(<p>{state ? "No State Found" : ""}</p>)}
      </div>
    </div>
  );
}

export default Search;