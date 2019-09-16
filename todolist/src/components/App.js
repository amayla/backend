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
          <td><input onClick= {() => this.onBtnDeleteHandler(val.id)} type="button" className='btn btn-outline-danger' value='Delete'/></td>
          {/* anonym function gunanya berhubungan dengan onBtnDeleteHandler yaa */}
          {/* properties didapat dari tabel */}
        </tr>
      )
    })
    return jsx
  }

  onBtnDeleteHandler = (id) => {
    Axios.delete(urlApi + 'deletetodo/'+ id)
    .then(res => {
      this.getDataApi()
      console.log(res)
    })
    .catch (err => {
      console.log(err)
      alert('Cannot delete action')
    })
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTodo()}
          </tbody>
          <tfoot>
            <tr>
              <td><input type='text' onChange={e => this.setState({inputToDo: e.target.value})} className='form-control'/></td>
              <td><input type='button' value='add to do' onClick={this.onBtnAddHandler} className='btn btn-primary'/></td>
              <td></td>
            </tr>
          </tfoot>
        </table>

      </div>
    )
  }

}


export default App;
