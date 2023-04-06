import React from 'react';
import "./landing.css"

function landing() {
  return (
    <div className="section-one">
      <header className="main-header">
        <h1>Cockpit Project</h1>
        <h2>A simple and powerful web interface for your servers</h2>
      </header>
      <div className="background-image">
        <img src="https://cockpit-project.org/img/home_bg.jpg" alt="Cockpit Project Background" />
      </div>
      <div className="additional-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida augue sed ante consectetur, ac lobortis ipsum efficitur. Morbi vitae luctus nulla, sit amet pellentesque tellus. Vestibulum auctor ex in odio venenatis, id maximus leo pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque sed enim sollicitudin, viverra mauris nec, maximus sapien. Donec sed luctus velit. Praesent varius, turpis vel interdum malesuada, felis lorem egestas ante, at aliquet velit urna quis ex. Fusce ac lacinia nulla. Fusce vitae ligula sed orci porttitor malesuada.</p>
      </div>
    </div>
  );
}

export default landing;
