import React from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Link, withRouter} from 'react-router-dom'
import {getCategories, getActiveCategoryId} from '../../selectors'

const Categories = ({categories, activeCategoryId}) => {
  const getActiveState = (id) => activeCategoryId === id

  const renderCategory = (category, index) => {
    const linkClass = classNames({
      'list-group-item': true,
      active: getActiveState(category.id),
    })

    return (
      <Link to={`/categories/${category.id}`} className={linkClass} key={index}>
        {category.name}
      </Link>
    )
  }

  const renderGetAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      active: activeCategoryId === undefined,
    })

    return (
      <Link to="/" className={linkClass}>
        All
      </Link>
    )
  }

  return (
    <div className="well">
      <h4>Brand</h4>
      <div className="list-group">
        {renderGetAllCategory()}
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  )
}

const matStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps),
})

export default compose(withRouter, connect(matStateToProps, null))(Categories)
