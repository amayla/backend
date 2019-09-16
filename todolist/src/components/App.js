import React from 'react';
import Axios from 'axios';

const urlApi = `http://localhost:8080/`

class App extends React.Component{
  state = {
    data : [

    ]
  }
  componentDidMount(){
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
        </table>

      </div>
    )
  }

}


export default App;
