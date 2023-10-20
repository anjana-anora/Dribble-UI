import React from 'react'
import './LogoGrid.css'
import shopify from '../../assets/dribble.png'

export default function LogoGrid() {
  return (
    <div className='grid_container'>
      <h3 className='caption'>Trusted By</h3>
        <div className="grid">
           <img src={shopify} alt="company_logo" className="grid_col" />
           <img src={shopify} alt="company_logo" className="grid_col" />
           <img src={shopify} alt="company_logo" className="grid_col" />
           <img src={shopify} alt="company_logo" className="grid_col" />
           <img src={shopify} alt="company_logo" className="grid_col" />
           <img src={shopify} alt="company_logo" className="grid_col" />
        </div>
    </div>
  )
}
