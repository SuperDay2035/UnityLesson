import React from 'react';
import Header from "../Header";
import Home from "../Home";
import Csharpinfo from "../CsharpInfo";
import AboutUnity from "../AboutUnity";
import "./App.scss"
function Welcome(props) {
    return (
        <div>
            <div className="App">


                <Header></Header>
                <Home></Home>
                <Csharpinfo></Csharpinfo>
                <AboutUnity></AboutUnity>

            </div>
        </div>
    );
}

export default Welcome;