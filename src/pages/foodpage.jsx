import React from 'react'
import Food from '../foodMenu/foods'
import '../foodMenu/foods.css'

const foodpage = () => {
  return (<>
    <div id='foodpageheader'>
      <h1>All Foods</h1>
      <div id='overlay'></div>  
    </div>
    <div id='searchsortfood'>
      <input type="search" name="" id="search--foods" placeholder="'I'm looking for... " />
      <select name="sort" id="sort--foods">
        <option value="default">Default</option>
        <option value="A-Z">Alphabetically A-Z</option>
        <option value="Z-A">Alphabetically Z-A</option>
        <option value="High">High Price</option>
        <option value="Low">Low Price</option>
      </select>
    </div>
    <Food/>
  </>
  )
}

export default foodpage