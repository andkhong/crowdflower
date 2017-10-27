import React from 'react';
import { connect } from "react-redux";
import { deleteTask } from './../actions/appActions';

function Delete({ deleteTask, id }){
    return (
        <div className="delete">
            <div className="trash">
                <i 
                    className="fa fa-trash-o" 
                    aria-hidden="true"
                    onClick={deleteTask.bind(this,id)}
                />
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        deleteTask: id => dispatch(deleteTask(id))
    };
}

export default connect(null, mapDispatchToProps)(Delete);
