/// <reference path="../../../typings/index.d.ts" />
import { PropTypes, StatelessComponent } from "react";
import * as React from 'react';
//import PropTypes from 'prop-types';


export const InputNumericNormal = (props) => (
    <div>
        <input
            className="form-control"
            name={props.name}
            step={props.stepType}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder}
            required
        />
    </div>
);
