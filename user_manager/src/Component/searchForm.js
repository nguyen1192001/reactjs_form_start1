import React, { Component } from 'react'
import EditUser from './EditUser'
class searchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tempValue: '',
            userObj:{}
        }
    }
    getUserEditInfo = (info)=>{
        this.setState({
            userObj:info
        })
        this.props.getUserEditInfoApp(info)
    }
    isShowEditForm = ()=>{
        if(this.props.editUserStat === true){
            return <EditUser
            getUserEditInfo={(info)=>this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject}
            changeEditUserStat={()=>this.props.changeEditUserStat()}/>
        }
    }
    isChange = (even) => {
        console.log(even.target.value)
        this.setState({
            tempValue: even.target.value
        })
        this.props.checkConectProps(this.state.tempValue)
    }
    hienThiNut = () => {
        if (this.props.hienthiform === true) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketnoi()} >Đóng lại</div>
            )
        } else {
            return (<div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketnoi()}  >Thêm mới</div>)
        }
    }
    render() {
        return (
            <div className="container">
               {this.isShowEditForm()}
                <div className="row">
                    <div className="col-12">
                        <div className="form-group mt-3">
                            <div className="btn-group">
                                <input type="text" className="form-control" onChange={(even) => { this.isChange(even) }} placeholder="tìm kiếm" />
                                <div className="btn btn-info" onClick={(dl) => this.props.checkConectProps(this.state.tempValue)}>Tìm</div>
                            </div>
                        </div>
                        {this.hienThiNut()}
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}
export default searchForm