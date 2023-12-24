/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";

const Cooks = ({ searchMeal }) => {
  const [dataCooks, setdataCooks] = useState([]);

  const fecthData = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
      );

      if (response.data && response.data.meals) {
        setdataCooks(response.data.meals);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fecthData();
  }, [searchMeal]);

  return (
    <ul>
      {dataCooks &&
        dataCooks.map((cook) => <Cards key={cook.idMeal} cook={cook} />)}
    </ul>
  );
};

export default Cooks;
