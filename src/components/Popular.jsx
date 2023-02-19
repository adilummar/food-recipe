import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
  const check = localStorage.getItem("popular");

  if (check) {
    setPopular(JSON.parse(check));
  } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem('popular',JSON.stringify(data.recipes))
      setPopular(data.recipes);
    };
  }

  return (
    <div>
      <Wrapper>
        <h3>popular picks</h3>
        {popular.length > 0 ? (
          <Splide
            options={{
              perPage: 4,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {popular.map((recipes) => {
              return (
                <SplideSlide key={recipes.id}>
                  <Card>
                    <p>{recipes.title}</p>
                    <img src={recipes.image} alt={recipes.title} />
                    <Gradient />
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        ) : (
          <p>loading...</p>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 3rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position:relative;

  img {
    border-radius: 2rem;
    position:absolute;
    left:0;
    height:100%;
    width:100%;
    object-fit:cover;
  }
  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0;
    transform:translate(-50%, 0);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
