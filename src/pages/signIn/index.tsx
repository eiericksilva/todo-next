import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import Link from "next/link";

const SignIn = () => {
    return (
        <Container component="main" maxWidth="xs" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}>
            <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Login</Typography>
                <form style={{ width: '100%', marginTop: '20px' }}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                >
                    <Link href="/dashboard" style={{ color: "white", textDecoration:"none"}}>
                        Sign In
                    </Link>
                </Button>
                </form>
                <Grid container style={{ marginTop: '20px' }}>
                    <Grid item xs>
                        <Link href="#">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/signUp">
                            {"Not a user yet? Register"}
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default SignIn;