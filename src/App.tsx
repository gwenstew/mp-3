import styled from 'styled-components'
import { Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Nav from './components/Nav.tsx'
import  { Header } from './components/Header.tsx'
import { Footer } from './components/Footer.tsx'
import Home from './components/Home.tsx'
import Work from './components/Work.tsx'
import Education from './components/Education.tsx'
import References from './components/References.tsx'
import Skills from './components/Skills.tsx'
import Projects from './components/Projects.tsx'
import Documents from './components/Documents.tsx'


const Container = styled.div`
  font-family: Georgia,Times,Times New Roman,serif;
  background-color: #ffc7c7;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  color: #4f1c4c;

  h3 {
    text-align:center;
  }
  font-size: calc(12px + 0.5vw)
`;

const Body = styled.div`
  font-size: calc(10px + 0.5vw)
  padding: 20px
  width: 100%
`;

function Root(){
  return(
    <>
      <Nav/>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/Education*" element={<Education/>}/>
        <Route path="/Work*" element={<Work/>}/>
        <Route path="/Skills*" element={<Skills/>}/>
        <Route path="/Projects*" element={<Projects/>}/>
        <Route path="/Documents*" element={<Documents/>}/>
        <Route path="/References*" element={<References/>}/>
      </Routes>
    </>
  );
}

const router = createBrowserRouter(
  [
    {path:"*", Component: Root}
  ]
)

function App() {
  return (
    <Container>
      <Header/>
      <Body>
        <RouterProvider router={router}/>
      </Body>
      <Footer/>
    </Container>
    
  )
}

export default App
