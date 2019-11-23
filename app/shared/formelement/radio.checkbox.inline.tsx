/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';

export const CheckboxInline = (props) => (
            <label key={props.value} className="form-label capitalize">
                <input
                    className="form-checkbox"
                    name={props.name}
                    onChange={props.controlFunc}
                    checked={props.checked}
                    type={'checkbox'} /> {props.display}
            </label>
);