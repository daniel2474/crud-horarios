import React from 'react'
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";

export const EditarSalaPage = () => {
    const { collapsed } = useSelector( state => state.dashboard );
    const {salaId} = useParams();
  return (
    <div className={collapsed?'principal-collapsed':'principal'}>
      <p>{salaId}</p>
    </div>
  )
}
