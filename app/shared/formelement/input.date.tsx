/// <reference path="../../../typings/index.d.ts" />
import { PropTypes, StatelessComponent } from "react";
import * as React from 'react';
//import PropTypes from 'prop-types';


export const InputDate = (props) => (
    <div>
        <input
            className="form-control"
            name={props.name}        
            type={props.inputType}
            data-date-format={props.dateformat}
            value={props.content}
            onChange={props.controlFunc}
            //placeholder={props.placeholder}            
        />
    </div>
);
