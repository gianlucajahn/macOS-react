import React, { useContext } from 'react';
import getDropdownContent from '../../utils/keys/helpers/getDropdownContent';
import { store } from '../../App';
import './DropdownComponent.scss';

export default function DropdownComponent () {
  const [state, dispatch] = useContext(store)
  const content = getDropdownContent(state);

  return (
    <div className="dropdown-menu">
      {content.map((item, i) => {
        if (item.name === "divider") {
            return (
                <div className="divider" />
            )
        }

        return (
            <div className="dropdown-item" style={{ color: item.available ? "white" : "#ccc" }}>
                {item.name}
            </div>
        )
      })}
    </div>
  );
}
