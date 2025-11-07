import * as React from "react";
import Header from "@Components/Header/Header.tsx";
import Nav from "@Components/Nav/Nav.tsx";
import Dashboard from "@Components/Dashboard/Dashboard.tsx";

const Home: React.FC = () => {
    return (
        <>
            <Nav/>
            <Header/>
            <Dashboard/>
        </>
    )
}


export default Home;