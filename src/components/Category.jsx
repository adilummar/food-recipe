import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import {NavLink} from 'react-router-dom'
import styled from "styled-components";

function Category() {
  return (
    <List>
      <Slink to={'/cuisine/italian'} >
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={'/cuisine/american'} >
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={'/cuisine/thai'} >
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={'/cuisine/japanese'} >
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem
`;

const Slink = styled(NavLink)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  margin-right:1rem;
  background:linear-gradient(35deg,#494949,#313131);
  width:6rem;
  height:6rem;
  courser:pointer;
  transform:scale(0.8);
  text-decoration:none;

  h4{
    color:white;
    font-size:0.8rem;
  }

  svg{
    color:white;
    font-size:1.5rem;
  }
  
  &.active{
    background:linear-gradient(to right,#f27141,#e94057);
  }
  
  `
export default Category;
