import React from 'react'//rafce
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Styles/GlobalStyles'
import { light } from './Styles/Themes/light'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as S from './Styles/App.styles'
import Contato from './Pages/Contato'
import Home from './Pages/Home'
import QuemSomos from './Pages/QuemSomos'
import Pets from './Pages/Pets'
import Header from './Components/Header'


const App = () => {

    return (
        <ThemeProvider theme={light}>
            <GlobalStyles />
            <S.Container>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/Pets' component={Pets}/>
                        <Route path='/Contato' component={Contato}/>
                        <Route path='/QuemSomos' component={QuemSomos}/>
                    </Switch>
                </BrowserRouter>
            </S.Container>
        </ThemeProvider>
    )
}

export default App


