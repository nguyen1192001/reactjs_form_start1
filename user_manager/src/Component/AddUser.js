import React, { Component } from 'react'
class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }
    isChange = (even) => {
        const name = even.target.name
        const value = even.target.value
        this.setState({
            [name]: value
        })
       
    }


    kiemTraTrangThai = () => {
        if (this.props.hienthiform === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card" style={{ width: '18rem', padding: '10px' }}>
                            <div className="card-header">
                                Thêm mới vào hệ thống
                            </div>
                            <ul className="list-group list-group-flush">
                                <input type="text" onChange={(even) => this.isChange(even)} name="name" className="form-control" placeholder="Tên User" />
                                <input type="text" onChange={(even) => this.isChange(even)} name="tel" className="form-control" placeholder="Điện thoại" />
                                <select onChange={(even) => this.isChange(even)} name="permission" className="custom-select">
                                    <option selected>Chọn Quyền Mặc Định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Nomal</option>
                                </select>
                            </ul>
                            <input type="reset" className="btn btn-block btn-primary" style={{ marginTop: '10px' }} onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm Mới" />
                        </div>
                    </form>
                </div>

            )
        }
    }

    render() {
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
        )
    }
}
export default AddUser