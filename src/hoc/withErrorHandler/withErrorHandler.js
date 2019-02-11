import React, { Component } from 'react';

import classes from './withErrorHandler.css';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount(){
      axios.interceptors.request.use(req => {
        this.setState({
          error: null
        });
        return req;
      });

      axios.interceptors.response.use(
        res => res, error => {
          this.setState({
            error: error
          })
        }
      );
    };

    errorConfirmedHandler = () => {
      this.setState({
        error: null
      })
    };

    render () {
      return (
        <Aux>
          <Modal 
            show={this.state.error}
            clicked={this.errorConfirmedHandler}
          >
            {this.state.error ? 
              <p 
                className={classes.Error}
              >{this.state.error.message}
              </p> 
            : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
 
}

export default withErrorHandler;