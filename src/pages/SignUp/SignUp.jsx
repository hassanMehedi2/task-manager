
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import '../../styles/SignUp.css'
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
const SignUp = () => {

    const { createUser, updateUserInfo } = useContext(AuthContext)
    const navigate = useNavigate();
    const axios = useAxios(null);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                
                console.log(user, " singned in ");
                toast.success("Sign up successfully")
                // updating the name 
                updateUserInfo(name)
                    .then(() => {
                        console.log(user, " updated  ");
                        toast.success("Updated successfully")
                        axios.post('http://localhost:5000/api/auth/access-token',{email:user.email})
                        navigate('/');
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        console.log(errorMessage);
                        toast.error(errorMessage)
                        // ..
                    });


            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                toast.error(errorMessage)
                // ..
            });

    }

    return (
        <div className='login-section'> <Toaster
            position="top-center"
            reverseOrder={true}
        />
            <form onSubmit={handleSignUp} className="signUp-form">
            <div className="form-control"> 
            <h2 className="form-title">Sign up</h2>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="" required />
                </div>
                <div className="form-control">
                   
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="" required />
                  
                </div>
                <div className="form-control ">
                    <button  className="submit-btn">Sign Up</button>
                </div>
                <div className="form-bottom">
                    <p>or</p>
                    <div className="google-login"><FcGoogle className="=" /><Link>sign up with google</Link></div>
                    <p>allready have an account <Link to={'/api/users/signup'} className="login-link">Login now</Link></p>
                </div>
            </form>

        </div>
    );
};

export default SignUp;