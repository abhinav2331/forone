/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
export var RadioCheckbox = function (props) { return (React.createElement("div", { className: "row no-margin" }, props.options.map(function (option) {
    return (React.createElement("div", { key: option, className: "col-md-12", style: { paddingLeft: '0px' } },
        React.createElement("label", { key: option, className: "form-label capitalize" },
            React.createElement("input", { className: "form-checkbox", name: props.setName, onChange: props.controlFunc, value: option, checked: props.selectedOptions.indexOf(option) > -1, type: props.type }),
            " ",
            option)));
}))); };
//# sourceMappingURL=radio.checkbox.js.map