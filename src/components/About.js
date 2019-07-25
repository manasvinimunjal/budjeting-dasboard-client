import React from 'react';



function About(props) {
console.log(props);
    return <div className="App">About {props.match.params.id}</div>
}

export default About;