import React, { Children, useContext } from 'react';
import { store } from '../../App';
import checkDropdown from '../../utils/keys/helpers/checkDropdown';
import './Page.scss';

export default function Page ({children}: any) {
  const [state, dispatch] = useContext(store);

  const conditionalClick = (e: React.MouseEvent) => {
    const isDropdown = checkDropdown(e);
    if (isDropdown === false) {
        dispatch({
            type: 'section/RESET'
        });
    }
  }

  return (
    <div className="page" id="page" onClick={conditionalClick}>
      {children}
    </div>
  );
}
