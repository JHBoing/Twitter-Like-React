import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class ComAutenticacao extends Component {

    componentWillMount() {
      if (!this.props.autenticado) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.autenticado) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { autenticado: state.auth.autenticado };
  }

  return connect(mapStateToProps)(ComAutenticacao);
}