import Link from "next/link";

const SignIn = () => {
    return (
       <div>
        <div>
            <h1>SignIn Page</h1>
            <p>Página para logar no sistema</p>
        </div>
        <hr />
        <span>Login</span> 
        <div>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="password"/>
            <Link href="/dashboard">Submit</Link>

            <hr />
           <p>Not a user yet? Register</p>
           <Link href="/signUp">Go to Register page</Link>
        </div>
        </div>

    )
}

export default SignIn;