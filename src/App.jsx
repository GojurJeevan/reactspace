import React from 'react'
import ReactSetupGuide from './components/concepts/introduction/reactsetupguide'
import './App.css'
import TableData from './components/task/TableData'

export default function App() {
  return (
    <div>
      <div>
         <ReactSetupGuide />
      </div>
      <div>
        <TableData />
      </div>
    </div>
  )
}


