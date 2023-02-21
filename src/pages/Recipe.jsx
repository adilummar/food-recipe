import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    fetchRecipe();
  }, [params.name]);

  const fetchRecipe = async () => {
    const api = await fetch(`
            https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}
        `);
    const data = await api.json();
    setDetails(data);
    console.log(data);
  };
  return (
    <DetailedWrapped
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Buttons
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          instructions
        </Buttons>
        <Buttons
          className={activeTab === "ingeredients" ? "active" : ""}
          onClick={() => setActiveTab("ingeredients")}
        >
          ingredients
        </Buttons>
        {activeTab === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          <ul>
            {details.extendedIngredients &&
              details.extendedIngredients.map((ingredients) => {
                return <li key={ingredients.id}>{ingredients.original}</li>;
              })}
          </ul>
        )}
      </Info>
    </DetailedWrapped>
  );
}

const DetailedWrapped = styled(motion.div)`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const Buttons = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

export default Recipe;
