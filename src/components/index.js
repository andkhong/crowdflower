import React from 'react';
import { connect } from "react-redux";
import './index.css';

import Add from './Add';
import Save from './Save';
import Tasks from './Tasks';
import Loading from './Loading';

import {getTasks} from './../actions/appActions';

class App extends React.Component {
  componentDidMount() {
    this.props.getTasks(this.props.getURL);
  }
  render(){
    const { tasks, isLoading, hasErrored } = this.props;
    return [      
      <div className='btns'>
        <Add key={0} />
        <Save key={1} />
      </div>,
      <div className='taskContainer' key={2}> 
        {isLoading ? <Loading hasErrored={hasErrored} /> : <Tasks tasks={tasks} />} 
      </div>
    ]
  }
}

function mapStateToProps(state) {
  const { tasks, isLoading, hasErrored, getURL } = state.tasks;
  return {
    tasks,    
    getURL,
    isLoading,
    hasErrored
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: url => dispatch(getTasks(url))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
