import * as React from "react";
import {useTranslation} from "react-i18next";
import SideBar from "@Components/Dashboard/SideBar/SideBar.tsx";
import styles from "./dashboard.module.scss";

const Dashboard: React.FC = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className={"w-full h-full flex flex-row gap-8"}>
                <div className={"basis-1/5"}>
                    <SideBar/>
                </div>
                <div className={"p-8 basis-4/5 border-french-gray rounded-2xl border " + styles.gradient}>
                    {t("welcome")} :D
                </div>
            </div>
        </>
    )
}

export default Dashboard