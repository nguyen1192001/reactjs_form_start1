import './../Component/App'
import Header from './Header'
import Search from './searchForm'
import TableData from './tableData'
import AddUser from './AddUser'
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import DataUser from './Data.json'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      hienthiform:true,
      data:[],
      searchText:'',
      editUserStat:false,
      userEditObject:{},
    }
  }

  componentWillMount(){
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData',JSON.stringify(DataUser))
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data:temp
      })
    }
  }
  deleteUser=(idUser)=>{
    var temData=this.state.data.filter(item=>item.id!== idUser)
    this.setState({
      data:temData
    })
    localStorage.setItem('userData',JSON.stringify(temData))
  }
  getUserEditInfoApp=(info)=>{
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name=info.name
        value.tel=info.tel
        value.permission=info.permission
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  }
  changeEditUserStat = ()=>{
    this.setState({
      editUserStat: !this.state.editUserStat
    })
  }
  editUser = (user)=>{
    console.log("ket noi tu ong noi den chau luon")
    this.setState({
      userEditObject:user
    })
    console.log(user)
  }
  getNewUserData = (name,tel,permission) =>{
    var item={}
    item.id=uuidv4()
    item.name=name
    item.tel=tel
    item.permission=permission
    var items=this.state.data
    items.push(item)
    this.setState({
      data:items
    })
    
  }

  getTextSearch = (dt)=>{
    this.setState({
      searchText:dt
    })
  }

  doiTrangThai = ()=>{
    this.setState({
      hienthiform:!this.state.hienthiform
    })
  }


  
  render(){
    var ketqua=[]
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item)
      }
    })
    return (
      <div>
        <Header/>
        <Search 
        getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)}
        userEditObject={this.state.userEditObject}
        changeEditUserStat = {()=>this.changeEditUserStat()}
        editUserStat={this.state.editUserStat}
        checkConectProps={(dl)=>this.getTextSearch(dl)}
        ketnoi = {()=>this.doiTrangThai()} hienthiform={this.state.hienthiform}/>
        <div className="container">
              <div className="row">
                 <TableData 
                 deleteUser={(idUser)=>this.deleteUser(idUser)}
                 changeEditUserStat = {()=>this.changeEditUserStat()} editFun = {(user)=> this.editUser(user)} dataUserProps = {ketqua}/>
                 <AddUser add={(name,tel,permission)=> this.getNewUserData(name,tel,permission)} hienthiform={this.state.hienthiform}/>
              </div>
          </div>
      </div>
    );
  }
}
export default App;
