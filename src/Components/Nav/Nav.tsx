import * as React from "react";
import LanguageSelector from "@Components/LanguageSelector/LanguageSelector.tsx";
import logo from "@Assets/logo.png";

const Nav:React.FC = () => {

    return (
        <>
            <div className={"w-full h-20 flex flex-row p-2 bg-yimin-blue"}>
                <img src={logo} className={"h-full"}/>

                <div className={"flex flex-auto items-center pr-2"}>
                    <div className={"w-full flex gap-2 flex-auto items-center justify-center"}>
                        <a href={""}>Lorem Ipsum Link 1</a>
                        <a href={""}>Lorem Ipsum Link 2</a>
                        <a href={""}>Lorem Ipsum Link 3</a>
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