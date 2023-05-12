import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../src/components/Main";
import Crew from "../src/components/Crew";
import Destination from "../src/components/Destination";
import Technology from "../src/components/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
