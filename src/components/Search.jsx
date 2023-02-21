import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate()
    const [input, setInput] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`)
  };

  return (
    
    <FormStyle onSubmit={submitHandler}>
      <FaSearch></FaSearch>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 10rem;
  position: releative;
  width: 100%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 0.5rem 4rem;
    border-radius: 2rem;
    outline: none;
    border: none;
    width: 70%;
  }

  svg {
    position: relative;
    top: 50%;
    left: 5%;
    color: white;
  }
`;

export default Search;
