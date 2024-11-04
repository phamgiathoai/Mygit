import "./LoginPage.css";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils/utils";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="window d-flex align-item-center justify-content-center">
      <div className="login-body d-flex">
        <div className="form-login-container">
          <div style={{fontSize: 28, fontWeight:600}}>Login</div>
          <div style={{color:'#ACACAC'}}>Doesn't have an account yes?<a style={{color: '#AA8DB3',fontWeight: 500,textDecoration: 'underline', cursor: 'pointer'}}> Sign up</a>
          <div className="mt-5">
          <label for="input-use" class="form-label">User Name or Email</label>
          <input type="text" id="inputuser" class="form-control" />
          <label for="input-Password" class="form-label">Password</label>
          <input type="Password" id="Password" class="form-control" />
          <div className="ms-2">
          <input type="Checkbox" />
          <span className="ms-2">Remember me!</span>
          </div>
          <div className="d-flex justify-content-center">
          <button className="btn mt-3" style={{background: '#1512c3',width: '100%',fontSize: 16,fontWeight: 600}}>Login</button>
             </div>
             <div className="d-flex">
              <hr className="w-100"/><div className="mx-1" style={{whiteSpace: 'nowrap'}}>or login with</div><hr className='w-100'/>
             </div>
             <div className="d-flex">
              <div className="w-50 ms-1">
               <button className="btn w-100 socila-btn"><FcGoogle/></button>
              </div>
              <div className="btn w-100 socila-btn"><FaFacebookF/></div>
             </div>
           </div>
          </div>
        </div>
        <div className="login-background"></div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWLJSs0yVOuVsk-c1cNOI5oA9h2FLGvg7gDkykQNcMFRZmHs_8khbu2-x36erh9PQ1Yg&usqp=CAU" alt="" />
      </div>
    </div>
  );
}
