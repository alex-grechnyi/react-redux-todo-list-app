import {connect} from "react-redux";
import AppHeader from "../components/appHeader/AppHeader";
import PropTypes from "prop-types";

AppHeader.propTypes = {tasks: PropTypes.array.isRequired};

const mapStateToProps = (state) => {return {tasks: state.tasksReducer.tasks}};
export default connect(mapStateToProps, null)(AppHeader);
