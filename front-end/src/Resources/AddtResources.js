import React, { useState, useEffect } from "react";
import StarBanner from "../components/StarBanner";
import { listResources } from "../utils/api";
import { Button } from "react-bootstrap";


export default function AddtResources() {
  const [resources, setResources] = useState([]);
  const [resourcesError, setResourcesError] = useState(null);

  const [showDetails, setShowDetails] = useState(false);
  const [resourceDetails, setResourceDetails] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const abortController = new AbortController();
        const response = await listResources(abortController.signal);
        setResources(response);
      } catch (error) {
        setResourcesError(error);
      }
    };
    fetchResources();
  }, []);

//   console.log(resources);

  const list = resources.filter((resource)=> resource.resource_subtext.includes("add-resource"));

//   console.log(list);

const handleShow = (idx) => {
    setResourceDetails(idx);
    setShowDetails(true);
    if (resourceDetails === idx) {
      setShowDetails(!showDetails);
    }
  };



  return (
    <div className="local-support-block">
      <section className="local-hotlines" style={{width: "100%"}}>
        <h3>Additional Resources</h3>
        <StarBanner />
        <div className="contact-list" >
          <div className="contact-group">
            {list.map((resource, idx) => (
              <div
                key={idx}
                className="contact-line contact-line-counseling"
              >
                <div className="contact-brand">
                  <h4>{resource.resource_title}</h4>
                </div>
                <div className="contact-info">
                <img
                    key={resource.resource_subtext}
                    src={resource.resource_media || null}
                    alt={resource.resource_subtext}
                    className="resource-img"
                    style={{borderRadius: "0"}}
                    onClick={() => handleShow(idx)}
                  />
                  {showDetails && resourceDetails === idx ? 
                (<>
                <p>{resource.resource_description}</p>
                <Button className="local-orgsite">
                  <a href={resource.resource_url} target="_blank">Website</a>
                </Button> </>): null}
                </div>
              </div>
            ))}
          </div>
        </div>
     </section>
 </div>
  );
}
