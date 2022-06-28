import React from "react";
import "../Styles/ProfileCard.scss"

function ProfileCard(props) {
  var show = props.show;
  const setProfileCard = props.handleState;
  var closeProfileCard = () => {
    setProfileCard(false);
  };
  
    return (
      <div className="profile-card-container">
        
        
          <div className="user-detail">
            <div className="detail-image">
              <img
                src="https://media.istockphoto.com/photos/portrait-smiling-african-american-businessman-in-blue-suit-sit-at-picture-id1341347262?b=1&k=20&m=1341347262&s=170667a&w=0&h=nWVSejAWgPgQi128JMemYKX0YX9xUgf18Nd3o4Ez6ic="
                alt=""
              />
            </div>
            <div className="detail-name">
              <span className="name-text">Subayeel</span>
              <span className="number-text">+91 9740730152</span>
            </div>
          </div>
        
        <hr></hr>
        <ul>My Orders</ul>
        <ul>My Cart</ul>
        <ul></ul>
        <ul>Subscribed Dishes</ul>
        <ul>Cook at Company</ul>
        <hr></hr>
        <ul>Notifications</ul>
        <ul>Settings</ul>
        <hr></hr>
        <ul>Help</ul>
        <ul>Logout</ul>
      </div>
    );
  
}

export default ProfileCard;
