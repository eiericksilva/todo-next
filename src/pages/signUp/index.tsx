import { Box } from "@mui/material";
import Link from 'next/link'

const SignUp = () => {
    return (
       <div>
           <h1>SignUp Page</h1>
           <p>Página para o usuário se cadastrar no sistema</p>

           <hr />
           
           <Box display="flex" flexDirection="column" width={300} gap={2}>
            <h2>Formulário de cadastro</h2>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="password"/>
            <input type="text" placeholder="confirm password"/>
            <Link href="/dashboard">Register</Link>
           </Box>
       </div>
    )
}

export default SignUp;