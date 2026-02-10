import LoginForm from "../components/login/LoginForm";
import LoginHero from "../components/login/LoginHero";

export default function LoginScreen() {
  return <>
      <main className="grid lg:grid-cols-2 lg:gap-12 gap-10 container py-12 mt-5">
                <div className="space-y-4 hidden lg:block">
                    <LoginHero/>
                </div>
        
                {/* signup form */}
                <div className="px-4 lg:px-12 rounded-xl shadow-lg py-10">
                    <LoginForm/>
                </div>
      </main>
    </>
}
