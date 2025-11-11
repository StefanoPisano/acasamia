import * as React from "react";
import SideBar from "@Components/Dashboard/SideBar/SideBar.tsx";
import styles from "./dashboard.module.scss";
import Card from "@Components/UI/Card.tsx";
import MutuoSimulator from "@Components/Dashboard/MutuoSimulator/MutuoSimulator.tsx";
import { Routes, Route } from 'react-router-dom';

const Dashboard: React.FC = () => {

    return (
        <>
            <div className={"w-full h-full flex flex-row gap-10"}>
                <div className={"basis-24"}>
                    <SideBar/>
                </div>
                <div className={"basis-full border-french-gray rounded-2xl border " + styles.bgDashboard}>
                    <Card>
                        <Routes>
                            <Route path="/mutuo" element={<MutuoSimulator />} />
                        </Routes>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Dashboard