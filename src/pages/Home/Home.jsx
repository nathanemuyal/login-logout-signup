import {useState} from "react";
import{createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {Navigate} from "react-router-dom";
import{auth} from "../../db/firebase";

export default function Home({user}) {
    const [isSignUpActive, setSignUpActive] = useState(false);
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const handeleFormChange = () => {
        setSignUpActive(!isSignUpActive)
    };
    const handelSignUp =() =>{
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredetial) => {
                const user = userCredetial.user;
                console.log(user);
                }).catch((error)=> {
                const errorCode= error.code;
                const errorMessage =error.message;
                console.log(errorCode,errorMessage);
        })
    }
    const handelSignIn =() =>{
        if (!email || !password) return;
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredetial) => {
                const user = userCredetial.user;
                console.log(user);
            }).catch((error)=> {
            const errorCode= error.code;
            const errorMessage =error.message;
            console.log(errorCode,errorMessage);
        })
    }
    const handeleEmailChange = (event)=>setEmail(event.target.value)
    const handelePasswordChange = (event)=>setPassword(event.target.value)

    if (user){
        return <Navigate to="/dashboard"></Navigate>;
    }
    return (
        <section className="w-full h-screen bg-slate-900 flex items-center
       justify-center">
            <form className="flex flex-col gap-2 bg-slate-50 p-5 rounded
            shadow-md">
                {isSignUpActive &&
                    <h1 className="text-center text-slate-900 text-4xl mb-3">Sign Up</h1>
                }
                {!isSignUpActive &&
                    <h1 className="text-center text-slate-900 text-4xl mb-3">Sign in</h1>
                }

                <label htmlFor="email" className="text-slate-900">Email</label>
                <input typeof="email" onChange={handeleEmailChange} name="email" id="email" className="h-10 border
                border-slate-900 rounder p-4"/>

                <label htmlFor="password" className="text-slate-900">Password</label>
                <input typeof="password" onChange={handelePasswordChange} name="password" id="password" className="h-10 border
                border-slate-900 rounder p-4"/>


                {isSignUpActive &&
                    <button onClick={handelSignUp} type="submit" className="bg-slate-900 px-3 py-1.5 text-white my-3
                rounded hover:bg-blue-700">Sign Up</button>
                }
                {!isSignUpActive &&
                    <button onClick={handelSignIn} type="submit" className="bg-slate-900 px-3 py-1.5 text-white my-3
                rounded hover:bg-blue-700">Sign in</button>
                }

                {isSignUpActive &&
                    <a href="#" onClick={handeleFormChange} className="text-red-500 hover:text-red-900">Login</a>
                }
                {!isSignUpActive &&
                    <a
                        href="#" onClick={handeleFormChange} className="text-red-500 hover:text-red-900">Creat an
                        account
                    </a>
                }
            </form>

        </section>
    )
}