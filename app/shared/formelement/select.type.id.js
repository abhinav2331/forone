/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
export var SelectTypeID = function (props) { return (React.createElement("div", { className: "selectdiv" },
    React.createElement("select", { name: props.name, required: true, value: props.selectedOption, onChange: props.controlFunc, className: "" },
        React.createElement("option", null, props.placeholder),
        props.options.map(function (publishOpt, index) {
            return (React.createElement("option", { key: index, value: publishOpt.Value }, publishOpt.Text));
        })))); };
//# sourceMappingURL=select.type.id.js.map