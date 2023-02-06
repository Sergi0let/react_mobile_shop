import React from 'react'
// import routes from '../../routes'

const Layout = ({children}) => {
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            Sidebar <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            repellendus esse cupiditate sit iste voluptatem quaerat libero dolor
            sint rerum, ea perspiciatis nemo similique fugit nihil magnam,
            quidem illo numquam?
          </div>
          <div className="col-md-9">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
