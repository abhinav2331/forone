import * as React from 'react';
//import PropTypes from 'prop-types';
export var InputNormal = function (props) { return (React.createElement("div", null,
    React.createElement("input", { className: "form-control", name: props.name, type: props.inputType, value: props.content, onChange: props.controlFunc, placeholder: props.placeholder }))); };
//# sourceMappingURL=input.normal.js.map