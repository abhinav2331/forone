/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from "axios";

export const SelectHasOffersTracking = (props) => (
    <div className="selectdiv">
        <select
            name={props.name}            
            value={props.selectedOption}
            onChange={props.controlFunc}
            className="">            
            <option value="">Has Offers</option>
            <option value="true">True</option>
            <option value="false">False</option>            
        </select>
    </div>
);
