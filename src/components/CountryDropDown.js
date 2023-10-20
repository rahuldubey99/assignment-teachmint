import React, { useEffect, useState } from 'react'
import "../styles/CountryDropDown.css"

const CountryDropDown = ({countryLists , selected_country}) => {

    const [isOpen, setisOpen] = useState(false)
    const [selectedCountry , setselectedCountry] = useState(null)
    const [searchCountry, setsearchCountry] = useState('')
    const [countryList, setcountryList] = useState(countryLists)

    useEffect(()=>{
        setcountryList(countryLists)
    },[countryLists])
    const filteredCountry = (event) =>{
          // Access input value
  const query = event.target.value;
  // Create copy of item list
  var updatedList = [...countryLists];
  // Include all elements which includes the search query
  updatedList = updatedList.filter((item) => {
    return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  
  });
  // Trigger render with updated values
  setcountryList(updatedList);
    }
  return (
    <>
    
 <div className="dropdown">
  <button  className="dropbtn" onClick={()=>setisOpen(!isOpen)}>
    {selectedCountry?selectedCountry:"Dropdown"}
  </button>
  <div id="myDropdown" className={`dropdown-content ${isOpen?'show':''}`}>
    <input
      type="text"
      placeholder="Search.."
      id="searchCountry"
      name='searchCountry'
      value={searchCountry}
      onChange={(e)=>setsearchCountry(e.target.value)}
      onKeyUp={(e)=>filteredCountry(e)}
    />
    {countryList?.map((country)=> <>
        <a onClick={(e)=> {setselectedCountry(country) ; setisOpen(!isOpen) ; selected_country(country)}} key={country}>{country}</a>
    </>)}
    
  
  </div>
</div>

  </>
  
  )
}

export default CountryDropDown