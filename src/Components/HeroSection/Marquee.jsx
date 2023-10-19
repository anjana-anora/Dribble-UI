import React from 'react'
import './Marquee.css'
import pic from '../../assets/people.png';

export default function Marquee() {

    let arr=[]
    for(let i=0;i<10;i++){
        arr.push(i);
    }

  return (

    // <marquee className='Marquee' >
        <div className="cards">
            <div className="card">
                <img className='card_pic' src={pic} alt="user" />
                <div className="details">
                    <h4 className='name'>Name Initial</h4>
                    <h5 className='role'>Role of Person</h5>
                    <div className="skill">skill</div>
                </div>
            </div>

            {arr.map(render=>{
                return (
                    <div className="card">
                <img className='card_pic' src={pic} alt="user" />
                <div className="details">
                    <h4 className='name'>Name Initial</h4>
                    <h5 className='role'>Role of Person</h5>
                    <div className="skill">skill</div>
                </div>
            </div>
                )
            })}
        </div>  
    // </marquee>
  )
}
