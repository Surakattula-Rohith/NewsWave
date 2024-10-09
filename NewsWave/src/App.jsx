import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import PageNotFound from "./Components/PageNotFound";
import PersonalInfo from "./Components/PersonalInfo";
import Publishers from "./Components/Publishers";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publishers" element={<Publishers/>} />
          <Route path="/personalinfo" element={<PersonalInfo/>} />
          <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
