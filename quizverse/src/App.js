import React from 'react'

// Custome Imports 
import Header from './components/Header'
import QuestionDay from './components/QuestionDay'

const App = () => {
  return (
    <>
    {/* header for the Website */}
    <Header />
    
    {/* Questions for the Website  */}
    <QuestionDay />
    </>
  )
}

export default App