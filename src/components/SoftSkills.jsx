import React from "react";
import SingleSkill from "./SingleSkill";
import { SiWechat } from "react-icons/si";
import { TiGroup } from "react-icons/ti";
import { GiScales } from "react-icons/gi";
import { FaPuzzlePiece, FaLightbulb, FaBrain } from "react-icons/fa";

function SoftSkills({ isSoft }) {
   return (
      <>
         <div className='soft-skills'>
            <SingleSkill
               className={"soft"}
               icon={<SiWechat />}
               name={"Communication"}
               list1={`This is always the key.`}
               list2={`Multiple methods inlcuding the most essential ones like map(), filter() or `}
            />
            <SingleSkill
               className={"soft"}
               icon={<TiGroup />}
               name={"Leadership"}
               list1={`I have a experience in managing a team of 30+ people.`}
               list2={`I do understand how difrent we all are and that everyone requires difrent approach`}
            />
            <SingleSkill
               className={"soft"}
               icon={<FaPuzzlePiece />}
               name={"Adaptability"}
               list1={`Working in a Start-Up tought me how to adapt quickly and efficently. Everythign can change just in a day and you have to be ready for that`}
            />
            <SingleSkill
               className={"soft"}
               icon={<FaBrain />}
               name={"Complex problem-solving"}
               list1={`I have 5+ years of experience in Operations where I challenged
                  many difrent unexpected problems and had to resolve them
                  quickly`}
            />
            <SingleSkill
               className={"soft"}
               icon={<FaLightbulb />}
               name={"Creatiity and innitiative"}
               list1={`I have 5+ years of experience in Operations where I challenged
                  many difrent unexpected problems and had to resolve them
                  quickly`}
            />
            <SingleSkill
               className={"soft"}
               icon={<GiScales />}
               name={"Work Ethic"}
               list1={`I strongly believe that we should do our 100% everywhere, all the time. It does not matter if this is our personal or professional life.`}
            />
            <SingleSkill
               className={"soft"}
               icon={<GiScales />}
               name={"Accountability"}
               list1={`I strongly believe that we should do our 100% everywhere, all the time. It does not matter if this is our personal or professional life.`}
            />
            <div className='space'></div>
         </div>
      </>
   );
}

export default SoftSkills;
