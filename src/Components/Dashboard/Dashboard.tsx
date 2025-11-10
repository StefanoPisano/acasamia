import * as React from "react";
import SideBar from "@Components/Dashboard/SideBar/SideBar.tsx";
import styles from "./dashboard.module.scss";
import Card from "@Components/UI/Card.tsx";

const Dashboard: React.FC = () => {

    return (
        <>
            <div className={"w-full h-full flex flex-row gap-10"}>
                <div className={"basis-24"}>
                    <SideBar/>
                </div>
                <div className={"p-8 basis-full border-french-gray rounded-2xl border " + styles.bgDashboard}>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Dashboard