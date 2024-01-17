import logo from "./logo.svg";
import "./App.css";
import Navbarr from "./components/navbar";
import Newsboard from "./components/newsboard";
import { useState } from "react";

function App() {
  const [categ, setcateg] = useState("general");
  return (
    <div>
      <Navbarr setcategory={setcateg} />
      <h2 className="text-center mt-3 mb-3">
        Latest <span className="badge bg-danger ">News</span>
      </h2>
      <div className="row justify-content-center">
        <Newsboard category={categ} />
      </div>
    </div>
  );
}

export default App;
