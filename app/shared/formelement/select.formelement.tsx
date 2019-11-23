/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from "axios";

export const SelectFormElement = (props) => (
    <div className="selectdiv">
        <select
            name={props.name}
            //required
            onChange={props.controlFunc}
            className=""
            value={props.selectedOption}>
            <option value="">{props.placeholder}</option>
            {props.options.map((opt, index) => {
                return <option
                    key={index}
                    value={opt.value}>{opt.name}</option>;
            })});
    })}
        </select>
    </div>
);
