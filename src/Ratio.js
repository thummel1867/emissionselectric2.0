import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RatioGraph from "./RatioGraph";
import axios from "axios";

const Ratio = () => {
  const { id, name } = useParams();
  const [emissionsData, setEmissionsData ] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`
      )
      .then((res) => {
        setEmissionsData(res.data);
      });
  }, [id]);

  console.log(emissionsData)

  let tenDecimal = emissionsData ? parseFloat(emissionsData.emissions_Wind).toFixed(2) : null;

  let nineDecimal = emissionsData ? parseFloat(emissionsData.emissions_Solar).toFixed(2) : null;

  let threeDecimal = emissionsData
    ? parseFloat(emissionsData.emissions_Bioenergy).toFixed(2)
    : null;

  let sixDecimal = emissionsData ? parseFloat(emissionsData.emissions_Hydro).toFixed(2) : null;

  let elevenDecimal = emissionsData
    ? parseFloat(emissionsData.emissions_OtherRenewables).toFixed(2)
    : null;

  let sevenDecimal = emissionsData
    ? parseFloat(emissionsData.emissions_Nuclear).toFixed(2)
    : null;

  let twelveDecimal = emissionsData
    ? parseFloat(emissionsData.emissions_OtherFossil).toFixed(2)
    : null;

  let twoDecimal = emissionsData ? parseFloat(emissionsData.emissions_Gas).toFixed(2) : null;

  let fourDecimal = emissionsData ? parseFloat(emissionsData.emissions_Coal).toFixed(2) : null;

  //GENERATION

  let thirteenDecimal = emissionsData
    ? parseFloat(emissionsData.generation_Wind).toFixed(2)
    : null;

  let fourteenDecimal = emissionsData
    ? parseFloat(emissionsData.generation_Solar).toFixed(2)
    : null;

  let fifteenDecimal = emissionsData
    ? parseFloat(emissionsData.generation_Bioenergy).toFixed(2)
    : null;

  let sixteenDecimal = emissionsData
    ? parseFloat(emissionsData.generation_Hydro).toFixed(2)
    : null;

  let seventeenDecimal = emissionsData
    ? parseFloat(emissionsData.generation_Renew).toFixed(2)
    : null;

  let eighteenDecimal = emissionsData
    ? parseFloat(emissionsData.generation_Nuclear).toFixed(2)
    : null;

  let ninteenDecimal = emissionsData
    ? parseFloat(emissionsData.generation_OtherFossil).toFixed(2)
    : null;

  let twentyDecimal = emissionsData ? parseFloat(emissionsData.generation_Gas).toFixed(2) : null;

  let twentyoneDecimal = emissionsData
    ? parseFloat(emissionsData.generation_Coal).toFixed(2)
    : null;

  let windRatio = (thirteenDecimal / tenDecimal).toFixed(2);

  let solarRatio = (fourteenDecimal / nineDecimal).toFixed(2);

  let bioRatio = (fifteenDecimal / threeDecimal).toFixed(2);

  let hydroRatio = (sixteenDecimal / sixDecimal).toFixed(2);

  let renewRatio = (seventeenDecimal / elevenDecimal).toFixed(2);

  let nuclearRatio = (eighteenDecimal / sevenDecimal).toFixed(2);

  let fossilRatio = (ninteenDecimal / twelveDecimal).toFixed(2);

  let gasRatio = (twentyDecimal / twoDecimal).toFixed(2);

  let coalRatio = (twentyoneDecimal / fourDecimal).toFixed(2);

  let energyForms = {
    Wind: windRatio,
    Solar: solarRatio,
    Biomass: bioRatio,
    Hydro: hydroRatio,
    "Other Renewables": renewRatio,
    Nuclear: nuclearRatio,
    "Other Fossil Fuels": fossilRatio,
    "Natural Gas": gasRatio,
    Coal: coalRatio,
  };

  return (
    <div>
      <h1 className="countryTitle">{name}</h1>
      <div className="linkInPage">
        <Link className="linkInPageItem" to={"/emissions/" + id + "/" + name}>
          Emissions
        </Link>
        <Link className="linkInPageItem" to={"/generation/" + id + "/" + name}>
          Generation
        </Link>
      </div>
      <div className="graph">
        <RatioGraph
          tenDecimal={windRatio}
          nineDecimal={solarRatio}
          threeDecimal={bioRatio}
          sixDecimal={hydroRatio}
          elevenDecimal={renewRatio}
          sevenDecimal={nuclearRatio}
          twelveDecimal={fossilRatio}
          twoDecimal={gasRatio}
          fourDecimal={coalRatio}
        />
      </div>
      <div className="emissions">
        <h1>{name}</h1>
        <div>
          {Object.entries(energyForms).map(([key, value]) => (
            <div key={key}>
              {isNaN(value) ? (
                <p className="eList">
                  There is not enough data for {key} in {name} to create a ratio
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

export default Ratio;
