import React, { Component } from "react";

class TodoItems extends Component {

    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
      }

    createTasks(item) {
        //associating a click event with an event handler called delete.
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

render() {
    //taking a list of todo items (passed in as entries) and turing them into jsx/html-ish elements. This is done by calling map on our items and relying on the createTasks function
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
        <ul className="theList">
            {listItems}
        </ul>
    );
    }
};

export default TodoItems;