import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <h1>Emissions Tracker</h1>
            <p className='aboutParagraph'>Welcome to the Emissions Tracker! <br></br>
            <br></br>
            This website allows users to explore emissions data associated with different forms of electricity generation within a variety of countries. Due to both the uneveness between the global north and south both in terms of the availability of data, and more importantly, the level of industrial development, most of the countries listed on the site are countries from the global north. 
            <br></br>
            <br></br>
            I have built out an associated database using Express.js. The github for the backend can be found <a href="https://github.com/thummel1867/emissionselectric2.0">here.</a>
            <br></br>
            <br></br>
            All data was sourced from <a href="https://ember-climate.org/">ember-climate.org.</a>
            </p>
        </div>
    );
};

export default About;