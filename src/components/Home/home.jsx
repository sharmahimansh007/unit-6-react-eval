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

    
    return (
        <>
        <h1>Home Page</h1> 

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