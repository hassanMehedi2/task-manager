
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
const SignUp = () => {

    const { createUser ,updateUserInfo} = useContext(AuthContext)
    const navigate = useNavigate();
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
                .then(()=>{
                    console.log(user, " updated  ");
                toast.success("Updated successfully")

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
        <div>
            <form onSubmit={handleSignUp} className="card-body px-4 md:px-32 ">

                <div className="form-control">
                    <p className="text-sm hidden md:flex  md:text-xl mb-5 font-bold text-gray-400 text-center">SignUp</p>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-2">
                    <button className="btn text-white bg-[#263238]">Sign Up</button>
                </div>
                <div className="text-center text-sm md:text-base space-y-2">
                    <p>or</p>
                    <div className="flex items-center justify-center gap-2"><FcGoogle className="text-lg md:text-2xl" /><Link>sign in with google</Link></div>
                    <p>Allready have an account <Link to={'/api/users/login'} className="text-sky-500 ml-2 underline">Login now</Link></p>
                </div>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default SignUp;