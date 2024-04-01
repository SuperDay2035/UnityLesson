import "./Component/Welcome/App.scss"


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Welcome from "./Component/Welcome";
import Page404 from "./Component/404";
import Courses from "./Component/Courses";
import CsharCourse from "./Component/csharCourse";

function App() {
  return (

      <Router>



          <Routes>
              <Route path="/" element={<Welcome />}></Route>
              <Route path="/courses" element={<Courses />}></Route>
              <Route path="/cSharpCourse" element={<CsharCourse />}></Route>
              <Route path="*" element={<Page404 />}></Route>
          </Routes>

      </Router>


  );
}

export default App;
