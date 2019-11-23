/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from "axios";

export const Select = (props) => (
    <div className="styled-select">
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.controlFunc}
            className="form-select">
            <option value="">{props.placeholder}</option>
             {props.options.map((publishOpt, index) => {
                return (
                    <option
                        key={index}
                        value = { publishOpt.value } >{ publishOpt.name }</option>
        );
    })} 
   
        </select>
    </div>
);
