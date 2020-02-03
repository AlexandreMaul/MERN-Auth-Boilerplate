import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { refreshUser } from "../../actions/authActions";

class PrivateRoute extends Component {
  componentDidMount() {
    const { isAuthenticated, user } = this.props.auth
    if(isAuthenticated){
      this.props.refreshUser({ id: user.id })
    }
  }

  render() {
    const { auth, rest, component: Component } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          auth.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    )
  }
}

PrivateRoute.propTypes = {
  refreshUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { refreshUser })(PrivateRoute);
