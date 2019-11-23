/// <reference path="../../../typings/index.d.ts" />
import { PropTypes, StatelessComponent } from "react";
import * as React from 'react';

export const TextareaNormal = (props) => (
    <div>        
        <textarea
            className="form-control"                     
            name={props.name}            
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder}>
            </textarea>
    </div>
);





