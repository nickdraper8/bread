import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import IntroPage from "./intro-page";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);
