import React from "react";
import Draggable from "react-draggable";
import "./styles.scss";

const Folder = (props:any) => {
  const { name, selected, selectItem } = props;
  const [opacity, setOpacity] = React.useState(1);

  const handleChangeOpacity = (newOpacity:any) => {
    setOpacity(newOpacity);
  };

  return (
    <Draggable
      bounds="body"
      onDrag={() => handleChangeOpacity(0.7)}
      onStop={() => handleChangeOpacity(1)}
    >
      <div
      className="desktop-folder"
        // opacity={opacity}
        onClick={(e:any) => {
          e.stopPropagation();
        //   selectItem(name);
        }}
        onDoubleClickCapture={() => window.open("")}
      >
        <div className="desktop-folder-icon"
        //  selected={selected} 
        />
        <div className="desktop-folder-name" 
        // selected={selected}
        >{name}</div>
      </div>
    </Draggable>
  );
};

export default Folder;
