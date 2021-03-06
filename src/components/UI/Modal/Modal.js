import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps){
    return nextProps.show !== this.props.show ||
    nextProps.children !== this.props.children;
  }

  render() {
    return (
      <Aux>
        <Backdrop
          clicked={this.props.modalClosed}
          show={this.props.show}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ?
            'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1': '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  }

};

export default Modal;