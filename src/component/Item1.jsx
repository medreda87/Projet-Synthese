import React from 'react'
import { MdOutlineVerified } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import './style.css'
function Item1(props){
  return (
    <div className='card'>
        <div className='card-image'>
            <div>
                <div className='badges'>
                    <span className='badge verified'><MdOutlineVerified/>Verified</span>
                    <span className={props.status === "Closed" ? "reda" : "badge closed"}>{props.status}</span>
                </div>
            </div>

            
            <img src={props.image} alt="" />
        </div>
        <div className='card-content'>
            <div className='card-header'>
                <h3>{props.title}</h3>
                <div className='rating'>
                    <p><strong>⭐{props.rating}</strong>({props.reviews})</p>
                </div>
            </div>
                <p className='description'>{props.description}</p>

            <div className='meta'>
                <p><span><IoLocationOutline/></span>{props.location}</p>
                <p><span><IoMdTime/></span>{props.time}</p>
            </div>
            <div className='tags'>
            {
                props.services.map((re,index)=>(
                        <span key={index}>{re}</span>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default Item1