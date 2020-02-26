import React, { Component } from 'react';
import ListItem from './listitem'
import PropTypes from 'prop-types';

class ToDoList extends Component{
    
    render(){
        return this.props.list.map((e) =>(
          <ListItem key = {e.id} items = {e}/>
        ));
  }
}

ToDoList.propTypes = {
  list: PropTypes.array.isRequired
}

export default ToDoList;
