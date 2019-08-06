import React, { Component } from "react";
import { MdClose } from "react-icons/md"
import { Container, Link } from '@material-ui/core';
import firebaseApp from '../index'
export default class signup extends React.Component {
    constructor(props) {
        super(props);
    };

    firebaseSignup() {

        const email = document.getElementById('email').value
        const pass = document.getElementById('password').value
        const repeatPass = document.getElementById('password_confirmation').value

        firebaseApp.auth().createUserWithEmailAndPassword(email, pass).then(user => {
            alert.log(`Firebase User: ${JSON.stringify(user)}`)
            firebaseApp.auth().currentUser.sendEmailVerification()
        }).catch(error => {
            alert(error.message)
        })
    }

    render() {
        return (
            <div class="Modal  register" id="loginModal">


                {/* <div class="modal-dialog login animated"> */}
                    <div class="modal-content login animated">
                        <div class="modal-header">


                            <MdClose onClick={this.props.hideSignUp} class="close" data-dismiss="modal" aria-hidden="true" />
                            <h4 class="modal-title" >Register with</h4>

                        </div>
                        <div class="modal-body">
                            <div class="box">
                                <div class="content">
                                    <div class="social">
                                        <a class="circle github" href="#">
                                            <i class="fa fa-github fa-fw"></i>
                                        </a>
                                        <a id="google_login" class="circle google" href="#">
                                            <i class="fa fa-google-plus fa-fw"></i>
                                        </a>
                                        <a id="facebook_login" class="circle facebook" href="#">
                                            <i class="fa fa-facebook fa-fw"></i>
                                        </a>
                                    </div>
                                    <div class="division">
                                        <div class="line l"></div>
                                        <span>or</span>
                                        <div class="line r"></div>
                                    </div>
                                    {/* <div class="error"></div> */}
                                    <div class="form registerBox">
                                        <form method="" data-remote="true" action="" accept-charset="UTF-8" >
                                            <input id="email" class="form-control" type="text" placeholder="Email" name="email" />
                                            <input id="password" class="form-control" type="password" placeholder="Password" name="password" />
                                            <input id="password_confirmation" class="form-control" type="password" placeholder="Repeat Password" name="password_confirmation" />
                                            <input class="btn btn-default btn-register" type="button" value="Create account" name="commit" onClick={this.firebaseSignup} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer forgot register-footer">

                            <div class="forgot register-footer" >
                                <span>Already have an account?</span>
                                <Link  color="primary"> Login</Link>
                            </div>
                        </div>



                    </div>
                {/* </div> */}


            </div>
        )
    };
}
