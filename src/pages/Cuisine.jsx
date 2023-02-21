import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function Cuisine() {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);
  const getCuisine = async (name) => {
    const api = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}
        `);
    api.json().then((data) => {
      setCuisine(data.results);
      console.log(data.results);
    });
  };

  useEffect(() => {
    getCuisine(params.id);
  }, [params.id]);

  return (
    <Grid>
      {cuisine && cuisine.map((item) => {
          return (
            <Card>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.name} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })
       }
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

export default Cuisine;
