import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <SayFullName name='Вячеслав' surname='Демченко' link='https://vk.com/demchenko_vyacheslav' />
        <SayFullName name='Вася' surname='Иванов' link='https://facebook.com/' />
        <SayFullName name='Петя' surname='Сидоров' link='https://twitter.com/' />
      </div>
    );
  }
}



function SayFullName(props) {
  return (
      <div>
      <h1>Мое имя - {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link}> ссылка на мой профиль</a>
      </div>
    )
}



export default App;
