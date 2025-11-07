import * as React from "react";
import salvini from "@Assets/salvini-aggiusta-tutto.png"
const Header:React.FC = () => {
    return (
        <>
            <div className={"bg-powder-blue w-full h-2/6 text-5xl font-bold flex flex-col justify-center items-center gap-2 font-title text-almost-white"}>
                    <img src={salvini} className={"h-20"}/> <h1>A casa mia...</h1>
            </div>
        </>
    )
}

export default Header;