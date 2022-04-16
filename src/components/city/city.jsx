import axios from "axios"
import React, { useEffect, useState } from "react"

export const City = () => {

    const [city, setCity] = useState({
        name:"",
        population:"",
        country:""
    })

    const [country, setCountry] = useState([]);

    
        useEffect(() => {
            axios.get('http://localhost:8080/country').then(res => {
                setCountry([...res.data]);
            })
        },[])
    
    const handleChange = (e) => {
        

    setCity({
        ...city,
         [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8080/city`, city).then(res => {
            setCity({
                name:"",
        population:"",
        country:""
            })
        })
        console.log(city)
        

    }
    return (
        <>
       <h1> Add - City</h1>

       <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">City Name</label>
            <input type="text" name="name" value={city.name}  onChange={handleChange}/>

            <label htmlFor="">Population</label>
            <input type="number" name="population" value={city.population} onChange={handleChange} />

            <label htmlFor="">Select Country</label>
            <select name="country" style={{width:"150px"}} id="" onChange={handleChange}>
                {country.map((elem) => {
                    return <option  value=""> {elem.name} </option>
                })}
            </select>
           
            <input type="submit" value={"submit"}/>
        </form>
        </>
    )
}