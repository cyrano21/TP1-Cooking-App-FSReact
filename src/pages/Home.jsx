import { useState } from "react";
import Cooks from "../components/Cooks";

const Home = () => {
  const [searchMeal, setsearchMeal] = useState("");

  return (
    <div className="container">
      <h1>React Cook</h1>
      <input
        type="search"
        value={searchMeal}
        placeholder="Tapez le nom d'un aliment(en anglais)"
        onChange={(e) => {
          setsearchMeal(e.target.value);
        }}
      />
      <Cooks searchMeal={searchMeal} />
    </div>
  );
};

export default Home;
