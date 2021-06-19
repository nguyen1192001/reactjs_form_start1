import React, { Component } from 'react'
class EditUser extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission
        }
    }
    isChange=(even)=>{
        const name=even.target.name
        const value=even.target.value
       this.setState({
           [name]:value
       })
    }
    saveButton=()=>{
        var info={}
        info.id=this.state.id
        info.name=this.state.name
        info.tel=this.state.tel
        info.permission=this.state.permission
        this.props.getUserEditInfo(info)
        this.props.changeEditUserStat()
    }
    render() {
        return (
            <div className="col-12">
                <form method="post">
                    <div className="card text-white  bg-warning" style={{ padding: '10px' }}>
                        <div className="card-header text-center">
                            Thêm mới vào hệ thống
                        </div>
                        <ul className="list-group list-group-flush">
                            <input defaultValue={this.props.userEditObject.name} type="text" onChange={(even) => this.isChange(even)} name="name" className="form-control" placeholder="Tên User" />
                            <input defaultValue={this.props.userEditObject.tel}  type="text" onChange={(even) => this.isChange(even)} name="tel" className="form-control" placeholder="Điện thoại" />
                            <select defaultValue={this.props.userEditObject.permission}  onChange={(even) => this.isChange(even)} name="permission" className="custom-select">
                                <option selected>Chọn Quyền Mặc Định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Nomal</option>
                            </select>
                        </ul>
                        <input type="button" onClick={()=>this.saveButton()} className="btn btn-block btn-danger" style={{ marginTop: '10px' }} value="Lưu" />
                    </div>
                </form>
            </div>
        )
    }
}
export default EditUser