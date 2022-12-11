import React, { useContext } from 'react';
import { store } from '../../App';
import './Window.scss';

export default function Window ({children}: any) {
  const [state, dispatch] = useContext(store);

  return (
    <div className="window" id="window">
      {children}
    </div>
  );
}