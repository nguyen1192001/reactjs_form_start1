import React, { Component } from 'react'
import dt from './data.json'
import Demo from './demo'
class NewDetail extends Component {
    render() {
      

        return (
            <div>
                <header className="masthead text-center text-white stylemorenew">
                    <div className="masthead-content">
                        <div className="container px-5 ">
                            <h1 className="masthead-heading mb-0">Tin Tức</h1>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle" />
                    <div className="bg-circle-2 bg-circle" />
                    <div className="bg-circle-3 bg-circle" />
                    <div className="bg-circle-4 bg-circle" />
                </header>
                {
                    dt.map((value, key) => {
                        if (value.id == this.props.match.params.id) {
                            return (
                                <div>

                                    <div className="container" style={{ height: '1300px' }}>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <div className="card" style={{ width: '100%' }}>
                                                    <img src={value.anh} alt="" className="card-img" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{value.tieude}</h5>
                                                        <p className="card-text">{value.noidung}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <div>
                    <div><hr /></div>
                    <h3 style={{ textAlign: 'center' }}>tin liên quan</h3>
                    <div className="container">
                        <div className="row" style={{ height: '1000px' }}>
                            {
                                dt.map((value,key)=>{
                                    if(value.id != this.props.match.params.id ){
                                      if(key<=3){
                                        return(
                                            <Demo key={key}
                                            anh={value.anh}
                                            tieude={value.tieude}
                                            noidung={value.noidung}></Demo>
                                        )
                                      }
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewDetail