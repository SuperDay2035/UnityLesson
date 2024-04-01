import "./App.scss"

import Header from "./Component/Header";
import Home from "./Component/Home";
import Csharpinfo from "./Component/CsharpInfo";
import AboutUnity from "./Component/AboutUnity/AboutUnity";

function App() {
  return (
    <div className="App">


        <Header></Header>
        <Home></Home>
        <Csharpinfo></Csharpinfo>
        <AboutUnity></AboutUnity>

    </div>
  );
}

export default App;
