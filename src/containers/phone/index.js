import React, {Component} from 'react'
// import Layout from '../layout'
import {connect} from 'react-redux'
import {fetchPhoneById} from '../../action'
import {getPhonesById} from '../../selectors'

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id)
  }

  renderFields() {
    const {phone} = this.props

    const prepareDataPage = (data) => ({
      cpu: data.cpu,
      camera: data.camera,
      size: data.size,
      weight: data.weight,
      display: data.display,
      battery: data.battery,
      memory: data.memory,
    })
    const columnFields = Object.entries(prepareDataPage(phone))

    return columnFields.map(([key, value]) => (
      <div className="column" key={key}>
        <div className="ab-details-title">{key}</div>
        <div className="ab-details-info">{value}</div>
      </div>
    ))
  }

  renderContent() {
    const {phone} = this.props
    return (
      <div className="thumbnail">
        <div className="row">
          <div className="col-md-6">
            <img
              className="image-thumbnail"
              src={phone.image}
              alt={phone.name}
            />
          </div>
          <div className="col-md-6">{this.renderFields()}</div>
        </div>
        <div className="caption-full">
          <h4 className="pull-right">${phone.price}</h4>
          <h4>{phone.name}</h4>
          <p>{phone.description}</p>
        </div>
      </div>
    )
  }
  renderSidebar() {
    return <div>Sidebar</div>
  }

  render() {
    const {phone} = this.props
    return (
      <div className="view-container">
        <div className="container">
          <div className="row">
            <div className="col-md-9">{phone && this.renderContent()}</div>
            <div className="col-md-3">{phone && this.renderSidebar()}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    phone: getPhonesById(state, state.phonePage.id),
  }
}

const mapDispatchToProps = {
  fetchPhoneById,
}

export default connect(mapStateToProps, mapDispatchToProps)(Phone)
