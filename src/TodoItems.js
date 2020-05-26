import React, { Component } from "react";

class TodoItems extends Component {
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
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