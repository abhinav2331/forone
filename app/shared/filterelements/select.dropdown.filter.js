/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
export var Select = function (props) { return (React.createElement("div", { className: "styled-select" },
    React.createElement("select", { name: props.name, value: props.selectedOption, onChange: props.controlFunc, className: "form-select" },
        React.createElement("option", { value: "" }, props.placeholder),
        props.options.map(function (publishOpt, index) {
            return (React.createElement("option", { key: index, value: publishOpt.value }, publishOpt.name));
        })))); };
//# sourceMappingURL=select.dropdown.filter.js.map