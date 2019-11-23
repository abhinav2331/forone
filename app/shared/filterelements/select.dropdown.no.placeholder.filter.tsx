/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from "axios";

export const SelectNoPlaceholder = (props) => (
    <div className="styled-select">
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.controlFunc}
            className="form-select">            
             {props.options.map((publishOpt, index) => {
                return (
                    <option
                        key={index}
                        //value={publishOpt.TypeID}>{publishOpt.Name}</option>
                        value = { publishOpt.Value } > { publishOpt.Text }</option>
        );
    })} 
   
        </select>
    </div>
);
