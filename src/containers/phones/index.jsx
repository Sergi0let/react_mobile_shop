import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {
  fetchPhones,
  fetchCategories,
  loadMorePhones,
  addPhoneToBasket,
} from '../../action'
import {getPhonesSelector} from '../../selectors'
import Layout from '../layout'

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones()
    this.props.fetchCategories()
  }
  renderPhone(phone, index) {
    const shortDescription = `${phone.description.slice(0, 60)}...`
    const {addPhoneToBasket} = this.props

    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
        <div className="thumbnail">
          <img className="img-thumbnail" src={phone.image} alt={phone.name} />
        </div>
        <div className="caption">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </h4>
          <p>{shortDescription}</p>
          <p className="itemButton">
            <button
              className="btn btn-primary"
              onClick={() => addPhoneToBasket(phone.id)}
            >
              Buy Now
            </button>
            <Link to={`/phones/${phone.id}`} className="btn btn-default">
              More Info
            </Link>
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {phones, loadMorePhones} = this.props
    return (
      <Layout>
        <div className="books row">
          {phones &&
            phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="pull-right btn btn-primary"
              onClick={loadMorePhones}
            >
              Load more
            </button>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  phones: getPhonesSelector(state, ownProps),
})

const mapDispatchToProps = {
  fetchPhones,
  fetchCategories,
  loadMorePhones,
  addPhoneToBasket,
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones)
