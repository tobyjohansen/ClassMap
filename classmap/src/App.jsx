import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import StudentList from './components/StudentList'
import StudentInfo from './components/StudentInfo'
import Home from './components/Home'
import Layout from './components/Layout'
import ClassList from './components/ClassList'
import ClassInfo from './components/ClassInfo'
import ClassListCreate from './components/ClassListCreate'
import StudentCreate from './components/StudentCreate'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentInfo />} />
          <Route path="/students/create" element={<StudentCreate />} />
          <Route path="/klasser" element={<ClassList />} />
          <Route path="/klasser/:id" element={<ClassInfo />} />
          <Route path="/klasser/create" element={<ClassListCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
