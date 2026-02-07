import SignupForm from "../components/signup/SignupForm";
import SignupHero from "../components/signup/SignupHero";

export default function SignupScreen (){
    return <>
       <main className="lg:mt-35 mt-10">
        <div className="grid lg:grid-cols-2 lg:gap-12 gap-8 container py-12">

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