import styled from 'styled-components'
import { useState } from 'react'
import { Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Nav from './components/Nav.tsx'
import  { Header } from './components/Header.tsx'
import { Footer } from './components/Footer.tsx'
import Home from './components/Home.tsx'


const Container = styled.div`
  background-color: #ffc7c7;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  margin: 0px 50px;
  
`;
function Root(){
  return(
    <>
      <Nav/>
      <Routes>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </>
  );
}

const router=createBrowserRouter(
  [
    {path:"*", Component: Root}
  ]
)

function App() {
  return (
    <Container>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </Container>
    
  )
}

export default App
