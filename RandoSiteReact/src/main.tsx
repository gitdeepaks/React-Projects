import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MyPage from '../pages/test'
import { PricingThree } from './PricingThree'
import { NavbarTwo } from './NavBar'
import { HeroThree } from './Hero'
import { FooterThree } from './footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavbarTwo />
    <HeroThree />
  <App />
  <FooterThree />
  </React.StrictMode>,
)
