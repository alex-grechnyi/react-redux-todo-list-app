import {connect} from "react-redux";
import PropTypes from 'prop-types';
import ItemAddForm from "../components/itemAddForm/ItemAddForm";
import {sendTask, updateNewTitleBody,} from "../store/actions/tasks";

ItemAddForm.propTypes = {
    newTitleBody: PropTypes.string.isRequired,
    sendTask: PropTypes.func.isRequired,
    updateNewTitleBody: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {return {newTitleBody: state.tasksReducer.newTitleBody}};

export default connect (mapStateToProps, {sendTask, updateNewTitleBody})(ItemAddForm);
