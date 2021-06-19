import { Component } from "react";

class TableDataRow extends Component {
    permissionShow = ()=>{
        if(this.props.permission === 1){return "Admin"}
        else if(this.props.permission === 2){return "Moderator"}
        else{return "Nomal"}
    }
    editClick=()=>{
        this.props.editFunClick()
        this.props.changeEditUserStat()
    }
    deleteButtonClick=(idUser)=>{
        this.props.deleteButtonClick(idUser)
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.stt}</th>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>
                    {this.permissionShow()}
                </td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"  onClick={()=>this.editClick()}>Sửa</div>
                        <div onClick={(isUser)=>this.deleteButtonClick(this.props.id)} className="btn btn-danger sua">Xóa</div>
                    </div>
                </td>
            </tr>
        )
    }
}
export default TableDataRow