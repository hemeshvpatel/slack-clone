import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

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
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption title="YouTube" />
    </div>
  );
}

export default Sidebar;
