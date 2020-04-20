import React from "react";
import {ORDER_BY, updateOrder} from "../modules/products";
import {connect} from "react-redux";
import {SortingSelect} from "../components/SortingSelect";

const mapStateToProps = state => ({
    ORDER_BY: ORDER_BY
})

const mapDispatchToProps = {
   updateOrder
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SortingSelect)
