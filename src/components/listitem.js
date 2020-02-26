import React, { Component } from 'react'
import PropTypes from 'prop-types';
 
export class listitem extends Component {
    getStyle = () =>{
        return 
    }
    render() {
        return (
            <div >
                <h3>{this.props.items.title}</h3>
            </div>
        )
    }
}


listitem.propTypes ={
    items: PropTypes.object.isRequired
}

export default listitem
