import React from 'react';

class TodoItem extends React.Component {

    removeElement = () => {
        this.props.removeTodo(this.props.todo)
    }

    render() {
        return(
            <ul className="list-group">
                <li className="list-group-item">{this.props.todo}
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onClick={this.removeElement} className="btn btn-success" type="button">finished</button>
                    </div>
                </li>
            </ul>
        );
    }
}

export default TodoItem;