import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
    let params = useParams()
    const [details,setDetails] = useState([])
    
useEffect(()=>{
    fetchRecipe()
},[])

    const fetchRecipe =async ()=>{
        const api = await fetch(`
            https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}
        `)
        const data = await api.json()
        console.log(data)
    } 
  return (
    <div>
      recipe
    </div>
  )
}

export default Recipe
