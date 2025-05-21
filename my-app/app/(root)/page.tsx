import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '@/components/TotalBalancebox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Jayden"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          Welcome Jayden
          {/*  
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user= {loggedIn?.firstName || 'Guest'}
          subtext="Access and mange your acount and transactions efficiently"
          />
          

          <TotalBalancebox
            accounts ={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
          */}
        </header>
      </div>
    </section>
  )
}

export default Home