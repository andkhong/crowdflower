import React from 'react';
import _ from 'underscore';
import { connect } from "react-redux";
import { saveTasks } from './../actions/appActions';

class Save extends React.Component {
    state = {
        successfulSave: false
    }
    setTask = () => {
        const { postURL, tasks, saveTasks, hasErrored } = this.props;
        if(!hasErrored) {
            saveTasks(postURL, tasks);
            this.setState({ successfulSave: true });
        }
    }
    renderSuccess = () => {
        setTimeout(() => this.setState({ successfulSave: false }), 2000);
        return "Tasks saved Successfully";
    }
    render(){
        return (
            <div className='save'>
                <button className='saveBtn' onClick={_.throttle(this.setTask.bind(this), 3000)}> Save Task </button>
                <div className='notification'>
                    {this.props.saveStatus && "Unable to save, try again?"}
                    {this.props.hasErrored && "Unabled to load data, can not save"}
                    {this.state.successfulSave && this.renderSuccess() }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { postURL, tasks, saveStatus, hasErrored } = state.tasks;
    return {
        tasks,
        postURL,        
        saveStatus,
        hasErrored,
    }
}

function mapDispatchToProps(dispatch){
    return {
        saveTasks: (url, task) => dispatch(saveTasks(url, task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Save);
