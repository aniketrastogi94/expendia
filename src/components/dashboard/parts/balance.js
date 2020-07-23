import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4 className='text-center' >Your Balance : Rs {total} </h4>
    </>
  )
}
export default Balance;