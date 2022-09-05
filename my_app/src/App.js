import react from "react"
import Intro from "./component/Intro/Intro.js";
import Navbar from "./component/navbar/Navbar.js";
import Service from "./component/Service/Service.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />

      <Service />

    </div>
  );
}

export default App;
