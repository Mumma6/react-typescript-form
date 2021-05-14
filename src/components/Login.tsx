import React, { FormEvent, ChangeEvent, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { IData, IUser } from '../interfaces'
import { useForm } from '../useForm'

const Login = ({ data }: { data: IData }): JSX.Element => {
  const initalState: IUser = {
    email: '',
    password: '',
  }

  const [loggedUser, setLoggedUser] = useState<IUser | null>(null)

  const { formData, handleChange, resetForm } = useForm(initalState)

  const { email, password } = formData

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const user = data.accounts.find((user: IUser) => user.email === email)

    if (user?.password === password) {
      setLoggedUser(user)
    }

    resetForm()
  }

  return (
    <>
      {loggedUser ? (
        <h1>hej {loggedUser.email}</h1>
      ) : (
        <Form onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}>
          <h1>Login</h1>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
          </Form.Group>
          <Button style={{ marginTop: 10 }} variant="primary" type="submit">
            Login
          </Button>
        </Form>
      )}
    </>
  )
}

export default Login
