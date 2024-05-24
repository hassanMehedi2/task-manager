
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import '../../styles/Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';
const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const axios = useAxios();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user, " logged in ");
                console.log({ email: user.email });
             

                navigate('/');
                toast.success("Logged in successfully");
                setTimeout(() => {
                    navigate('/');
                }, 1000);
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
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-control">
                    <h2 className="form-title">Login</h2>
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
                    <label className="label">
                        <a href="#" className="">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control ">
                    <button  className="login-btn">Login</button>
                </div>
                <div className="form-bottom">
                    <p>or</p>
                    <div className="google-login"><FcGoogle className="=" /><Link>sign in with google</Link></div>
                    <p>dont have an account <Link to={'/api/users/signup'} className="register-link">Register now</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Login;