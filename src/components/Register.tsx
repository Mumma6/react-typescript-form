import React, { FormEvent, ChangeEvent } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { IUser, IData } from '../interfaces'
import { useForm } from '../useForm'

const Register = ({
  data,
  setData,
}: {
  data: IData
  setData: Function
}): JSX.Element => {
  const initalState: IUser = {
    email: '',
    password: '',
  }

  const { formData, handleChange, resetForm } = useForm(initalState)

  const { email, password } = formData

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    localStorage.setItem(
      'user',
      JSON.stringify({ accounts: [...data.accounts, formData] })
    )
    setData({ accounts: [...data.accounts, formData] })
    resetForm()
  }

  return (
    <Form onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}>
      <h1>Register</h1>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
        />
      </Form.Group>
      <Button style={{ marginTop: 10 }} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Register
