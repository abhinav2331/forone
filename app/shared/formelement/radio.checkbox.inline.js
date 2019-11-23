/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
export var CheckboxInline = function (props) { return (React.createElement("label", { key: props.value, className: "form-label capitalize" },
    React.createElement("input", { className: "form-checkbox", name: props.name, onChange: props.controlFunc, checked: props.checked, type: 'checkbox' }),
    " ",
    props.display)); };
//# sourceMappingURL=radio.checkbox.inline.js.map