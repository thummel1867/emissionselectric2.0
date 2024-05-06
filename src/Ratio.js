import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import RatioGraph from "./RatioGraph";
import axios from "axios";

const Ratio = () => {
  const { id, name } = useParams();
  const [gas, setGas] = useState();
  const [biomass, setBiomass] = useState();
  const [coal, setCoal] = useState();
  const [hydro, setHydro] = useState();
  const [nuclear, setNuclear] = useState();
  const [solar, setSolar] = useState();
  const [wind, setWind] = useState();
  const [renew, setRenew] = useState();
  const [fossil, setFossil] = useState();
  //generaion
  const [gas2, setGasGen] = useState();
  const [biomass2, setBioenergyGen] = useState();
  const [coal2, setCoalGen] = useState();
  const [hydro2, setHydroGen] = useState();
  const [nuclear2, setNuclearGen] = useState();
  const [solar2, setSolarGen] = useState();
  const [wind2, setWindGen] = useState();
  const [renew2, setOtherRenewablesGen] = useState();
  const [fossil2, setOtherFossilGen] = useState();

  //EMISSIONS
  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setWind(res.data.emissions_Wind);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setSolar(res.data.emissions_Solar);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setBiomass(res.data.emissions_Bioenergy);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setHydro(res.data.emissions_Hydro);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setRenew(res.data.emissions_OtherRenewables);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setNuclear(res.data.emissions_Nuclear);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setFossil(res.data.emissions_OtherFossil);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setGas(res.data.emissions_Gas);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setCoal(res.data.emissions_Coal);
      });
  }, []);

  //GENERATION

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setWindGen(res.data.generation_Wind);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setSolarGen(res.data.generation_Solar);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setBioenergyGen(res.data.generation_Bioenergy);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setHydroGen(res.data.generation_Hydro);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setOtherRenewablesGen(res.data.generation_OtherRenewables);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setNuclearGen(res.data.generation_Nuclear);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setOtherFossilGen(res.data.generation_OtherFossil);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setGasGen(res.data.generation_Gas);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setCoalGen(res.data.generation_Coal);
      });
  }, []);

  let tenDecimal = parseFloat(wind).toFixed(2);

  let nineDecimal = parseFloat(solar).toFixed(2);

  let threeDecimal = parseFloat(biomass).toFixed(2);

  let sixDecimal = parseFloat(hydro).toFixed(2);

  let elevenDecimal = parseFloat(renew).toFixed(2);

  let sevenDecimal = parseFloat(nuclear).toFixed(2);

  let twelveDecimal = parseFloat(fossil).toFixed(2);

  let twoDecimal = parseFloat(gas).toFixed(2);

  let fourDecimal = parseFloat(coal).toFixed(2);

  //GENERATION

  let thirteenDecimal = parseFloat(wind2).toFixed(2);

  let fourteenDecimal = parseFloat(solar2).toFixed(2);

  let fifteenDecimal = parseFloat(biomass2).toFixed(2);

  let sixteenDecimal = parseFloat(hydro2).toFixed(2);

  let seventeenDecimal = parseFloat(renew2).toFixed(2);

  let eighteenDecimal = parseFloat(nuclear2).toFixed(2);

  let ninteenDecimal = parseFloat(fossil2).toFixed(2);

  let twentyDecimal = parseFloat(gas2).toFixed(2);

  let twentyoneDecimal = parseFloat(coal2).toFixed(2);

  //RATIOS

  let windRatio = (thirteenDecimal / tenDecimal).toFixed(2);

  let solarRatio = (fourteenDecimal / nineDecimal).toFixed(2);

  let bioRatio = (fifteenDecimal / threeDecimal).toFixed(2);

  let hydroRatio = (sixteenDecimal / sixDecimal).toFixed(2);

  let renewRatio = (seventeenDecimal / elevenDecimal).toFixed(2);

  let nuclearRatio = (eighteenDecimal / sevenDecimal).toFixed(2);

  let fossilRatio = (ninteenDecimal / twelveDecimal).toFixed(2);

  let gasRatio = (twentyDecimal / twoDecimal).toFixed(2);

  let coalRatio = (twentyoneDecimal / fourDecimal).toFixed(2);

console.log(coalRatio)

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
        Terwatt hours per megatonne of Carbon Dioxide Equivalent
        {/* Wind */}
        <div>
          <div>
            {wind !== null ? (
              <div>
                <div>
                  <p className="eList">
                    {" "}
                    Wind: <br></br>
                    {windRatio}
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">No data on Wind in {name}</p>
            )}
          </div>
        </div>
        {/* Solar */}
        <div>
          <div>
            {solar !== null ? (
              <div>
                <div>
                  <p className="eList">
                    {" "}
                    Solar: <br></br>
                    {solarRatio}
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">No data on Solar in {name}</p>
            )}
          </div>
        </div>
        {/* Biomass */}
        <div>
          <div>
            {biomass !== null ? (
              <div>
                <div>
                  <p className="eList">
                    Bioenergy: <br></br>
                    {bioRatio}
                  </p>
                </div>
              </div>
            ) : (
              <p className="eList">No data on Bioenergy in {name}</p>
            )}
          </div>
        </div>
        {/* Hydro */}
        <div>
          <div>
            {hydro !== null ? (
              <div>
                <div>
                  <p className="eList">
                    {" "}
                    Hydro:<br></br> {hydroRatio}
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">No data on Hydro in {name}</p>
            )}
          </div>
        </div>
        {/* Other Renewables */}
        <div>
          <div>
            {renew !== null ? (
              <div>
                <div>
                  <p className="eList">
                    {" "}
                    Other Renewables:<br></br> {renewRatio}
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">No data on Other Renewables in {name}</p>
            )}
          </div>
        </div>
        {/* NUCLEAR */}
        <div>
          <div>
            {nuclear !== null ? (
              <div>
                <div>
                  <p className="eList">
                    {" "}
                    Nuclear: <br></br>
                    {nuclearRatio}
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">No emissions data on Nuclear in {name}</p>
            )}
          </div>
        </div>
        {/* Other Fossil Fuels */}
        <div>
          <div>
            {fossil !== null ? (
              <div>
                <div>
                  <p className="eList">
                    {" "}
                    Other Fossil Fuels: <br></br>
                    {fossilRatio}
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                No emissions data on Other Fossil Fuels in {name}
              </p>
            )}
          </div>
        </div>
        {/* Natual Gas */}
        <div>
          {gas !== null ? (
            <div>
              <div>
                <p className="eList">
                  Natural Gas: <br></br>
                  {gasRatio}
                </p>
              </div>
            </div>
          ) : (
            <p className="eList">No data on Gas in {name}</p>
          )}
        </div>
        {/* Coal */}
        <div>
          <div>
            {coal !== null ? (
              <div>
                <div>
                  <p className="eList">
                    {" "}
                    Coal:<br></br> {coalRatio}
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">No data on Coal in {name}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratio;
