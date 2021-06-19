import React, { Component } from 'react'
import TableDataRow from './tableDataRow'
class tableData extends Component {
    deleteButtonClick(idUser){
        this.props.deleteUser(idUser)
    }
    mappingUserData = ()=>this.props.dataUserProps.map((value,key)=>(
        <TableDataRow 
        deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
         editFunClick={(user)=>this.props.editFun(value)}
          changeEditUserStat = {()=>this.props.changeEditUserStat()}
           stt={key} 
           name={value.name}
            tel={value.tel} permission={value.permission}
            id={value.id}
            />
    ))
    render() {
        return (
            <div className="col">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Điện Thoại</th>
                            <th scope="col">Quyền</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                     {this.mappingUserData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default tableData