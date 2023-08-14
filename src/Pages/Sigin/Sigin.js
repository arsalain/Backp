import {React,useState} from 'react'
import "./Sigin.css"
import gg from "../../Images/google.png"
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import {  toast } from 'react-toastify';
import { auth,provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useDispatch } from 'react-redux';
import { loginStart,loginSuccess,loginFailure } from '../../redux/userSlice';

const Sigin = ({ onClose,open }) => {
    const [toggleState, setToggleState] = useState(1);
    const [forgotPassword,setForgotPassword] = useState(true)
    const [credentials, setCredentials] = useState({
      name: "",
      phone: "",
      email: "",
      password: ""
    });
    const [login, setLogin] = useState({
      email: "",
      password: ""
    });
    const [email, setEmail] = useState("");
    const dispatch = useDispatch()
    // console.log(login,"login")
    let navigate = useNavigate();
    const toggleTab = (index) => {
      setToggleState(index);
    };
    const sigInWithGoogle = () =>{
      dispatch(loginStart());
      signInWithPopup(auth,provider)
      .then((result)=>{
        axios.post("http://localhost:4000/auth/google",{
          name: result.user.displayName ,
          email: result.user.email,
          image: result.user.photoURL
        }).then((res) =>{
          dispatch(loginSuccess(res.data))
          navigate('/user/home')
        })
      }).catch((error) => {
        dispatch(loginFailure());
      })
    }
    const handleLogin = async (e) => {
      e.preventDefault();
      dispatch(loginStart());
      try {
        const response = await axios.post("http://localhost:4000/auth/signin", { email: login.email, password: login.password});
        if(response.data.users === false){
          toast.error("Email is not registered !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
          }
            else if( response.data.password === false){
              toast.error("Incorrect Password !", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            }
            else{
                  dispatch(loginSuccess(response.data));
                  toast("Login Successfull !", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
        navigate("/user/home")
            }
      } catch (err) {
        dispatch(loginFailure());
      }
    };
    const onChangea = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
    };
    const handleSignup = async (e) => {
      e.preventDefault();
  
      try {

          const response = await fetch(
            "http://localhost:4000/auth/signup",
            {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify({
                name: credentials.name,
                phone: credentials.phone,
                email: credentials.email,
                password: credentials.password
              }),
            }
          );
          const json = await response.json();
        
          if (json.success === false) {
            console.log(json.succes)
            toast.warn("Email Already Exists !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              })
          } else {
            toast.success("Acccount Created, You can now Login to your account!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              })
              toggleTab(1)
          }
        }
       catch (error) {
        toast.danger("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
      }
    };
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const sendLink = async (e) => {
      e.preventDefault();

      if (email === "") {
          toast.error("email is required!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      } else if (!email.includes("@")) {
          toast.warning("includes @ in your email!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      } else {
          const res = await fetch("http://localhost:4000/auth/passwordlink", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ email })
          });

          const data = await res.json();

          if (data.users === false) {
            toast.error("Email is not registered, Please Sign Up with your Email",{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
          } else {
              toast.success("Password reset link has been sent Successfully to Your Email",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              })
          }
      }
  }
  const setVal = (e) => {
    setEmail(e.target.value)
}

    if (!open) return null
  return (
    <>
    <div className='sigin-body'>
      <div className='sigin-body-left'>
      <div className="sigin-left12">
      <div className="sigin-left-img"></div>
      <div className="sigin-left-logo">
        
        <div className="sigin-left-name2">BACKPACKERS</div>
        <div className="sigin-left-name12">UNITED</div>
      </div>
      </div>
        <div className='sigin-left-title'>
            Start the Journey with Us.
        </div>
        <div  className='sigin-left-title1' >
            Explore amazing treks and <br />
            tours
        </div>
      </div>
      <div className='sigin-body-right'>
        <div className='sigin-right-cancle-but'><button className='sigin-left-cancle' onClick={onClose}>X</button>
        </div>
        <div className='sigin-container'>
        <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
           LOGIN
       
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          value="item_one" >
            SIGN UP
        </button>
      </div>

      <div className="content-tabs">
        <div
         className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className='sigin'>
       
          <div className='sigin-title' > Create Your Account</div>
<form className="form" onSubmit={handleSignup}> 
<div className="inputBox"> 

<input type="text"     name="name" value={credentials.name} onChange={onChange}  required /> <i>Full Name</i> 

</div> 
<div className="inputBox1"> 
<div className='sigin-phone'>
  <div className='sigin-phone-title'>Phone Number </div>
<div className='sigin-num'>+91
<input type="tel" className='sigin-input' name="phone" value={credentials.phone} onChange={onChange} required />
</div>
</div> 
</div> 
 <div className="inputBox"> 

  <input type="email" name="email" value={credentials.email} onChange={onChange} required /> <i>Email</i> 

 </div> 

 <div className="inputBox"> 

  <input type="password" name="password" value={credentials.password} onChange={onChange} required /> <i> Password</i> 
 

 </div> 
 <div className="inputBox2"> 

<input type="checkbox" className='sigin-check' required /><div className='sigin-terms'>By joining, you agree to the Terms and <br/> Conditions.</div>


</div>
<div >
  <button type='submit' className='sigin-but' >SIGN UP NOW</button>
  <div className='login-signup' >
 <div  className='login-acc'>Already have an account?</div>
 <div className='login-up'><button className='login-up-but'
          onClick={() => toggleTab(1)}>Log In</button> </div>
 </div>
 </div>
 </form>
 </div>
 </div>
        
{ forgotPassword ?
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            
            <div className="login"> 

            <div className='login-title' >  Login into Your Account</div>
<form className="form" onSubmit={handleLogin}> 

 <div className="inputBox"> 

  <input type="email" name='email' value={login.email} onChange={onChangea} required /> <i>Email</i> 

 </div> 

 <div className="inputBox"> 

  <input type="password" name='password' value={login.password} onChange={onChangea} required /> <i> Password</i> 
 

 </div> 
 <div className='login-forgot'><button  className='login-forgot-but'onClick={()=>setForgotPassword(false)}>Forgot Password ?</button></div>
 <div >
  <button type='submit' className='login-but'>LOGIN NOW</button>
 </div>
 </form >
 <div className='login-or'>OR</div>
 <buttom onClick= {sigInWithGoogle}>
 <div className='login-google' >

  <img src = {gg} alt={gg} className='login-logo'/>
  <div >Login With Google</div>

 </div>
 </buttom>
 <div className='login-signup' >
 <div  className='login-acc'>Don't have an account?</div>
 <div className='login-up'><button className='login-up-but'
          onClick={() => toggleTab(2)}>Sign Up</button> </div>
 </div>
 </div>
 </div> :
 <div className='forgot'>
      <button className='forgot-icon' onClick={()=>setForgotPassword(true)}><MdOutlineArrowBackIosNew className='forgot-icon1'></MdOutlineArrowBackIosNew></button>
      <div className='forgot-title'> Forgotten Your </div> 
      <div className='forgot-title'> Password ? </div> 
      <div className='forgot-title1'> Don’t worry, we’ll send you a message to help you reset </div>
      <div className='forgot-title1'>your password</div> 
      <div className='forgot-input'>
      <div class="inputBox"> 

<input type="email" value={email} onChange={setVal} name="email" required /> <i>Email</i> 

</div> 
</div>
<div >
  <button className='forgot-but' onClick={sendLink} >Continue</button>
  <div className='return-login' >
 <div  className='retun-ac'>Return To</div>
 <div className='retun-up'><button className='return-up-but'
          onClick={() => setForgotPassword(true)}>Log In</button> </div>
 </div>
 </div>
</div>
 
}
 </div>
 </div>
 </div>

 </div>
 </>
 
  )
}

export default Sigin
