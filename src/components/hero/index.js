import React from 'react'
import { Logo } from '../logo'
import { Card } from '../UI/cards'
import {NavBar} from'../NavBar'
export const Hero = () => {
  return (
    <div>
        <Card> 
            <div style={{padding:'50px 0'}}>
           <Logo/>
           </div>
           <NavBar/>
        </Card>
    </div>
  )
}
