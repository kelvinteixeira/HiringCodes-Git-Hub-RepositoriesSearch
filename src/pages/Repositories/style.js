import style from 'styled-components'
//link componente responsavel para fazer a transição de componentes sem refresh de pagina
import { Link } from 'react-router-dom'

export const Container = style.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`
export const Title = style.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`
export const List = style.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`
export const ListItem = style.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
`
// no caso de estilizar um componente do react, colca-se entre paratenses
export const LinkHome = style(Link)` 
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
`

