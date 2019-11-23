/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
export var SimpleInputField = function (props) { return (React.createElement("div", { className: "inputStyle" },
    React.createElement("input", { name: props.name, type: props.inputType, defaultValue: props.content, onChange: props.controlFunc, placeholder: props.placeholder }))); };
//# sourceMappingURL=simple.input.field.js.map