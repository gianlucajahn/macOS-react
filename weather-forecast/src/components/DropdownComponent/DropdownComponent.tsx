import React, { useContext } from 'react';
import getDropdownContent from '../../utils/keys/helpers/getDropdownContent';
import { store } from '../../App';
import './DropdownComponent.scss';

export default function DropdownComponent () {
  const [state, dispatch] = useContext(store)
  const content = getDropdownContent(state);

  return (
    <div className={`dropdown-menu ${state.section === "logo" ? "logo-dd" : state.section === "finder" ? "finder-dd"  : state.section === "file" ? "file-dd" : state.section === "edit" ? "edit-dd" : state.section === "view" ? "view-dd" : state.section === "go" ? "go-dd" : state.section === "windows" ? "windows-dd" : state.section === "help" ? "help-dd" : ""}`}>
      {content.map((item, i) => {
        if (item.name === "divider") {
            return (
                <div className="divider" />
            )
        }

        return (
            <div className="dropdown-item" style={{ color: item.available ? "white" : "rgb(153, 153, 153)" }}>
                {item.name}
            </div>
        )
      })}
    </div>
  );
}
