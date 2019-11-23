/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

interface Item {
    id: string;
    content: string;
}

const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const getItemStyle = (draggableStyle: any, isDragging: any) => ({
    userSelect: 'none',
    background: isDragging ? 'lightgrey' : 'white',
    ...draggableStyle
});

const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    width: 250
});

interface AppState {
    items: Item[];
}

export class VersionCreatives extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [{ content: "Hello", id: "1" },
            { content: "World Life", id: "2" },
            { content: "Goodbye Demo", id: "3" },
            { content: "LaLa", id: "4" },
            { content: "Insult", id: "5" },
            { content: "Compliment", id: "6" }
            ]
        };    
        this.onDragEnd = this.onDragEnd.bind(this);
    }   
    onDragEnd(result: DropResult) {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );
        this.setState({ items });
    }  
    
   
    render() {
        return (
            <section className="creative pos-static">                                 
                <div className="clearfix"><button type="button" data-toggle="modal" data-target="#addnewcreative" className="btn btn-success pull-right">Add Element</button></div>
                <div style={{ marginTop: '15px' }}>
                    <h4 className="card-title">Elements</h4>
                </div>
                <div className="divider"></div>               

                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                
                            >
                                {this.state.items.map(item => (
                                    <Draggable key={item.id} draggableId={item.id}>
                                        {
                                            (provided, snapshot) => (
                                                <div className="quesionList">
                                                    <div className="question"
                                                        ref={provided.innerRef}
                                                        style={getItemStyle(
                                                            provided.draggableStyle,
                                                            snapshot.isDragging
                                                        )}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        {item.content}
                                                    </div>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                
                {/*<div className="quesionList">
                    
                    <div className="row"> 
                        <div className="col-md-9">
                            <div className="question">Who is your current energy suppliers?</div>
                        </div>
                        <div className="col-md-3">
                            <div className="actionsBtn pull-right">
                                <button type="button" className="btn btn-info" data-original-title="" title=""><i className="material-icons">remove_red_eye</i></button>
                                <button type="button" id="validatebutton" data-toggle="modal" data-target="#editcreative" className="btn btn-success"><i className="material-icons">edit</i></button>
                                <button type="button" id="validatebutton" data-toggle="modal" data-target="" className="btn btn-danger"><i className="material-icons">delete</i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quesionList">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="question">How do you pay for your energy?</div>
                        </div>
                        <div className="col-md-3">
                            <div className="actionsBtn pull-right">
                                <button type="button" className="btn btn-info" data-original-title="" title=""><i className="material-icons">remove_red_eye</i></button>
                                <button type="button" id="validatebutton" data-toggle="modal" data-target="#editcreative" className="btn btn-success"><i className="material-icons">edit</i></button>
                                <button type="button" id="validatebutton" data-toggle="modal" data-target="" className="btn btn-danger"><i className="material-icons">delete</i></button>
                            </div>
                        </div>
                    </div>
                    <div className="questionSub">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="question">
                                    Sub question for How do you pay for your energy?
                            </div>
                            </div>
                            <div className="col-md-3">
                                <div className="actionsBtn pull-right">
                                    <button type="button" className="btn btn-info" data-original-title="" title=""><i className="material-icons">remove_red_eye</i></button>
                                    <button type="button" id="validatebutton" data-toggle="modal" data-target="#editcreative" className="btn btn-success"><i className="material-icons">edit</i></button>
                                    <button type="button" id="validatebutton" data-toggle="modal" data-target="" className="btn btn-danger"><i className="material-icons">delete</i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quesionList">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="question">Who is your current energy suppliers?</div>
                        </div>
                        <div className="col-md-3">
                            <div className="actionsBtn pull-right">
                                <button type="button" className="btn btn-info" data-original-title="" title=""><i className="material-icons">remove_red_eye</i></button>
                                <button type="button" id="validatebutton" data-toggle="modal" data-target="#editcreative" className="btn btn-success"><i className="material-icons">edit</i></button>
                                <button type="button" id="validatebutton" data-toggle="modal" data-target="" className="btn btn-danger"><i className="material-icons">delete</i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quesionList">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="question">Who is your current energy suppliers?</div>
                        </div>
                        <div className="col-md-3">
                            <div className="actionsBtn pull-right">
                                <button type="button" className="btn btn-info" data-original-title="" title=""><i className="material-icons">remove_red_eye</i></button>
                                <button type="button" id="validatebutton" data-toggle="modal" data-target="#editcreative" className="btn btn-success"><i className="material-icons">edit</i></button>
                                <button type="button" id="validatebutton" data-toggle="modal" data-target="" className="btn btn-danger"><i className="material-icons">delete</i></button>
                            </div>
                        </div>
                    </div>
                </div> */}           
                
            </section>
        )
    }

}