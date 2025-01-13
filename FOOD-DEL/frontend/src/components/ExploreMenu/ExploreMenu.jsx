import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets' 

const ExploreMenu = ({category, setCtegory}) => {
 return  (

    <div className='explore-menu' id='explore-menu'> 
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aliquam qui quae quasi magni similique non voluptas deserunt, quisquam saepe sit, debitis quis numquam nulla doloribus commodi tempore sequi veritatis.</p>
          <div className="explore-menu-list">
            {menu_list.map((item, index) =>{
              return(
                <div onClick={()=>setCtegory(prev =>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name? "active" : "" } src={item.menu_image} alt='' />
                    <p>{item.menu_name}</p>
                  </div>
              )
            })}
          </div>
          <hr />
    </div>
  )
}

export default ExploreMenu