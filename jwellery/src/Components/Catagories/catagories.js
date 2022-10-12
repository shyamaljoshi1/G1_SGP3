import React from "react";
import "./catagories.css";
import img1 from "../../assets/five.png";

const Catagories = () => {
  return (
    <div className="catagories">
      <h1>Discover our range</h1>
      <div class="row">
        <div class="col-1-of-2">
          <div className="img">
            <img src={img1} alt="png" style={{height:'40rem',padding:'4rem'}} />
          </div>
        </div>
        <div class="col-1-of-2">
          <h2>WELCOME TO  J BABUBHAI JEWELLERS</h2>
          <h6>
          Leading Jewellery business house of Junagadh with 100% Hallmarked Gold jewellery for every age and budget.
          </h6>
          <h6>
          Gujarat’s top 10 achiever of Hallmark licence for providing assured quality gold. We offers best craftsmanship on customized /ordered ornaments for 99.99% customer’s satisfaction.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
