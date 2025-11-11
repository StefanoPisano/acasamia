import * as React from "react";

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return <>
        <div className={"bg-antiflash-white w-fit h-fit rounded-2xl p-8 border border-cyan-950"}>
            {children}
        </div>
    </>
}


export default Card;