import * as React from 'react';
//import PropTypes from 'prop-types';
export var InputNumericNormal = function (props) { return (React.createElement("div", null,
    React.createElement("input", { className: "form-control", name: props.name, step: props.stepType, type: props.inputType, value: props.content, onChange: props.controlFunc, placeholder: props.placeholder, required: true }))); };
//# sourceMappingURL=input.numeric.js.map