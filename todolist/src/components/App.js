import React from 'react';
import Axios from 'axios';

const urlApi = `http://localhost:8080/`

class App extends React.Component{
  state = {
    data : [],
    inputToDo: ''


  }
  componentDidMount(){
    this.getDataApi()
  }


  getDataApi = () => {
    Axios.get(urlApi + 'getList')
    .then(res => {
      this.setState({data: res.data})
    })
    .catch(err =>{
      console.log(err)
      alert('System Error')
    })

  }

  renderTodo = () => {
    let jsx = this.state.data.map((val,idx) => {//state didapat dari data tabel sql bentuknya array of object
      return(
        <tr>
          <td>{idx + 1}</td>
          <td>{val.action}</td> 
          {/* properties didapat dari tabel */}
        </tr>
      )
    })
    return jsx
  }

  onBtnAddHandler = () => {
    let newAction = {
      action: this.state.inputToDo
    }
    Axios.post(urlApi + 'addToDo', newAction)
    .then(res => {
      this.getDataApi()
      console.log(res)
    })
    .catch (err => {
      console.log(err)
      alert('Cannot add action')
    })
  }

  render(){
    return(
      <div className= 'container'>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTodo()}
          </tbody>
          <tfoot>
            <tr>
              <td><input type='text' onChange={e => this.setState({inputToDo: e.target.value})} className='form-control'/></td>
              <td><input type='text' value='add to do' className='btn btn-primary'/></td>
              <td></td>
            </tr>
          </tfoot>
        </table>

      </div>
    )
  }

}


export default App;
