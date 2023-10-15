
import Link from 'next/link'

const HomePage = () => {
    return (
       <div>
           <h1>Home Page</h1>
           <p>Página de entrada do sistema</p>
           <hr />
           <div><span>Já é cacadastrado? </span> <Link href="/signIn" >Sign In</Link></div>
           <div><span>Cadastre-se</span> <Link href="/signUp">Sign Up</Link></div>
       </div>
    )
}

export default HomePage;