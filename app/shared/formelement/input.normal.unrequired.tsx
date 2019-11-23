/// <reference path="../../../typings/index.d.ts" />
import { PropTypes, StatelessComponent } from "react";
import * as React from 'react';

export const InputNormalunRequired = (props) => (
    <div>
        <input
            className="form-control"
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder}            
        />
    </div>
);





