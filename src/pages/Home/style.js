import style from 'styled-components'

export const Container = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Content = style.div`
  width: 100vw;
  display: flex;
  align-item: center;
  justify-content: center;
`

export const Input = style.input`
  border: 1px solid #ddd;
  height: 25px;
  padding: 0.5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
      outline: none;
      box-shadow: none;
  }
`
export const Button = style.button`
  height: 43px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &: focus, &
  : active {
      outline: none;
      box - shadow: none;
}
`
export const Title = style.h1 `
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const MsgError = style.span `
  display: block;
  font-size: 0.75rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`
