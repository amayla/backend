import React from 'react';
import Axios from 'axios';

const urlApi = `http://localhost:8080/`

class App extends React.Component{
  state = {
    data : [],
    inputToDo: '',
    selectInput:''


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
          <td>{val.isCompleted ? 'V': 'X'}</td>
          <td>{val.isCompleted ? '': <input onClick= {() => this.onBtnCompletedAction(val.id)} 
          type="button" className='btn btn-outline-primary' value='Completed'/>} </td>
          <td><input onClick= {() => this.onBtnDeleteHandler(val.id)} 
          type="button" className='btn btn-outline-danger' value='Delete'/></td>
          
          
          {/* anonym function gunanya berhubungan dengan onBtnDeleteHandler yaa */}
          {/* properties didapat dari tabel */}
        </tr>
      )
    })
    return jsx
  }

  onBtnCompletedAction = (id) => {
    Axios.put(urlApi+'completedaction/', 
    {
      id: id
    } )
    .then(res => {
        this.getDataApi()
      })
      .catch(err => {
        console.log(err)
        alert('Error')
      })
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

  onBtnSearchHandler = () => {
    if(this.state.selectInput < 2){
      Axios.get(urlApi + 'getlistcompleted', {
        params: {
          parameterku: this.state.selectInput
        }
      })
      .then(res => {
        this.setState({data: res.data})
      })
      .catch(err => {
        console.log(err)
        alert('Error')
      })
    }else{
      this.getDataApi()
    }
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
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Action</th>
              <th>Status</th>
              <th>Completed</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTodo()}
          </tbody>
          <tfoot>
            <tr>
              <td><input onChange={(e) => this.setState({inputToDo: e.target.value})} type="text" className="form-control"/></td>
              <td><input type="button" onClick={this.onBtnAddHandler} value="Add Todo" className="btn btn-primary"/></td>
              <td>
                <select onChange={(a) => this.setState({selectInput: a.target.value})} className="form-control">
                  <option value="2">All</option>
                  <option value="1">Done</option>
                  <option value="0">Pending</option>
                </select>
              </td>
              <td><input type="button" value="Search" onClick={this.onBtnSearchHandler} className="btn btn-success"/></td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }

}


export default App;
