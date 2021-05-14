import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Register from './components/Register'
import Login from './components/Login'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { IUser, IData } from './interfaces'

function App() {
  enum Pages {
    Login = 'Login',
    Register = 'Register',
  }

  const initalData: IData = {
    accounts: [],
  }

  const [page, setPage] = useState<Pages>(Pages.Register)
  const [data, setData] = useState<IData>(initalData)

  useEffect(() => {
    const { accounts } = JSON.parse(localStorage.getItem('user') || '{}')
    if (accounts) {
      setData({ accounts })
    }
  }, [])

  return (
    <>
      <ButtonGroup style={{ margin: 30 }}>
        <Button onClick={() => setPage(Pages.Login)} variant="secondary">
          Login
        </Button>
        <Button onClick={() => setPage(Pages.Register)} variant="secondary">
          Register
        </Button>
      </ButtonGroup>
      <Container style={{ width: 400, marginTop: 50 }}>
        {page === Pages.Register && <Register data={data} setData={setData} />}
        {page === Pages.Login && <Login data={data} />}
      </Container>
    </>
  )
}

export default App
