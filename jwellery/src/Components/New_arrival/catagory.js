import React, { useState,useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './catagory.css';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const  Catagory = () => {


  // const [user, setUser] = useState(null);



  //   useEffect(() => {

  //       const fetchData = async () => {
  //           await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=Rky-poKvQZgyxCrGDNeyVPCLUeTuevmfhiokcsW46pQLW-wk7KzebTOw_b9BW0buetyx9UArcSMEw750oTIFWkJJ7H8hRf2JOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHazDq46HJvnOsU7Xy_7yCXXfHJObxDEZx9pLV2I1ppGDkJxMPup5kr2jwnCCtRQP6g-SKuxwD5df2yUO95VjXsAxcGAlqi9Im-AtBHn44AOQP9fnK6RNm5-Q&lib=M7M7IyMWCkqta1zKtEcBpYDM1EkJ5WyF8")
  //               .then((response) => response.json())
  //               .then((data) => {
  //                   setUser(data)
  //                   // data?.forEach(element => {
  //                   //     console.log(element.sis_id)
  //                   // });
                    
  //               });
  //       }

  //       fetchData();

  //   }, [])

  //   console.log(user)




  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2 >Gallery</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default Catagory;
