/* eslint-disable react/prop-types */
const Cards = ({ cook }) => {
  return (
    <li className="card">
      <h3>{cook.strMeal}</h3>
      <p>origin : {cook.strArea}</p>
      <img src={cook.strMealThumb} alt={"Photo de " + cook.strMeal} />
      <p>{cook.strInstructions}</p>
    </li>
  );
};

export default Cards;
