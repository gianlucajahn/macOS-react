import React from "react";
import "./QueryBoard.scss";
import InputField from "../InputField/InputField";
import QueryBoardLinks from "../QueryBoardLinks/QueryBoardLinks";
import { useDisclosure } from "@chakra-ui/react";
import ChakraAlert from "../ChakraAlert/ChakraAlert";
import ChakraCookies from "../ChakraCookies/ChakraCookies";

export default function QueryBoard() {
  // Hooks for use in ChakraUI components
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  return (
    <div className="query-board" id="handle">
      <QueryBoardLinks />
      <InputField />

      <ChakraCookies />

      <button
        className="nav fullscreen-btn"
        onClick={(e) => {
          if (window.screenTop && window.screenY) {
            document.exitFullscreen();
            return;
          }
          onOpen();
        }}
      >
        <img
          alt="Fullscreen Icon"
          className="fullscreen"
          src={require("../../resources/images/fullscreen.png")}
        />
      </button>

      <ChakraAlert isOpen={isOpen} cancelRef={cancelRef} onClose={onClose} />
    </div>
  );
}
