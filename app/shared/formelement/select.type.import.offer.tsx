/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from "axios";

export const SelectTypeImport = (props) => (
    <div className="selectdiv">
        <select
            name={props.name}
            required
            value={props.selectedOption}
            onChange={props.controlFunc}
            className="">
            <option value="">{props.placeholder}</option>
            {props.options.map((publishOpt, index) => {
                return (
                    <option
                        key={index}
                        //value={publishOpt.TypeID}>{publishOpt.Name}</option>
                        value={publishOpt.Value} > {publishOpt.Text}</option>
                );
            })}
        </select>
    </div>
);
