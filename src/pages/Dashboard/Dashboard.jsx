import {auth} from "../../db/firebase";
import {signOut} from "firebase/auth";

export default function Dashboard (){

    const handelSingOut =()=>{
        signOut(auth)
            .then(()=> console.log("deconnexion"))
            .catch((error)=>console.error(error));
    }


    return(
        <section className="w-full h-screen bg-slate-900 flex items-center justify-center
        flex-col">
            <h1 className="text-center text-slate-50 text-4xl mb-3">Dashboard</h1>
            <button onClick={handelSingOut} className="block bg-slate-900 px-3 py-1.5 text-white my-3 rounded
            hover:bg-blue-700">Sign out</button>
        </section>

    )
}