import {connect} from "react-redux";
import {updateSearchValue} from "../store/actions/tasks";
import SearchPanel from "../components/searchPanel/SearchPanel";
import PropTypes from "prop-types";

SearchPanel.propTypes = {
    searchValue: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    updateSearchValue: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {return {searchValue: state.tasksReducer.searchValue, tasks: state.tasksReducer.tasks}};
export default connect(mapStateToProps, {updateSearchValue})(SearchPanel);
