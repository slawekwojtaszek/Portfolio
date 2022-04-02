import React from "react";
import SingleSkill from "./SingleSkill";
import { SiWechat } from "react-icons/si";
import { TiGroup } from "react-icons/ti";
import { GiScales } from "react-icons/gi";
import { BsFillPersonCheckFill } from "react-icons/bs";

import { FaPuzzlePiece, FaLightbulb, FaBrain } from "react-icons/fa";

function SoftSkills({ isSoft }) {
   return (
      <>
         <div className='soft-skills'>
            <SingleSkill
               className={"soft"}
               icon={<SiWechat />}
               name={"Communication"}
               skillType={"Soft Skill"}
               list1={`I believe this is one of the most important soft skills.`}
               list2={`Careful listening in order to allow everyone share their opinions, ideas and feelings.`}
               list3={`Stress Management and emotion control.`}
            />
            <SingleSkill
               className={"soft"}
               icon={<TiGroup />}
               name={"Leadership"}
               skillType={"Soft Skill"}
               list1={`I have a experience in managing a team of 30+ people with varied background culture and age.`}
               list2={`Planning individual development for team members.`}
               list3={`Managing over 300+ people in last 5 years.`}
            />
            <SingleSkill
               className={"soft"}
               icon={<FaPuzzlePiece />}
               name={"Adaptability"}
               skillType={"Soft Skill"}
               list1={`I have worked 3+ years in a Start-Up company backed by BGF - the most active United Kingdom and Ireland entrepreneur investor`}
               list2={`Working in a Start-Up tought me how to adapt quickly and efficently. Everythign can change just in a day and you have to be ready for that`}
               list3={`I have always found it easy to transition from one type of the business to another. I have been making toys for children, baking doughnuts or printing personalised gifts for hundred thousands people in total.`}
            />
            <SingleSkill
               className={"soft"}
               icon={<FaBrain />}
               name={"Complex problem-solving"}
               skillType={"Soft Skill"}
               list1={`I have 5+ years of working experience in Operations where I have experienced many unexpected problems and I have had to resolve them quickly`}
               list2={`Lack of people, broken machines or late delivery from suppliers. That's a very small number of many day to day issues that has to be resolved in order for the business to work in good order.`}
            />
            <SingleSkill
               className={"soft"}
               icon={<FaLightbulb />}
               name={"Creatiity and innitiative"}
               skillType={"Soft Skill"}
               list1={`I always tried to create some sort of art. I have tried many difrent art forms from photography, paitings, street art or poems but music is my biggest passion.`}
               list2={`I always try to come up with unique solution to a problem. Working in such a difrent enviromets improved my crative skills.`}
            />
            <SingleSkill
               className={"soft"}
               icon={<GiScales />}
               name={"Work Ethic"}
               skillType={"Soft Skill"}
               list1={`I strongly believe that we should do our 100% everywhere, all the time. It does not matter if this is our personal or professional life.`}
               list2={`I strongly believe that we should do our 100% everywhere, all the time. It does not matter if this is our personal or professional life.`}
            />
            <SingleSkill
               className={"soft"}
               icon={<BsFillPersonCheckFill />}
               name={"Accountability"}
               skillType={"Soft Skill"}
               list1={`Improving and Maintaining Health and Safety standards in 15.000  Factory and being the key holder.`}
               list2={`Not always everything goes as planned. Staying until 4am in the morning to fix thousands of toys for children or personally delivering 150 meters of personalised paper for BBC can happen. I am always accountable for whatever I do.`}
            />
            <div className='space'></div>
         </div>
      </>
   );
}

export default SoftSkills;
