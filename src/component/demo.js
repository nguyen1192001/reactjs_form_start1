import React, { Component } from 'react'
class demo extends Component {
   
    render() {
        return (
            <div className="col-3">
                <div className="card mt-3" style={{ width: '18rem' }}>
                   <img src={this.props.anh} alt="" className="card-img" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.tieude}</h5>
                        <p className="card-text">{this.props.noidung}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default demo