import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Chatbot from "./components/Chatbot/Chatbot";



const App = () => {

  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/check" element={<Chatbot />} />

      </Routes>
    </>
  );
};

export default App;
