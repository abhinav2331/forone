var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
var reorder = function (list, startIndex, endIndex) {
    var result = Array.from(list);
    var removed = result.splice(startIndex, 1)[0];
    result.splice(endIndex, 0, removed);
    return result;
};
var getItemStyle = function (draggableStyle, isDragging) { return (__assign({ userSelect: 'none', background: isDragging ? 'lightgrey' : 'white' }, draggableStyle)); };
var getListStyle = function (isDraggingOver) { return ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    width: 250
}); };
var VersionCreatives = /** @class */ (function (_super) {
    __extends(VersionCreatives, _super);
    function VersionCreatives(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [{ content: "Hello", id: "1" },
                { content: "World Life", id: "2" },
                { content: "Goodbye Demo", id: "3" },
                { content: "LaLa", id: "4" },
                { content: "Insult", id: "5" },
                { content: "Compliment", id: "6" }
            ]
        };
        _this.onDragEnd = _this.onDragEnd.bind(_this);
        return _this;
    }
    VersionCreatives.prototype.onDragEnd = function (result) {
        if (!result.destination) {
            return;
        }
        var items = reorder(this.state.items, result.source.index, result.destination.index);
        this.setState({ items: items });
    };
    VersionCreatives.prototype.render = function () {
        var _this = this;
        return (React.createElement("section", { className: "creative pos-static" },
            React.createElement("div", { className: "clearfix" },
                React.createElement("button", { type: "button", "data-toggle": "modal", "data-target": "#addnewcreative", className: "btn btn-success pull-right" }, "Add Element")),
            React.createElement("div", { style: { marginTop: '15px' } },
                React.createElement("h4", { className: "card-title" }, "Elements")),
            React.createElement("div", { className: "divider" }),
            React.createElement(DragDropContext, { onDragEnd: this.onDragEnd },
                React.createElement(Droppable, { droppableId: "droppable" }, function (provided, snapshot) { return (React.createElement("div", { ref: provided.innerRef },
                    _this.state.items.map(function (item) { return (React.createElement(Draggable, { key: item.id, draggableId: item.id }, function (provided, snapshot) { return (React.createElement("div", { className: "quesionList" },
                        React.createElement("div", __assign({ className: "question", ref: provided.innerRef, style: getItemStyle(provided.draggableStyle, snapshot.isDragging) }, provided.dragHandleProps), item.content),
                        provided.placeholder)); })); }),
                    provided.placeholder)); }))));
    };
    return VersionCreatives;
}(React.Component));
export { VersionCreatives };
//# sourceMappingURL=version.creatives.js.map