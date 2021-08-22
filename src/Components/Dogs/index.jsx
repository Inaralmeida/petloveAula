import React, { useEffect, useState } from 'react'
import * as S from './Dogs.styles'

const Dogs = () => {

   const [dadosApi, setDadosApi] = useState([])
   const [apiChegou, setApichegou] = useState(false)


   useEffect(()=>{

    fetch('https://salty-harbor-83280.herokuapp.com/pets/dogs')
    .then((resposta) => resposta.json())
    .then((dados)=>{
        setDadosApi(dados.results)
        setApichegou(true)
    })
   }, [])

    return (
        <S.Container>
            {!!dadosApi && apiChegou ? (
                dadosApi.map((item)=>{
                    console.log(item.nome);
                })
            ) : (<p>Carregando</p>) }
        </S.Container>
    )
}

export default Dogs





