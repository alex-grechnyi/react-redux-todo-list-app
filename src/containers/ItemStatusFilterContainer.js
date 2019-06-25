import {connect} from "react-redux";
import {filterAll, filterCompleted, filterUnCompleted,} from "../store/actions/filter";
import ItemStatusFilter from "../components/itemStatusFilter/ItemStatusFilter";
import PropTypes from "prop-types";

ItemStatusFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterAll: PropTypes.func.isRequired,
    filterUnCompleted: PropTypes.func.isRequired,
    filterCompleted: PropTypes.func.isRequired
};

export default connect ((state) => {return {filter: state.filterReducer.filter}},
    {filterAll, filterUnCompleted, filterCompleted})(ItemStatusFilter);
