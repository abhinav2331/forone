/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';

export const RadioCheckbox = (props) => (

    <div className="row no-margin">        

        {props.options.map(option => {
            return (
                <div key={option} className="col-md-12" style={{paddingLeft:'0px'}}>
                    <label key={option} className="form-label capitalize">
                        <input
                            className="form-checkbox"
                            name={props.setName}
                            onChange={props.controlFunc}
                            value={option}
                            checked={props.selectedOptions.indexOf(option) > -1}
                            type={props.type} /> {option}
                    </label>
                </div>
            );
        })}
        
    </div>

);