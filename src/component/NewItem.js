import React, { Component } from 'react'
class NewItem extends Component {
    constructor(props) {
        super(props)
    }

    chuyenDoiURL = (str)=>{
         // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
   
    render() {
        return (
            <div className="col-3">
                <div className="card mt-3" style={{ width: '18rem' }}>
                    <a href={"/tin-tuc/" + this.chuyenDoiURL(this.props.tieude) + "." + this.props.tinId + ".html"}><img src={this.props.anh} alt="" className="card-img" /></a>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.tieude}</h5>
                        <p className="card-text">{this.props.noidung}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewItem