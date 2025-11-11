import * as React from "react";
import LanguageSelector from "@Components/LanguageSelector/LanguageSelector.tsx";
import logo from "@Assets/logo.png";
import { Link } from 'react-router-dom';

const Nav:React.FC = () => {

    return (
        <>
            <div className={"w-full h-16 flex flex-row p-2 mb-8 mt-2 bg-yimin-blue border text-antiflash-white gap-6 rounded-2xl border-cyan-950"}>
                <img src={logo} className={"h-full"}/>

                <div className={"flex flex-auto items-center pr-2"}>
                    <div className={"w-full flex gap-2 flex-auto items-center justify-center"}>
                        <Link to="/mutuo">Mutuo Simulator</Link>
                    </div>

                    <div className={"flex flex-auto justify-end"}>
                        <LanguageSelector/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Nav