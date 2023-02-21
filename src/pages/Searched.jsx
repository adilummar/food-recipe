import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  const [searched, setSearched] = useState([]);
  const params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (name) => {
    const api = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}
        `);
    const data = await api.json();
    setSearched(data.results);
  };

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.id} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decrotion: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Searched;
