import React from 'react'
import {
  Container,
  Card,
  FormGroup,
  Btn,
  Submit,
}from './styled'
import {BiRightArrow} from 'react-icons/bi'

export default function Contact() {
  return (
    <Container>
        <Card>
          <h2>Entre em contato</h2>
          <form>

            <FormGroup>
              <input type="input" className="form__field" placeholder="Email" Email="Email" id='Email' required />
              <label htmlFor="Email" className="form__label">Email</label>
            </FormGroup>

            <Btn>
              <div/>
              <Submit >
                Send<BiRightArrow/>
              </Submit>
            </Btn>

          </form>
        </Card>
    </Container>
  )
}
