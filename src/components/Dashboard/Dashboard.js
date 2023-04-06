import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Nav } from '@themesberg/react-bootstrap';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar${collapsed ? " collapsed" : ""}`}>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/users">
            Users
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/servers">
            Servers
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/access">
            Access
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="collapse-button d-md-none" onClick={onCollapse}>
        <FontAwesomeIcon icon={collapsed ? faAngleRight : faAngleDown} />
      </div>
      <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
        <FontAwesomeIcon icon={faTimes} />
      </Nav.Link>
    </div>
  );
};

export default Dashboard;
