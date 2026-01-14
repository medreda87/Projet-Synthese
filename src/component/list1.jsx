import React, { useState } from 'react'
import img1 from "./images/image1.png"
import img2 from "./images/image2.png"
import img3 from "./images/image3.png"
import img4 from "./images/image4.png"
import img5 from "./images/image5.png"
import img6 from "./images/image6.png"
import Item1 from './Item1';
import Filter1 from './filter1'
import { IoSearchOutline } from "react-icons/io5";
import Header from './Header'

function List1() {

//  hadi la liste we les information dekol mesbana 
    const laundries = [
  {
    id: 1,
    verified: true,
    reviews:"135",
    title: "Sparkle Clean Laundry",
    description: "Premium laundry services with eco-friendly detergents. We take care of your clothes like they're our own.",
    rating: 4.9,
    services: ["Wash & Fold", "Dry Cleaning", "Ironing"],
    status: "Open Now",
    image:img1,
    location: "0.5 km",
    time: "24 hours",
  },
  {
    id: 2,
    verified: true,
    reviews:"320",
    title: "The Laundry Basket",
    description:"Family-owned business with personalized service. We've been serving the community for 20 years.",
    rating: 4.9,
    services: ["Full Service Wash", "Bedding & Linens"],
    status: "Open Now",
    image:img2,
    location: "2.1 km",
    time: "24 hours",
  },
  {
    id: 3,
    verified: true,
    reviews:"220",
    title: "EcoWash Laundromat",
    description:"100% organic and eco-friendly cleaning solutions. Good for your clothes and the planet.",
    rating: 4.8,
    services: ["Eco Wash", "Organic Dry Clean"],
    status: "Closed",
    image:img3,
    location: "1.8 km",
    time: "24 hours",
  },
  { id:4,
    title: "Fresh & Fold Express",
    verified: true,
    reviews:"93",
    status: "Open Now",
    rating: 4.7,
    reviews: 189,
    description:"Quick turnaround times without compromising quality. Your neighbourhood laundry experts.",
    location: "1.2 km",
    time: "12 hours",
    services: ["Wash & Fold", "Dry Cleaning", "Express Service"],
    image:img4},
      {
    id:5,
    reviews:"66",
    title: "QuickPress Cleaners",
    verified: false,
    status: "Open Now",
    rating: 4.6,
    reviews: 98,
    description:
      "Specializing in professional pressing and dry cleaning for business attire.",
    location: "3.0 km",
    time: "24 hours",
    services: ["Suit Cleaning", "Shirt Pressing", "Alterations"],
    image:img5
  },
  {
    id:6,
    title: "Urban Clean Co.",
    verified: true,
    reviews:"198",
    status: "Open Now",
    rating: 4.5,
    reviews: 87,
    description:
      "Modern laundry service with app-based tracking and scheduling. The future of clean laundry.",
    location: "4.2 km",
    time: "18 hours",
    services: ["Smart Wash", "Premium Dry Clean", "Subscription Plan"],
    image: img6
  }
];

// le traitement de input search
  const[search,setSearch]=useState("")
  const SearchProduct=laundries.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase()))

// clean search li katban hta maknjbro hta mesbana 
  const handleSearch=()=>{
    setSearch("")
    setFilter("All Services");
    setSortType("rating");
  }




//  hadi deya les button  ya3ni kol button kayfilter 3la hsan sevices 
  const [filter, setFilter] = useState("All Services");
  const filteredLaundries =filter === "All Services"? SearchProduct: SearchProduct.filter((laundry) =>laundry.services.includes(filter));
// hadi sort deyal rating we mili neckliki mara tanya 
const [sortType, setSortType] = useState("rating"); 
const sortedLaundries = [...filteredLaundries].sort((a, b) => {
  if (sortType === "rating") {
    return b.rating - a.rating;
  } else {
    return b.reviews - a.reviews;
  }
});


//  hadi de button clear all  hadi kat3mel clean rir les button 
const isDirty =
  filter !== "All Services" ||
  sortType !== "rating";
  const handleClear=()=>{
    setFilter("All Services");
    setSortType("rating");
  }
  return (
<div className="main-content">
{/*  hada header deyalna */}
  <Header/>
{/* hadi div deya filter kansardo fiha les props*/}
  <div style={{backgroundColor:'#f4f7f7', fontSize:"20px"}}>
    <Filter1 search={search} setSearch={setSearch}
    filter={filter} setFilter={setFilter}
    sortType={sortType} setSortType={setSortType}
    isDirty={isDirty} handleClear={handleClear}
    />
  </div>
{/* wehada howa li fih mesbanat daylna  */}
  <div className='container'>
    <div>
      {search
        ? <h2 className='marge'>Results for "<span className='titre'>{search}</span>"</h2>
        : <h2 className='marge'>All <span className='titre'>Laundry Shops</span></h2>}
      <p className='marge'>{sortedLaundries.length} shops found</p>
    </div>

    <div className='container-list'>
      {sortedLaundries.map((re) => (
        <Item1 key={re.id} {...re} />
      ))}

    {/* benisba nehadi mili kan3emel search we sort we filter par les button 
    mili maknjbro hta mesbana kayetla3na had div
    */}
      {sortedLaundries.length===0 && (
        <div className='empty-state'>
          <button className='empty-icon'><IoSearchOutline/></button>
          <h2 className='empty-title'>No shops found</h2>
          <p className='empty-text'>Try adjusting your filters or search query</p>
          <button className="empty-button" onClick={()=>handleSearch()}> Clear Filters </button>
        </div>
      )}
    </div>
  </div>
</div>

  )
}

export default List1