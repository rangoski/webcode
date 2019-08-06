import firebaseApp from '../index'
import React, { Component } from "react";
import {MdClose} from "react-icons/md"
import { Container, Link } from '@material-ui/core';

export default class login extends React.Component{
constructor (props){
    super(props);
};

firebaseLogin () {
    const email = document.getElementById('email').value
    const pass = document.getElementById('password').value
    firebaseApp.auth().signInWithEmailAndPassword(email,pass).then(user => {
        console.log(`Firebase User: ${JSON.stringify(user)}`)
        if (!firebaseApp.auth().currentUser.emailVerified){
            alert("Email not verifide")
        }else {
            alert('emailVerifide')
        }
    }).catch(error => {
        alert(error.message)
    })

}

    render (){
return (
    <div  class="Modal  login" id="loginModal">

   
         {/* <div class = "modal-dialog login animated"> */}
             <div class="modal-content login animated">
                <div  class="modal-header">
 
                 
                   <MdClose onClick= {this.props.hideLogin} class="close" data-dismiss="modal" aria-hidden="true" />
                   <h4 class="modal-title" >Login with</h4>
                 
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
                           <div class="error"></div>
                           <div class="form loginBox">
                               <form method="" action="" accept-charset="UTF-8">
                               <input id="email" class="form-control" type="text" placeholder="Email" name="email"/>
                               <input id="password" class="form-control" type="password" placeholder="Password" name="password"/>
                               <input class="btn btn-default btn-login" type="button" value="Login" onClick = {this.firebaseLogin} />
                               </form>
                           </div>
                        </div>
                   </div>
                   </div>
                   <div class="modal-footer">
                        <div class="forgot login-footer">
                            <span>Looking to
                                 <Link color="primary"  >  Create an Account</Link>
                            </span> ?
                        </div>
                        
                    </div>


                 
		      </div>
		  {/* </div> */}
  

</div>
)
    };
}
