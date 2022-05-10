import React from 'react';
import '../sidebar/sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">
          ABOUT ME
        </span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFm74QqpeUBB6YeO2EBOly7--NCfvsCO_YFQ&usqp=CAU" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatem, tenetur magni non soluta eveniet. Odit libero commodi aspernatur maxime autem veritatis consequatur magnam possimus tempore quibusdam, neque reiciendis dignissimos?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Like</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square" />
          <i className="sidebarIcon fa-brands fa-twitter" />
          <i className="sidebarIcon fa-brands fa-pinterest" />
          <i className="sidebarIcon fa-brands fa-instagram-square" />
        </div>
      </div>
    </div>
  )
}
