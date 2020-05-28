import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {

    constructor(props){
        //super points to the Component implementation. it just refers to the parent class constructor
        //you cannot use this in a constructor until after you've called the parent constructor
        //this allows the parent to run first just in case you try to call the child first in later code. It can be confusing to remember in a large project to javascript enforces it here
        super(props);

        //defining state object. Just defining an items array/property
        this.state = {
            items: []
        };

        //read the input and store into the array
        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
        if (this._inputElement.value !== ""){
            //create a new variable to store an object that will contain entered text as well as a key value set by the current time
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
        
        //setting our states items property
        this.setState((prevState) => {
            return {
                //setting new array made up of existing data and the newly entered data
                items: prevState.items.concat(newItem)
            };
        });

        //clearing the value so that another can be added
        this._inputElement.value = "";
    }

    console.log(this.state.items);

    //by default, the page reloads and clears everything. We don't want that so we block this behavior. 
    e.preventDefault();
}


    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        {/* storing a reference to our input element in a property named _inputElement. */}
                        <input ref={ (a) => this._inputElement = a} 
                            placeholder="enter task">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        )
    }
}

export default TodoList;