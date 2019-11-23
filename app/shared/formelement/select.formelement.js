/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
export var SelectFormElement = function (props) { return (React.createElement("div", { className: "selectdiv" },
    React.createElement("select", { name: props.name, 
        //required
        onChange: props.controlFunc, className: "", value: props.selectedOption },
        React.createElement("option", { value: "" }, props.placeholder),
        props.options.map(function (opt, index) {
            return React.createElement("option", { key: index, value: opt.value }, opt.name);
        }),
        "); })}"))); };
//# sourceMappingURL=select.formelement.js.map