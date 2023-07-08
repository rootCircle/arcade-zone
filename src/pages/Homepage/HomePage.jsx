import React from "react"
import Banner from "../../components/Homepage/Banner"
import Game from "../../components/Homepage/Game"
import About from "../../components/Homepage/About"
import Tournaments from "../../components/Homepage/Tournaments"
import Contact from "../../components/Homepage/Contact"

const HomePage = () => {
    return (
        <>
            <Banner />
            <About />
            <Game />
            <Tournaments />
            <Contact />
        </>
    )
}
export default HomePage;