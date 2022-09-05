import React from "react";
// import Header from "../components/Header";
import Mission from "./Mission";
import Roadmap from "./Roadmap";
import Events from "../FAQLayout/Events"
import ShopHeader from "../Shop/ShopHeader";

export default function HomeLayout({prompts = []}) {

    const missionPrompts = prompts.filter((prompt)=> prompt.section_name.includes("mission"));

    const roadmapPrompts = prompts.filter((prompt)=> prompt.section_name.includes("roadmap"));

    return(
        <div className="home">
            <div className="home-layout">
            <Mission prompts={missionPrompts} />

            <Roadmap prompts={roadmapPrompts} />
            <Events />
            </div>
        </div>

    )
}