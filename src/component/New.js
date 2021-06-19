import React, { Component } from 'react'
import NewItem from './NewItem'
import dt from './data.json'

class New extends Component {
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


                <div className="row" style={{ height: '1000px' }}>

                    {
                        dt.map((value, key) => {
                            return (
                                <NewItem key={key}
                                    tinId={value.id}
                                    anh={value.anh}
                                    tieude={value.tieude}
                                    noidung={value.noidung}></NewItem>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default New