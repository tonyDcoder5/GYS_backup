import React from "react";
import { Link } from "react-router-dom";
import SupportGYS from "./AboutSupport";
import AboutUs from "./AboutUs";
import Values from "./Values";

export default function AboutLayout({prompts=[]}) {

  const aboutUsPrompts = prompts.filter((prompt)=> prompt.section_name.includes("why"));

  const valuesPrompts = prompts.filter((prompt)=> prompt.section_name.includes("values"));

  const supportPrompts = prompts.filter((prompt)=> prompt.section_name.includes("support"));

  console.log(aboutUsPrompts, valuesPrompts);

  return (
    <div className="about">
      <AboutUs prompts={aboutUsPrompts} />
      <Values prompts={valuesPrompts} />
      <SupportGYS prompts={supportPrompts} />
    </div>
  );
}
