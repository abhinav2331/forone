/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from "axios";

export const DatepickerInput = (props) => (
    <div className="inputStyle">        
        <input            
            name={props.name}
            type={props.inputType}
            defaultValue={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder} />
    </div>
);