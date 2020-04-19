import React from "react";
import {connect} from "react-redux";
import {Filter} from "../components/Filter";
import {addSizeFilter, clearFilterSizes, deleteSizeFilter, getFilterSizes, SIZES} from "../modules/products";

const mapStateToProps = state => ({
    filterSizes: getFilterSizes(state),
    allSizes: SIZES
})

const mapDispatchToProps = {
    addSizeFilter,
    deleteSizeFilter,
    clearFilterSizes
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filter)
