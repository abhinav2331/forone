/// <reference path="../../../typings/index.d.ts" />
import { PropTypes, StatelessComponent } from "react";
import * as React from 'react';

export const Textarea = (props) => (
    <div>
        <textarea
            className="form-control"
            style={props.resize ? null : { resize: 'none' }}
            name={props.name}
            rows={props.rows}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder}
        ></textarea>
    </div>
);
