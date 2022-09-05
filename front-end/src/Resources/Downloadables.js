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
      title: "test download",
      icon: require("../assets/img/GYS_logo.jpg"),
      url: "https://docs.google.com/document/d/1eoWdME3KAClw2CptXYP7AZFrUJCTjbiV-tPnoUO4-Gc/edit?usp=sharing",
      desc: "Short description of download, with instructions on how",
      width: "25%",
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
      <div className="col download" key={idx}>
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
      <div className="row downloadables-block">
        <h4>Downloadables</h4>
        <StarBanner />
        {display}
      </div>
    </div>
  );
}
