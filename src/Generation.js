import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import GenerationGraph from "./GenerationGraph";

const Generation = () => {
  const { id, name } = useParams();
  const [gas, setGas] = useState();
  const [biomass, setBioenergy] = useState();
  const [coal, setCoal] = useState();

  const [hydro, setHydro] = useState();
  const [nuclear, setNuclear] = useState();

  const [solar, setSolar] = useState();
  const [wind, setWind] = useState();
  const [renew, setOtherRenewables] = useState();
  const [fossil, setOtherFossil] = useState();

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setWind(res.data.generation_Wind);
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setSolar(res.data.generation_Solar);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setBioenergy(res.data.generation_Bioenergy);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setHydro(res.data.generation_Hydro);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setOtherRenewables(res.data.generation_OtherRenewables);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setNuclear(res.data.generation_Nuclear);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setOtherFossil(res.data.generation_OtherFossil);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setGas(res.data.generation_Gas);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://quiet-gorge-03165-6c773fd38803.herokuapp.com/emissions/${id}`)
      .then((res) => {
        setCoal(res.data.generation_Coal);
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
          twoDecimal={twoDecimal}
          threeDecimal={threeDecimal}
          fourDecimal={fourDecimal}
          elevenDecimal={elevenDecimal}
          sixDecimal={sixDecimal}
          sevenDecimal={sevenDecimal}
          twelveDecimal={twelveDecimal}
          nineDecimal={nineDecimal}
          tenDecimal={tenDecimal}
        />
      </div>
      <div className="emissions">
        <h1>{name}</h1>
        {/* Wind */}
        <div>
          <div>
            {wind !== null ? (
              <div>
                <div>
                  <p className="eList">
                    {" "}
                    Wind: <br></br>
                    {tenDecimal} Terwatt hours per year
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data on Wind in {name}
              </p>
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
                    Solarvoltaic: <br></br>
                    {nineDecimal} Terawatt hours per year
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data on Solar in {name}
              </p>
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
                    Biomass: <br></br>
                    {threeDecimal} Terawatt hours per year
                  </p>
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data on Biomass in {name}
              </p>
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
                    Hydro:<br></br> {sixDecimal} Terawatt hours per year
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data on Hydro in {name}
              </p>
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
                    Other Renewables:<br></br> {elevenDecimal} Terawatt hours
                    per year
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data on Other Renewables in {name}
              </p>
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
                    {sevenDecimal} Terawatt hours per year
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data on Nuclear in {name}
              </p>
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
                    {twelveDecimal} Terawatt hours per year
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data on Other Fossil Fuels in {name}
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
                  {twoDecimal} Terawatt hours per year{" "}
                </p>
              </div>
            </div>
          ) : (
            <p className="eList">There is no emissions data on Gas in {name}</p>
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
                    Coal:<br></br> {fourDecimal} Terawatt hours per year
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data on Coal in {name}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generation;
