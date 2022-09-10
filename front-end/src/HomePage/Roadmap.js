import React from "react";

export default function Roadmap({ prompts }) {
  const roadmapPrompts = [...prompts];

  let logo = "../assets/img/GYS_logo.jpg";

  let media = ["https://www.rand.org/content/rand/blog/2014/11/honoring-americas-veterans-requires-helping-their/_jcr_content/par/blogpost.aspectcrop.868x455.cm.jpg/1569972119880.jpg", "https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717__480.jpg", "https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFtaWx5JTIwYW5kJTIwZnJpZW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60", require("../assets/img/shirts/gys-story-shirt-gray.jpeg")]

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
