import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Graph from "./Graph";
import axios from "axios";

// const energy = ["_gas", "_biomass_waste", "_coal", "_geothermal", "_hydro", "_nuclear", "_petroleum_other_oil_derivatives", "_solar_photovoltaic", "_wind"]

const Emissions = () => {
  const { id, name } = useParams();

  const [emissionData, setEmissionData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`
      )
      .then((res) => {
        setEmissionData(res.data);
      });
  }, [id]);

  console.log(emissionData);

  let wind = emissionData
    ? parseFloat(emissionData.emissions_Wind).toFixed(2)
    : null;

  let solar = emissionData
    ? parseFloat(emissionData.emissions_Solar).toFixed(2)
    : null;

  let biomass = emissionData
    ? parseFloat(emissionData.emissions_Bioenergy).toFixed(2)
    : null;

  let hydro = emissionData
    ? parseFloat(emissionData.emissions_Hydro).toFixed(2)
    : null;

  let renewables = emissionData
    ? parseFloat(emissionData.emissions_OtherRenewables).toFixed(2)
    : null;

  let nuclear = emissionData
    ? parseFloat(emissionData.emissions_Nuclear).toFixed(2)
    : null;

  let fossil = emissionData
    ? parseFloat(emissionData.emissions_OtherFossil).toFixed(2)
    : null;

  let gas = emissionData
    ? parseFloat(emissionData.emissions_Gas).toFixed(2)
    : null;

  let coal = emissionData
    ? parseFloat(emissionData.emissions_Coal).toFixed(2)
    : null;

  let energyForms = {
    Wind: wind,
    Solar: solar,
    Biomass: biomass,
    Hydro: hydro,
    "Other Renewables": renewables,
    Nuclear: nuclear,
    "Other Fossil Fuels": fossil,
    "Natural Gas": gas,
    Coal: coal,
  };

  return (
    <div>
      <h1 className="countryTitle">{name}</h1>
      <div className="linkInPage">
        <Link className="linkInPageItem" to={"/generation/" + id + "/" + name}>
          Generation
        </Link>
        <Link className="linkInPageItem" to={"/ratio/" + id + "/" + name}>
          Generation to Emissions
        </Link>
      </div>
      <div className="graph">
        <Graph
          twoDecimal={gas}
          threeDecimal={biomass}
          fourDecimal={coal}
          elevenDecimal={renewables}
          sixDecimal={hydro}
          sevenDecimal={nuclear}
          twelveDecimal={fossil}
          nineDecimal={solar}
          tenDecimal={wind}
        />
      </div>
      <div className="emissions">
        <h1>{name}</h1>
        <div>
          {Object.entries(energyForms).map(([key, value]) => (
            <div key={key}>
              {isNaN(value) ? (
                <p className="eList">
                  There is no emissions data on {key} in {name}
                </p>
              ) : (
                <p className="eList">
                  {key}: <br /> {value} Terawatt hours per year
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emissions;


