import './App.css';
import React from "react";

import GridComponent from "./grid";
import UserDetails from "./user-details";
import {SummaryActive, SummaryUsers} from "./summaries";
import {Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <div>
                <h1>Our awesome app</h1>
                <ul role="navigation">
                    <li><Link to="/grid">Grid</Link></li>
                    <li><Link to="/details">Details</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/grid" element={
                    <GridComponent>
                        <SummaryActive />
                        <SummaryUsers />
                    </GridComponent>
                }/>
                <Route exact path="/details" element ={<UserDetails/>}/>
            </Routes>
        </>
    );
}

export default App;
