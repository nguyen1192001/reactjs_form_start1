import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'
class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            isRedirect:false,
            fNgay:"thu6"
        }
    }
    isChange = (even) =>{
        const ten = even.target.name
        const giatri = even.target.value
        this.setState({
            [ten]:giatri
        })
    }
    isChangeFile = (even)=>{
        const tenanh = even.target.files[0].name
        this.setState({
            Fanh : tenanh
        })
    }
    submitForm = (even) =>{
        even.preventDefault()
        this.setState({
            isRedirect:true
        })
    }

    getGiaTri = () =>{
        var noiDung = ""
        noiDung += "ten nhan duoc la: " + this.state.fName
        noiDung += "mail nhan duoc la: " + this.state.fMail
        noiDung += "phone nhan duoc la: " + this.state.FPhone
        noiDung += "message nhan duoc la: " + this.state.FMessage
        noiDung += "img nhan duoc la: " + this.state.Fanh
        return noiDung
    }
    render() {
        if(this.state.isRedirect === true){
            console.log(this.getGiaTri())
            return <Redirect to="/"/>
        } 
        return (
            <div>
                <header className="masthead text-center text-white stylemorenew">
                    <div className="masthead-content">
                        <div className="container px-5 ">
                            <h1 className="masthead-heading mb-0">liên hệ</h1>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle" />
                    <div className="bg-circle-2 bg-circle" />
                    <div className="bg-circle-3 bg-circle" />
                    <div className="bg-circle-4 bg-circle" />
                </header>
                {/* container */}
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <h5 style={{ textAlign: 'center' }}>liên hệ với chúng tôi</h5>
                        <div className="col-lg-8 col-xl-7">
                            <form>
                                <div className="form-floating mt-3">
                                    <input onChange={(even)=>this.isChange(even)} name="fName" className="form-control" id="inputName" type="text" placeholder="Enter your name..." />
                                    <label htmlFor="inputName">Name</label>
                                </div>
                                <div className="form-floating mt-3">
                                    <input onChange={(even)=>this.isChange(even)} name="FMail" className="form-control" id="inputEmail" type="email" placeholder="Enter your email..." />
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="form-floating mt-3">
                                    <input onChange={(even)=>this.isChange(even)} name="FPhone" className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number..." />
                                    <label htmlFor="inputPhone">Phone Number</label>
                                </div>
                                <div className="form-floating mt-3">
                                    <textarea onChange={(even)=>this.isChange(even)} name="FMessage" className="form-control" id="inputMessage" placeholder="Enter your message here..." style={{ height: '12rem' }} defaultValue={""} />
                                    <label htmlFor="inputMessage">Message</label>
                                </div>
                                <div className="form-floating mt-3">
                                   <label>chon ngay</label>
                                    <input type="file" name="Fanh" onChange = {(even) => this.isChangeFile(even)} />
                    
                                </div>
                                <br />
                                <button className="btn btn-primary btn-xl" type="submit" onClick = {(even)=> this.submitForm(even)}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact