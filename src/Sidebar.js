import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slack-Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            Hemesh Patel
          </h3>
        </div>
        <CreateTwoToneIcon />
      </div>
    </div>
  );
}

export default Sidebar;
