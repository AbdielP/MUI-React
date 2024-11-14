import { Button, Container } from "@mui/material"

function App() {
  return (
    <Container sx={{
      border: '2px solid red', boxShadow: 3, pb: 2
    }}>
      <h1>App</h1>
      <Button variant="contained">Botón</Button>
    </Container>
  )
}

export default App
