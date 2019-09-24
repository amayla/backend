import React,{Component} from 'react'
import  {Switch,Route,withRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Login'
import Register from './Register'


class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route component={Login} path="/login"/>
                    <Route component={Register} path="/register"/>
                </Switch>
            </div>
        )
    }
}

export default withRouter (App)