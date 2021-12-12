import React, { Component } from 'react';


class Image extends Component {


    render() {
        return (
            <div>
             <img src={this.props.src} alt='pokemon' />
            </div>
        );
    }
}

export default Image;