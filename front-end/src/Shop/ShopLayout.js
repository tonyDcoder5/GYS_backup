import React from "react";

import ShopBanner from "./ShopBanner";
import ShopHeader from "./ShopHeader";
import ShopBlock from "./ShopBlock";


export default function ShopLayout({prompts =[]}) {

  const headerPrompts = prompts.filter((prompt)=> prompt.section_name.includes("shop-header"));

  const shirtPrompts = prompts.filter((prompt)=> prompt.section_name.includes("shop-shirt"));

  return (
    <div className="shop-layout">
      {/* <ShopBanner /> */}
      <ShopHeader prompts={headerPrompts} />
      <ShopBlock prompts={shirtPrompts} />
    </div>
  );
}
