import React from 'react'

const TotalBalancebox = ({accounts = [], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {/* {Doughnut chart} */}
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts: {totalBanks} 
            </h2>
            <div className='flex felx-col gap-2'>
              <p className='total-balance-label'>
                Total Current Balance
              </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalancebox