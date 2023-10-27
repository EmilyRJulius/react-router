import React from 'react';
import Chips from './chips';
import { BrowserRouter, Route } from "react-router-dom";

const VendingMachine = () => {
    return( 
    <div>
    <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
    <BrowserRouter>
    <Route exact path="/chips">
        <Chips />
    </Route>
    </BrowserRouter>
    </div>
    )
};

export default VendingMachine;