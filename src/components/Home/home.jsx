import axios from "axios";
import React, { useEffect, useState } from "react"

export const Home = () => {


    const [showData, setShowData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/city`).then(res => {
            setShowData([...res.data])
            console.log(res.data)
        })
    },[])
 
    const [Sort, setSort] = useState([]);

    const sort = (asc) => {
        
        
        if("asc" == asc){
           let arr = [...showData].sort((a,b) => {return +a.population - (+b.population)})
            setShowData([...arr])
            // console.log(arr)
        }else{
            let arr = [...showData].sort((a,b) => {return +b.population - (+a.population)})
            setShowData([...arr]);
            // console.log(arr);
        }
    }
    

   

    return (
        <>
        <h1>Home Page</h1> 

        <button onClick={()=>{sort("asc")}} >Sort By Asc</button>
        <button onClick={() => {sort("desc")}} >Sort By Desc</button> 

        <table id="table" style={{border:"2px solid black"}}>
            <thead>
                <tr >
                    <td style={{border:"2px solid black"}}>id</td>
                    <td style={{border:"2px solid black"}}>city</td>
                    <td style={{border:"2px solid black"}}>country</td>
                    <td style={{border:"2px solid black"}}>population</td>
                    <td style={{border:"2px solid black"}}>edit</td>
                    <td style={{border:"2px solid black"}}>delete</td>
                </tr>
            </thead>
            <tbody>
              {showData.map((elem) => {
                return  <tr>
                      <td> {elem.id} </td>
                      <td> {elem.name} </td>
                      <td> {elem.population} </td>
                      <td> {elem.country} </td>
                      <td><button>Edit</button></td>
                      <td><button>delete</button></td>
                  </tr>
              })} 
            </tbody>
        </table>
        </>
    )
}