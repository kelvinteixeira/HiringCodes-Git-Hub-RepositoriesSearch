import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style'
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`http://api.github.com/users/${usuario}/repos`) //busca da API
      .then(response => {
        //armazenando a respota numa variavel
        const repositories = response.data; 
        const repositoriesName = [];
         //mapeando a vareavel e adicionando no Array criado acíma
        repositories.map((item) => {
          repositoriesName.push(item.name);
        });
        // setando a respostava  no localStorage e tranformando em arquivo JSON
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        setErro(false)
        // adicionando os dados realocando para a pagina escolhida
        history.push('/repositories')
      })
      // função para caso de erro na busca
      .catch(err => {
        setErro(true)
      })
  }
  return (
    <S.Container>
      <S.Title>Repositorios GitHub</S.Title>
      <S.Content>
        <S.Input  placeholder="Usuário" value={usuario} className="usuarioInput" autoComplete="off" onChange= {e => setUsuario(e.target.value)} />
        <S.Button onClick={handlePesquisa} type="button">Pesquisar</S.Button>
      </S.Content>
      {/* Aplicando a renderização condicional do span de erro*/}
      {erro ? <S.MsgError>Usúario não encontrado!</S.MsgError> : ''}
    </S.Container>
  );
}

export default App;