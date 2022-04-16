import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
        <Link to="/" ><button>Home</button></Link>
        <Link to="/add-city" ><button>Add-city</button></Link>
        <Link to="/add-country" ><button>Add-country</button></Link>
        </>
    )
}