import * as React from "react";
import {useTranslation} from "react-i18next";

const Dashboard:React.FC = () => {
    const {t} = useTranslation();

    return (
       <>
           <div className={"w-5/6 flex flex-row m-8"}>
               {t("welcome")} :D
           </div>
       </>
)
}

export default Dashboard