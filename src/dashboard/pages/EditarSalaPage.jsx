import React from 'react'
import { useSelector } from 'react-redux';

export const EditarSalaPage = () => {
    const { collapsed } = useSelector( state => state.dashboard );
  return (
    <div className={collapsed?'principal-collapsed':'principal'}>EditarSalaPage</div>
  )
}
