import * as React from "react";
// import Header from "@Components/Header/Header.tsx";
import Nav from "@Components/Nav/Nav.tsx";
import Dashboard from "@Components/Dashboard/Dashboard.tsx";

const Home: React.FC = () => {
    return (
        <>
            <div className={"h-dvh flex flex-col pl-8 pr-8 pb-8"}>
                <Nav/>
                {/*<Header/>*/}
                <Dashboard/>
            </div>
        </>
    )
}


export default Home;