import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Movies from './movie';
import LandingPage from './landingPage';
import CheckoutPage from './checkoutPage';
import Navbar from './navbar';
import NotFound from './notFound';
import MovieDetails from './movieDetails';
import Login from './login';
import SignUp from './signUp';
import Logout from './logout';
import MyProfile from './myprofile';

class Router extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                {this.props.user && <Navbar user={this.props.user}/>}
                <div className="">
                    <Switch>
                        <Route 
                            path="/movies" 
                            render={props => this.props.user ? <Movies {...props}/> : <Redirect to={{
                                pathname: '/login',
                                state: { from: props.location }
                                }}/>}
                        />
                        <Route 
                            path="/movie/:id" 
                            render={props => this.props.user ? <MovieDetails {...props}/> : <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                            }}/>}
                        />
                        <Route 
                            path="/movie/new" 
                            render={props => this.props.user ? <MovieDetails {...props}/> : <Redirect to={{
                                pathname: '/login',
                                state: { from: props.location }
                                }}/>}
                        />
                        <Route 
                            path="/checkout" 
                            render={props => this.props.user ? <CheckoutPage {...props}/> : <Redirect to={{
                                pathname: '/login',
                                state: { from: props.location }
                                }}/>}
                        />
                        <Route 
                            path="/my-profile" 
                            render={props => this.props.user ? <MyProfile {...props} user={this.props.user}/> : <Redirect to={{
                                pathname: '/login',
                                state: { from: props.location }
                                }}/>}
                        />
                        <Route 
                            path="/login" 
                            render={props => !(this.props.user) ? <Login {...props}/> : <Redirect to="/movies"/>}/>
                        <Route 
                            path="/signup"
                            render={props => !(this.props.user) ? <SignUp {...props}/> : <Redirect to="/movies"/>}/>
                        <Route 
                            path="/logout"
                            render={props => this.props.user ? <Logout {...props}/> : <Redirect to="/"/>}/>
                        <Route 
                            path="/"
                            exact
                            render={_ => <Redirect to="/welcome"/>}/>
                        <Route path="/welcome" component={LandingPage}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </div>
            </div>
        );
    }
}
 
export default Router;