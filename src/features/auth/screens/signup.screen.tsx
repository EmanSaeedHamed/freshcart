import SignupForm from "../components/signup/SignupForm";
import SignupHero from "../components/signup/SignupHero";

export default function SignupScreen (){
    return <>
       <main>
        <div className="grid lg:grid-cols-2 lg:gap-12 gap-10 container py-12">

              {/*  signup hero */}
        <div>
            <SignupHero/>
        </div>

        {/* signup form */}
        <div>
            <SignupForm/>
        </div>
        </div>
       </main>
    </>
    }