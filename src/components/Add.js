import React from 'react';
import { connect } from "react-redux";
import { addTask } from './../actions/appActions';

class Add extends React.Component {
    state = { 
        input: '',
        show: false
    }
    handleInput = e => {
        this.setState({ input: e.target.value });
    }
    submit = () => {
        if (this.state.input) {
            this.props.addTask(this.state.input);
            this.setState({ input: '' });
        }
    }
    render() {
        return (
            <div className="add">
                <button className="addBtn" onClick={this.submit}> Add Task </button>
                <input
                    placeholder="Add Task"
                    onChange={this.handleInput}
                    value={this.state.input}
                />
            </div>
        )

    }
}

function mapDispatchToProps(dispatch){
    return {
        addTask: str => dispatch(addTask(str))
    };
}

export default connect(null, mapDispatchToProps)(Add);
