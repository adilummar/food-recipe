import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'



function Cuisine() {
    let params = useParams()
    const [cuisine,setCuisine] = useState([])
    const getCuisine = async(name)=>{
        const api = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}
        `)
        const data = api.json().then(data=>{
            setCuisine(data.results)
            console.log(data.results)
        })
    }

    useEffect(()=>{
        getCuisine(params.id)
    },[params.id])
  return (
    <div>
      <h1>this is cuisine</h1>
    </div>
  )
}

const 

export default Cuisine
