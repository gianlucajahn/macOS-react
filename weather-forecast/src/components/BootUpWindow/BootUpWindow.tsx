import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { store } from "../../App";
import "./BootUpWindow.scss";
import BootSound from "../../resources/audio/bootsound.mp3";

export default function BootUpWindow() {
  const [state, dispatch] = useContext(store);

  useEffect(() => {
    setTimeout(() => {
      const bootUpWindow = document.getElementById("boot");
      bootUpWindow!.classList.remove("bootup-window");
      bootUpWindow!.classList.add("vanished");
      playSound();
    }, 3350);

    setTimeout(() => {
      dispatch({
        type: "booting/FINISH",
      });
    }, 4350);
  }, []);

  const animations = {
    initial: { width: "0px" },
    animate: { width: "150px" },
  };

  let audio = new Audio(BootSound);
  audio.volume = 0.4;

  const playSound = () => {
    if (!state.soundPlayed) {
      dispatch({
        type: "sound/PLAY",
      });

      setTimeout(() => {
        if (document.getElementById("boot") === null) {
          return;
        } else {
          audio.play();
        }
      }, 2200);
    }
  };

  return (
    <div className="bootup-window boot" id="boot" onMouseEnter={playSound}>
      <img
        alt="Logo"
        className="logo"
        src={require("../../resources/images/applelogo.png")}
      />
      <div className="bar-container">
        <div className="bar-background" />
        <motion.div
          className="bar"
          variants={animations}
          initial="initial"
          animate="animate"
          transition={{ ease: "easeInOut", duration: 2.1, delay: 0.4 }}
        />
      </div>
    </div>
  );
}
