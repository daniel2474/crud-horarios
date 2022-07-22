import React from 'react'

export const Input = ({tipo,nombre,valor,handle,label}) => {
  return (
    <div className="main_div">
        <div className="group">
            <input type={tipo} name={nombre} value={valor}
                    onChange={handle}required="required"/>
            <label>{label}</label>
        </div>

    </div>
  )
}
