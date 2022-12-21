import React from "react";
import "./Window.scss";

export default function Window({ children }: any) {

  return (
    <div className="window" id="window">
      {children}
    </div>
  );
}
