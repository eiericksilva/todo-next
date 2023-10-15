import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import Link from 'next/link'

const SignUp = () => {
    return (
        <Container
        component="main"
        maxWidth="xs"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5">Sign Up</Typography>
          <form  style={{ width: '100%', marginTop: '20px' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
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
              autoComplete="new-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
            >
              Sign Up
            </Button>
          </form>
          <Grid container style={{ marginTop: '20px' }}>
            <Grid item>
              <Link href="/signIn">
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    )
}

export default SignUp;