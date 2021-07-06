//useEffet, monitora a variavel e vai disparar uma função progamada quando essa variavel sofrer alteração
import React, { useEffect,useState } from 'react'
import * as S from './style'
import { useHistory } from 'react-router';


export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // pegando os dados que foram armazenados no localStorage em uma variavel
    let repositoriesName = localStorage.getItem('repositoriesName')
    // criando condição quando o localStorage for limpo e o usuario limpar a pagina ele será direcionado para Home pelo hook useHistory
    if (repositoriesName != null) {
      // convertendo os dados de JSON para Objeto
      repositoriesName = JSON.parse(repositoriesName);
      // setando o useState da varial criada
      setRepositories(repositoriesName);
      // limpando o localStorage
      localStorage.clear();
    } else {
      history.push('/')
    }
  }, [])

  return (
    <S.Container>
        <S.Title>Repositórios</S.Title>
      <S.List>
        {/* mapeando a varieval que recebeu o useState e retornando os valores */}
        {repositories.map((item) => {
          return (
            <S.ListItem>Repositório:{item}</S.ListItem>
          )
        })}
      </S.List>
      {/* chamando o Link pelo styled-component */}
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  )
}