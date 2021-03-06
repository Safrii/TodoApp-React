import React from 'react';

import InputBar from './InputBar';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    state = { todos: ['Hit 5 km run','Resolve bugs in your side project','Got to gym,complete push trening'] }

    onInputSubmit = (todo) => {
        if(todo === '' || this.state.todos.includes(todo)){
            alert("todo can't be an empty string or todo list can't contains duplicate todos");
            return;
        }
        this.setState({todos: [...this.state.todos,todo]});
    }

    removeTodo = (todo) => {
      const elementToRemove = todo;
      const tempArray = this.state.todos;
      const newArray = tempArray.filter(item => item !== elementToRemove);
      this.setState({todos: newArray});
    }

    renderResponse = () => {
        return this.state.todos.map((todo,index) => {
            return(
                <TodoItem key={index} todo={todo} removeTodo={this.removeTodo} />
            ); 
        });
    }
    
    render() {
        return(
            <div>
                <div>
                    {this.renderResponse()}
                </div>
                <InputBar onSubmit={this.onInputSubmit} />
            </div>
        );
    }
}

export default TodoList;