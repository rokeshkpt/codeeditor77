import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';
import Intro from './document';
import Cas from './cas';
import Jas from './jas';
import Nav from './nav';
// import Document from './document';

function App() {
 

  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route path='' element={<Home />} />
          <Route path='intro' element={<Intro />} />
          <Route path='css' element={<Cas />} />
          <Route path='js' element={<Jas />} />
          </Routes>
      </div>
    </Router>
  )
}

const Home = () => {
   const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <>
      <Nav />
    <div className="pane layout">
      <Editor
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="css"
        displayName="CSS"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="javascript"
        displayName="JS"
        value={js}
        onChange={setJs}
      />
    </div>
    <div className="pane">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
    </>
  )
}

export default App;