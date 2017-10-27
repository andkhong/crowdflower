import React from 'react';
import Delete from './Delete';
import { connect } from 'react-redux';

function Tasks({tasks}){
    return tasks.map((item, index) => 
        <div className='task' key={index}>
            <h3> {item} </h3>
            <Delete id={index} />
        </div>
    );
}

function mapStateToProps(state){
    return {
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps)(Tasks);
