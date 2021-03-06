import React from 'react';

class InputBar extends React.Component {

    state = {todo: ''}

    onInputChange = (event) => {
        this.setState({todo: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.todo)
    }

    render() {
        return(
            <div>
                <br/>
                <hr/>
                <form onSubmit={this.onFormSubmit}>
                    <label className="form-label">Enter Todo:</label>
                    <input className="form-control" type="text" placeholder="enter new todo" onChange={this.onInputChange} value={this.state.todo} />
                    <div class="d-grid gap-2" style={{paddingTop:'5px'}}>
                        <button class="btn btn-primary" type="submit">Add Todo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputBar;