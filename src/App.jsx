import { Button, Container, Typography } from "@mui/material"

function App() {
  return (
    <Container sx={{
      border: '2px solid red', boxShadow: 3, pb: 2
    }}>
      <Typography variant="h1">App H1 con componente</Typography>
      <Typography variant="h2" component="span">SPAN</Typography>
      <Typography variant="h6" component="h2" textAlign="center" mt={20}>h2 con skin de h6</Typography>
      <Button variant="contained">Botón</Button>
    </Container>
  )
}

export default App
