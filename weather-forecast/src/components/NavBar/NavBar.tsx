import React, { useContext } from 'react';
import { store } from '../../App';
import './NavBar.scss';
import { ReactComponent as Settings} from "../../resources/images/svg/settings.svg";
import getDate from '../../utils/keys/helpers/getDate';

const date = getDate();

export default function () {
  const [state, dispatch] = useContext(store);

  const dispatchAction = (e: React.MouseEvent<HTMLElement>) => {
    const selectedSection = e.target as HTMLDivElement
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
            </div>
    
            <div className="finder section" id="finder" onClick={dispatchAction}>
                Finder
                <div className={`${state.section === "finder" ? "selected-finder" : "not-selected"}`}></div>
            </div>
    
            <div className="file section" id="file" onClick={dispatchAction}>
                File
                <div className={`${state.section === "file" ? "selected-file" : "not-selected"}`}></div>
            </div>
    
            <div className="edit section" id="edit" onClick={dispatchAction}>
                Edit
                <div className={`${state.section === "edit" ? "selected-edit" : "not-selected"}`}></div>
            </div>
    
            <div className="view section" id="view" onClick={dispatchAction}>
                View
                <div className={`${state.section === "view" ? "selected-view" : "not-selected"}`}></div>
            </div>
            <div className="go section" id="go" onClick={dispatchAction}>
                Go
                <div className={`${state.section === "go" ? "selected-go" : "not-selected"}`}></div>
            </div>
    
            <div className="windows section" id="windows" onClick={dispatchAction}>
                Window
                <div className={`${state.section === "windows" ? "selected-window" : "not-selected"}`}></div>
            </div>
    
            <div className="help section" id="help" onClick={dispatchAction}>
                Help
                <div className={`${state.section === "help" ? "selected-help" : "not-selected"}`}></div>
            </div>

            <div className="right">
                <Settings className="settings" />
                <h3 className="date">{date[0]}</h3>
                <h3>{date[1]}</h3>
            </div>
        </div>
    </>
  );
}
