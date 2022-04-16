import React, { useState } from "react"
import axios from "axios"

export const Country = () => {

    const [country, setCountry] = useState({
        name:"",
    })
    const handleChange = (e) => {
        

    setCountry({
        ...country,
         [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8080/country`, country).then(res => {
            setCountry({
                name:"",
        population:"",
        country:""
            })
        })
        console.log(country)
        

    }
    return (
        <>
        
        <h1>Add country</h1>

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Country Name</label>
            <input type="text" name="name" value={country.name}  onChange={handleChange}/>

            <input type="submit" value={"submit"}/>
        </form>
        </>
    )
}