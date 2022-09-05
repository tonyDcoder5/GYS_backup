import React, { useState, useEffect } from "react";
import Downloadables from "../Resources/Downloadables";
import FAQs from "./FAQs";
import ShopHeader from "../Shop/ShopHeader";
import { listPosts } from "../utils/api";

export default function FAQLayout() {

  //make API call to fetch list from Posts table to display on both FAQ component and Page
  const [faqs, setFaqs] = useState([]);
  const [FAQSerror, setFAQSerror] = useState(null)
 
  useEffect( ()=>{
    const fetchResources = async ()=>{
      try{
        const abortController = new AbortController();
        const response = await listPosts(abortController.signal);
        setFaqs(response)
        
      } catch (error){
        setFAQSerror(error)
      }
    }
    fetchResources()
  },[])

  return (
    <div className="faq-layout">
      <ShopHeader />
      <FAQs data={faqs} />
      <Downloadables />
    </div>
  );
}

