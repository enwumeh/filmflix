import React, { useState } from "react";


export default function CatFacts() {
  const [data, setData] = useState(null);


  // const getSearch = async (userMovie) => {
  //   const movieData = await postFood(foodData);
  //   setFoods(prevState => ([...prevState, newFood]));
  //   history.push('/foods')
  // }

  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const targetUrl = `https://cat-fact.herokuapp.com/facts/random`;
  fetch(targetUrl)
    .then(response => response.json())
    .then(facts => {
       setData(facts.text);
    });
  return <div>{data}</div>;
}