import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, category , img_link} = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img_link} alt="img" className='photo' />
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
