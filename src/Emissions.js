import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Graph from "./Graph";
import axios from "axios";

// const energy = ["_gas", "_biomass_waste", "_coal", "_geothermal", "_hydro", "_nuclear", "_petroleum_other_oil_derivatives", "_solar_photovoltaic", "_wind"]

const Emissions = () => {
  const { id, name } = useParams();
  const [gas, setGas] = useState();
  const [biomass, setBiomass] = useState();
  const [coal, setCoal] = useState();
  const [geothermal, setGeothermal] = useState();
  const [hydro, setHydro] = useState();
  const [nuclear, setNuclear] = useState();
  const [pet, setPet] = useState();
  const [solar, setSolar] = useState();
  const [wind, setWind] = useState();
  const [renew, setRenew] = useState();
  const [fossil, setFossil] = useState();

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
        <Link className="linkInPageItem" to={"/generation/" + id + "/" + name}>Generation</Link>
        <Link className="linkInPageItem" to={"/ratio/" + id + "/" + name}>
          Generation to Emissions
        </Link>
      </div>
      <div className="graph">
        <Graph
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
                    {tenDecimal} Mt co2e per year
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
                    {nineDecimal} Mt co2e per year
                  </p>{" "}
                </div>
              </div>
            ) : (
              <p className="eList">
                There is no emissions data Solar in {name}
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
                    {threeDecimal} Mt co2e per year
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
                    Hydro:<br></br> {sixDecimal} Mt co2e per year
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
                    Other Renewables:<br></br> {elevenDecimal} Mt co2e per year
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
                    {sevenDecimal} Mt co2e per year
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
                    {twelveDecimal} Mt co2e per year
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
                  {twoDecimal} Mt co2e per year{" "}
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
                    Coal:<br></br> {fourDecimal} Mt co2e per year
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

export default Emissions;

//set id and country to an async function that are then declared in useEffect with arrow functions and then called within HTML
