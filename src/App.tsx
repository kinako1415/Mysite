import { useState } from 'react'
import Mysite from './assets/MysiteSvg/Mysite.svg';
import cloud from './assets/MysiteSvg/cloud.svg';
import star1 from './assets/MysiteSvg/star1.svg';
import star2 from './assets/MysiteSvg/star2.svg';
import star3 from './assets/MysiteSvg/star3.svg';
import './App.css'


function App() {

  return (
    <>
      <img src={star1} className='drugCancel' />
      <img src={star2} />
      <img src={star3} />
      <img src={cloud} />
      <img src={Mysite} className='drugCancel' />
    </>
  )
}

export default App
