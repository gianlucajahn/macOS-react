import { Box, Button, Slide, useDisclosure } from "@chakra-ui/react";
import React from "react";
import "./ChakraCookies.scss";

export default function ChakraCookies() {
  return (
    <>
      <button className="nav cookies-btn">
        <div className="tooltip">No cookies!</div>
        <img
          alt="Cookies"
          className="cookies"
          src={require("../../resources/images/cookies.png")}
        />
      </button>
    </>
  );
}
