import * as React from "react";
import LanguageSelector from "@Components/LanguageSelector/LanguageSelector.tsx";
import logo from "@Assets/logo.png";

const Nav:React.FC = () => {

    return (
        <>
            <div className={"w-full h-20 flex flex-row p-2 bg-yimin-blue"}>
                <img src={logo} className={"h-full"}/>

                <div className={"flex flex-auto justify-end items-center align pr-2"}>
                    <LanguageSelector/>
                </div>
            </div>
        </>
    )
}


export default Nav