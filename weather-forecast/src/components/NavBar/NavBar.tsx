import React, { useContext, useEffect } from 'react';
import { store } from '../../App';
import './NavBar.scss';
import { ReactComponent as Settings} from "../../resources/images/svg/settings.svg";
import getDate from '../../utils/helpers/getDate';
import DropdownComponent from '../DropdownComponent/DropdownComponent';

export default function () {
  const [state, dispatch] = useContext(store);

  useEffect(() => {
    dispatch({
        type: 'date/SET'
      });
  }, []);

  setInterval(() => {
    dispatch({
        type: 'date/SET'
    })
  }, 60000);

  const dispatchAction = (e: React.MouseEvent<HTMLElement>) => {
    const selectedSection = e.target as HTMLElement;
    if (selectedSection.classList.contains('dd')) {
        return;
    }
    dispatch({
        type: 'section/SELECT',
        payload: selectedSection.id
    })
  }

  return (
    <>
        <div className="filter" />
        <div className="nav-bar">
            <div className="logo section" id="logo" onClick={dispatchAction}>
                <img className="apple" src={require("../../resources/images/apple.png")} />
                <div className={`${state.section === "logo" ? "selected-logo" : "not-selected"}`}></div>
                {state.section === "logo" ? <DropdownComponent /> : null} 
            </div>
    
            <div className="finder section" id="finder" onClick={dispatchAction}>
                Finder
                <div className={`${state.section === "finder" ? "selected-finder" : "not-selected"}`}></div>
                {state.section === "finder" ? <DropdownComponent /> : null} 
            </div>
    
            <div className="file section" id="file" onClick={dispatchAction}>
                File
                <div className={`${state.section === "file" ? "selected-file" : "not-selected"}`}></div>
                {state.section === "file" ? <DropdownComponent /> : null} 
            </div>
    
            <div className="edit section" id="edit" onClick={dispatchAction}>
                Edit
                <div className={`${state.section === "edit" ? "selected-edit" : "not-selected"}`}></div>
                {state.section === "edit" ? <DropdownComponent /> : null} 
            </div>
    
            <div className="view section" id="view" onClick={dispatchAction}>
                View
                <div className={`${state.section === "view" ? "selected-view" : "not-selected"}`}></div>
                {state.section === "view" ? <DropdownComponent /> : null} 
            </div>
            <div className="go section" id="go" onClick={dispatchAction}>
                Go
                <div className={`${state.section === "go" ? "selected-go" : "not-selected"}`}></div>
                {state.section === "go" ? <DropdownComponent /> : null} 
            </div>
    
            <div className="windows section" id="windows" onClick={dispatchAction}>
                Window
                <div className={`${state.section === "windows" ? "selected-window" : "not-selected"}`}></div>
                {state.section === "windows" ? <DropdownComponent /> : null} 
            </div>
    
            <div className="help section" id="help" onClick={dispatchAction}>
                Help
                <div className={`${state.section === "help" ? "selected-help" : "not-selected"}`}></div>
                {state.section === "help" ? <DropdownComponent /> : null} 
            </div>

            <div className="right">
                <Settings className="settings" />
                <h3 className="date">{state.date[0]}</h3>
                <h3>{state.date[1]}</h3>
            </div>
        </div>
    </>
  );
}
