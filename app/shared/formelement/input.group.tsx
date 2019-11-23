/// <reference path="../../../typings/index.d.ts" />
import { PropTypes, StatelessComponent } from "react";
import * as React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export const InputGroupField = (props) => (
    <div>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                    <Input addon type="checkbox" aria-label="Yes" />
                </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Yes" />{' '} {' '}
            <Input placeholder="Yes" />
            <InputGroupText>
                <i className="fa fa-trash"></i>
            </InputGroupText>
        </InputGroup>
    </div>
);


/*
 <input
            className="form-control"
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder}
            required
        />
 */