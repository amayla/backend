import React, { Component } from 'react'
import axios from 'axios'

const URL_API = 'http://localhost:1010/'

class Register extends Component{
    state = {
        inputUsername: '',
        inputPassword: '',
    }

    onBtnReg = () => {
        

        axios.get(
            URL_API +'auth/getuser', 
            {
                params:{
                    username: this.state.inputUsername
                    
                }
                
            }
        ).then((res) => {

            if(res.data.length>0){
                alert('username is already being used')
            }  else{

                axios.post(URL_API + 'auth/postuser', {
                 
                        username:this.state.inputUsername,
                        password:this.state.inputPassword
                    
                })
                .then(res => {
                        console.log(res.data)
                    })
                    .catch(err =>{
                        console.log(err)
                })
            }
            
        })
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <input type='text' onChange={(e) => this.setState({inputUsername: e.target.value})}placeholder= 'username' className='form-control mt-2'/>
                    </div>
                    <div className='col-6'>
                        <input type='password' onChange={(e) => this.setState({inputPassword: e.target.value})} placeholder= 'password' className='form-control mt-2'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='offset-4 col-4'>
                        <input type='button' value='Register' className='btn btn-primary btn-block mt-2' onClick={this.onBtnReg}/>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Register
