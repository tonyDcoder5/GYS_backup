import React, { useEffect, useState } from "react";
import StarBanner from "../components/StarBanner";
import { listResources } from "../utils/api";

export default function Downloadables() {
  const [downloads, setDownloads] = useState(null);
  const [downloadsError, setDownloadsError] = useState(null);

  useEffect(() => {

    const fetchDownloads = async () => {
      try {
        const abortController = new AbortController();
        const response = await listResources(abortController.signal);
        setDownloads(response);
      } catch (error) {
        setDownloadsError(error);
      }
    };

    fetchDownloads();
  }, []);

  // console.log(downloads);
  
  const downloadsPage = [
    {
      id: 0,
      title: "GYS Toolkit",
      icon: require("../assets/img/gys-pamphlet.png"),
      url: "https://www.canva.com/design/DAFLL3Z_3eI/DSCmDL-OGBxRK63EPnBPxA/view?utm_content=DAFLL3Z_3eI&utm_campaign=designshare&utm_medium=link&utm_source=viewer",
      desc: "Easy to read pamphlet with helpful information and tips to know about Veteran's mental health in FL",
      width: "50%",
    },
    {
      id: 1,
      title: "We Got Your Back Postcard",
      icon: require("../assets/img/gys-postcard.png"),
      url: "https://drive.google.com/file/d/10IL-8VEkQ5vT6LZnx424Vi_2sZp7f0BZ/view?usp=sharing",
      desc: "Share with your friends and family!",
      width: "50%",
    },
  ];

  const display = downloadsPage.map((download, idx) => {
    return (
      <div className="download" key={idx}>
        <span>
        <img
          className="download-img m-3"
          src={download.icon}
          alt={download.title}
          width={download.width}
          onClick={() => {
            window.open(download.url);
          }}
        />
        <h3>{download.title}</h3>
        <p>{download.desc}</p>
        </span>
      </div>
    );
  });

  return (
    <div className="downloads">
      <div className="downloadables-block">
        <h4>Downloadables</h4>
        <StarBanner />
        <div className="downloadables">
        {display}
        </div>
      </div>
    </div>
  );
}
