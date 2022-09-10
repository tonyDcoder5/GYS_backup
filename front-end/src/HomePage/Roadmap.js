import React from "react";

export default function Roadmap({ prompts }) {
  const roadmapPrompts = [...prompts];

  let logo = "../assets/img/GYS_logo.jpg";

  let media = ["https://www.rand.org/content/rand/blog/2014/11/honoring-americas-veterans-requires-helping-their/_jcr_content/par/blogpost.aspectcrop.868x455.cm.jpg/1569972119880.jpg", "", "", ""]

  return (
    <div className="roadmap-sect">
      {roadmapPrompts ? (
        roadmapPrompts.map((prompt, i) => {
        
          return (
            <div className="roadmap-block">
              <h3>{prompt.section_title}</h3>
              <div>
                <img
                  src={media[i]}
                  alt={prompt.subtext}
                />
                <p>{prompt.section_text}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="row mb-5">
          <div className="col">
            <h3>Loading ....</h3>
          </div>
        </div>
      )}
    </div>
  );
}
