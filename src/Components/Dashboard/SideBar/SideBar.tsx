import * as React from "react";
import styles from "./sidear.module.scss"

const SideBar:React.FC = () => {

    return (
       <>
           <div className={"bg-yimin-blue h-full flex flex-col items-center" }>
               <div className={"flex flex-col opacity-65 items-center justify-center w-5/6 h-5/6 border border-french-gray p-3 text-antiflash-white gap-6 rounded-2xl bg-cyan-950"}>
                   <button>
                       Button 1
                   </button>

                   <button>
                       Button 2
                   </button>

                   <button>
                       Button 3
                   </button>
               </div>
           </div>

       </>
)
}

export default SideBar