import React, { Component } from 'react'
import Axios from 'axios'

const URL_API = 'http://localhost:1010/'

class Login extends Component {
    state= {
        inputUsername : '',
        inputPassword : '',
        username : '',
        errMsg: ''
    }

    onBtnLogin = () => {
        Axios.get(URL_API + 'auth/login',{
            params: {
                username: this.state.inputUsername,
                password: this.state.inputPassword
            }
        })
        .then(res => {
            this.setState({username : res.data[0].username})
            console.log(this.state.username)
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render() {
        console.log('render')
        if(this.state.username){
            return (
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
                            <input type='button' value='login' className='btn btn-primary btn-block mt-2' onClick={this.onBtnLogin}/>
                        </div>
                    
                    </div>   
                    <div className='row'>
                        <h1>Hello, {this.state.username}</h1>
                    </div>   
                </div>
            )
        } else {
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
                        <input type='button' value='login' className='btn btn-primary btn-block mt-2' onClick={this.onBtnLogin}/>
                    </div>
                    </div>  
                      
                </div>
                
            )
        }
        
    }
}

export default Login