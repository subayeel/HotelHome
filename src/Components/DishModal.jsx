import React from "react";
import "../Styles/DishModal.scss";
import PrimaryButton from "./PrimaryButton"; 

function DishModal(props) {
  var show = props.show;
  var setModal = props.handleState;
  console.log(show)
  if (show==true) {
    return (
      <div className="m-container">
        <div className="m-body">
          <div className="m-header">
            <h2>Dish Name</h2>
            <h3>
              <span
                onClick={() => {
                  setModal(false);
                }}
              >
                &lt; Back
              </span>
            </h3>
          </div>
          <div className="m-content">
            <div className="m-aside">
              <div className="dish-image">
                <img
                  src="https://www.thespruceeats.com/thmb/yLyKgqIj6-SLt9gJkgkjfIZtfC0=/4300x2867/filters:no_upscale():max_bytes(150000):strip_icc()/chole-chickpea-curry-1957946-hero-01-cddf957cc78d4032ba29ec2adbc05a97.jpg"
                  alt=""
                />
              </div>
              <div className="price-container">
                <h3>4.6</h3>
                <h3>Rs. 200</h3>
              </div>
              <div className="ingredients">
                <h2>Ingredients</h2>
                <p>
                  sit, amet consectetur adipisicing elit. Nemo debitis
                  voluptatem similique quod impedit assumenda quo consequatur!
                  Dicta, deleniti exercitationem!
                </p>
              </div>
            </div>

            <div className="m-main-content">
              <div className="chef-details">
                <div className="chef-image">
                  <img
                    src="https://img.freepik.com/free-vector/chef-mascot-cartoon-illustration_27088-397.jpg?w=2000"
                    alt=""
                  />
                </div>
                <div>
                <h3>Chef Name</h3>
                  <div className="chef-message">
                    <h2>Hello there!</h2>
                  </div>
                  
                  <p>
                    
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Possimus nesciunt vero similique eos veritatis. Incidunt.
                    
                  </p>
                </div>
              </div>
              <div className="map-btn">
                <img
                  src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
                  alt=""
                />
                <div className="map-details">
                  <h5>
                    Estimate Time: <small>23 mins</small>
                  </h5>
                  <h5>
                    Distance: <small>3.5km</small>
                  </h5>
                </div>

                <div className="order-btn">
                  <PrimaryButton text="Order" />
                  <PrimaryButton text="Subscribe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default DishModal;
