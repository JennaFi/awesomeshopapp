import React from 'react'

import Loader from './Loader'
import { filterProducts } from '../actions/productActions'
import { connect } from "react-redux"

const Filter = (filteredProducts) => {
    return !filteredProducts ? (
        <Loader />
    ) : (
        <div className="filter-size">
          Filter{" "}
          <select
            value={this.props.size}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value="">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      
    )
}

export default connect(
  (state) => ({
    size: state.products.size,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts
   
  }
)(Filter)
