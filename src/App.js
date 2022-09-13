import "./App.css";
// import Fruit from "./components/Fruit";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Listing from "./components/Listing";
// import Fruit from "./components/Fruit";

// const theFruits = [
//   { id: 1, name: "Apple", color: "red" },
//   { id: 2, name: "Orange", color: "orange" },
//   { id: 3, name: "Banana", color: "yellow" },
//   { id: 4, name: "Kiwi", color: "green" },
//   { id: 5, name: "Mango", color: "red" },
//   { id: 6, name: "Avocado", color: "green" },
// ];

function App() {
  return (
    <>
      {/* {theFruits.map((fruit) => {
        return <Fruit key={fruit.id} name={fruit.name} color={fruit.color} />;
        <h1>
          {Fruit.id}, {Fruit.name}, {Fruit.color}
        </h1>
      })} */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing" element={<Listing />} />
          {/* <Route path="/fruit" element={<Fruit />} /> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
