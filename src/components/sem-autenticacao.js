import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class SemAutenticacao extends Component {
    componentWillMount() {
      if (this.props.autenticado) {
        this.props.history.push('/secret');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.autenticado) {
        this.props.history.push('/secret');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { autenticado: state.auth.autenticado };
  }

  return connect(mapStateToProps)(SemAutenticacao);
}