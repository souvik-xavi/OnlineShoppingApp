import React from "react";
import { useSelector } from "react-redux";

function Profile(props) {
    const temp = useSelector((state) => state);

  return (
    <div style={{marginTop:"10%"}}>
    <main>
    <section class="top-card">
      <img src={"https://stoica.co/wp-content/uploads/2020/09/step-by-step-buyer-persona.png"} alt="user picture"/>
      <div class="menu-icon">
        <div class="menu item1"></div>
        <div class="menu item2"></div>
      </div>
      <div class="name">
        <p>{temp.user.name} </p>
      </div>
    </section>

    <section class="middle-card">
      <h3>About</h3>
      <p>{temp.user.role.toUpperCase()}</p>
      <h3>Contact</h3>
      <p>{temp.user.email}</p>
    </section>

      
      <footer>
    </footer>
  </main>
    </div>
  );
}

export default Profile;
