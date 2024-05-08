import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryList = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);
  const getCountries = () => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions`)
      .then((res) => {
        setCountry(res.data);
      });
  };


  let countryList = country
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((e) => {
    return (
      <div className="countryList" key={e.title}>
        <p>
          <Link
            className="countryLinks"
            to={"/emissions/" + e._id + "/" + e.title}
          >
            {" "}
            {e.title}
          </Link>
        </p>
      </div>
    );
  });
  return <div>{countryList}</div>;
};

export const DataContext = React.createContext();

export default CountryList;

