import React, {Component} from 'react'
import Formulir from './Formulir'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'

function Crud() {
  const handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
  } 
  return (
    <>
    <NavbarComponent/>
    <div className='p-4'>
      <div className='container-md-4'>crud</div>
      <Tabel/>
      <Formulir/>
    </div>
    </>
  )
}

export default Crud