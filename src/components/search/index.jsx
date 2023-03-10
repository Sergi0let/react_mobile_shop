import React, {Component} from 'react'
import {connect} from 'react-redux'

import {searchPhone} from '../../action'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.searchPhone(this.state.value)
  }

  render() {
    return (
      <div className="well blosd">
        <h3 className="lead">Quick shop </h3>
        <div className="input-group">
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              onChange={this.handleChange}
            />
          </form>
          <span className="input-group-btn">
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  searchPhone,
}

export default connect(null, mapDispatchToProps)(Search)
