import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";
import './style.css';
function Filter1(props) {
    const buttons = ["All Services","Wash & Fold","Dry Cleaning","Ironing","Express Service",];
  return (
    <div className='padd'>
        <div className='filter-bar'>
          <div className='filter-input search'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
          </svg>
            <input type="search" value={props.search} onChange={(e)=>props.setSearch(e.target.value)} placeholder='Search laundry services...'/>
          </div>


    <div className="filter-input location">
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
    <input type="text"  placeholder='Your Location'/>
  </div>

  <button className="filter-button" onClick={props.onhandleFilter}>
    <svg 
    className="filter-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="6" x2="20" y2="6"/>
    <circle cx="10" cy="6" r="2"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
    <circle cx="14" cy="12" r="2"/>
    <line x1="4" y1="18" x2="20" y2="18"/>
    <circle cx="8" cy="18" r="2"/>
  </svg>
    Filters
  </button>
  </div>
    <div className="filters">
      {buttons.map((btn) => (
        <button
          key={btn}
          className={props.filter === btn ? "active" : ""}
          onClick={() => props.setFilter(btn)}
        >
          {btn}
        </button>
      ))}
      <button onClick={() =>
        props.setSortType(props.sortType === "rating" ? "reviews" : "rating")
      }>
        <FaRegStar/> Sort by {props.sortType === "rating" ? "Reviews" : "Rating"}
      </button>
      {props.isDirty && (
        <button className="clear-btn" onClick={()=>props.handleClear()}>
          ✖ Clear All
        </button>
      )}
    </div>
    </div>
  )
}

export default Filter1