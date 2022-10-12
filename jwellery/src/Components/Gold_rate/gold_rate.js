import React,{useEffect,useState} from 'react';
import './gold_rate.css';



const GoldRate = () => {

  const [user, setUser] = useState(null);



    useEffect(() => {

        const fetchData = async () => {
            await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=Rky-poKvQZgyxCrGDNeyVPCLUeTuevmfhiokcsW46pQLW-wk7KzebTOw_b9BW0buetyx9UArcSMEw750oTIFWkJJ7H8hRf2JOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHazDq46HJvnOsU7Xy_7yCXXfHJObxDEZx9pLV2I1ppGDkJxMPup5kr2jwnCCtRQP6g-SKuxwD5df2yUO95VjXsAxcGAlqi9Im-AtBHn44AOQP9fnK6RNm5-Q&lib=M7M7IyMWCkqta1zKtEcBpYDM1EkJ5WyF8")
                .then((response) => response.json())
                .then((data) => {
                    setUser(data)
                    // data?.forEach(element => {
                    //     console.log(element.sis_id)
                    // });
                    
                });
        }

        fetchData();

    }, [])

    console.log(user)

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <div className="rate_container">
      <h1>Gold Rates and daily Updates</h1>
      <h3>HALLMARKED GOLD RATE FOR NEW GOLD ORNAMENTS</h3>
      <h3>Showroom time : 9.30am to 1pm, 3.30 to 8.00pm. SUNDAY Close.</h3>
      <div class="rate">
        {user && user.map((el)=>{
          return(
            <div>
              <h6> 22 CARAT BUYBACK RATE : {el.SELLING_22}</h6>
              <h6>18 CARAT SELLING RATE: {el.SELLING_18}</h6>
              <h6>22 CARAT BUYBACK RATE: {el.BUYBACK_22}</h6>
              <h6>Labor, Other Charges and GST {el.GST}% extra.</h6>
              <h6>Date {currentDate}.</h6>
              <div className='offer'>{el.Offers_Greets}</div>
            </div>
          
          )
        })}
      </div>
    </div>
  )
}



export default GoldRate;