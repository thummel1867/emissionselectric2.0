import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import GenerationGraph from "./GenerationGraph";

const Generation = () => {
  const { id, name } = useParams();

  const [generationData, setGenerationData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`
      )
      .then((res) => {
        setGenerationData(res.data);
      });
  }, [id]);

  console.log(generationData);

  let wind = generationData
    ? parseFloat(generationData.generation_Wind).toFixed(2)
    : null;

  let solar = generationData
    ? parseFloat(generationData.generation_Solar).toFixed(2)
    : null;

  let biomass = generationData
    ? parseFloat(generationData.generation_Bioenergy).toFixed(2)
    : null;

  let hydro = generationData
    ? parseFloat(generationData.generation_Hydro).toFixed(2)
    : null;

  let renewables = generationData
    ? parseFloat(generationData.generation_OtherRenewables).toFixed(2)
    : null;

  let nuclear = generationData
    ? parseFloat(generationData.generation_Nuclear).toFixed(2)
    : null;

  let fossil = generationData
    ? parseFloat(generationData.generation_OtherFossil).toFixed(2)
    : null;

  let gas = generationData
    ? parseFloat(generationData.generation_Gas).toFixed(2)
    : null;

  let coal = generationData
    ? parseFloat(generationData.generation_Coal).toFixed(2)
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
        <Link className="linkInPageItem" to={"/emissions/" + id + "/" + name}>
          Emissions
        </Link>
        <Link className="linkInPageItem" to={"/ratio/" + id + "/" + name}>
          Generation to Emissions
        </Link>
      </div>
      <div className="graph">
        <GenerationGraph
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
                  There is no generation data on {key} in {name}
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

export default Generation;
