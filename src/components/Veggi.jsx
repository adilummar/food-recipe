import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

function Veggi() {
  const [veggi, setVeggi] = useState([]);

  useEffect(() => {
    getVeggi();
  }, []);

  const getVeggi = async () => {
    const check = localStorage.getItem("veggi");
    if (check) {
      setVeggi(JSON.parse(check));
    } else {
      const api = await fetch(`
            https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tag=vegetarian`);
      const data = await api.json();
      localStorage.setItem("veggi", JSON.stringify(data.recipes));
      setVeggi(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>vegetarian pick</h3>
        {veggi.length > 0 ? (
          <Splide
            options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {veggi.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={'/recipe/' + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.id} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        ) : (
          <p>loading</p>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 2rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggi;
