import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CountryList from "./CountryList";
import Home from "./Home";
import Emissions from "./Emissions";
import "./App.css";
import About from "./About";
import Generation from "./Generation";
import Ratio from "./Ratio";

const App = () => {
  const [country, setCountry] = useState();


  return (
    <div className="overall">
        <h1 className="title">Carbon and Electricity</h1>
      <nav className="nav">
        <Link className="nav2" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="nav2" to="/about">
          <h1>About</h1>
        </Link>
        <Link className="nav2" to="/countries">
          <h1>Countries</h1>
        </Link>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/about" element={<About/>}/>
          <Route
            path="/emissions/:id/:name"
            element={<Emissions setCountry={setCountry} country={country} />}
          />
          <Route
            path="/generation/:id/:name"
            element={<Generation setCountry={setCountry} country={country} />}
          />
          <Route
            path="/ratio/:id/:name"
            element={<Ratio setCountry={setCountry} country={country} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
