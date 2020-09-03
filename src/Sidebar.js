import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

//material-ui imports
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PageviewIcon from "@material-ui/icons/Pageview";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import GroupIcon from "@material-ui/icons/Group";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AddIcon from "@material-ui/icons/Add";

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
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={AlternateEmailIcon} title="Mentions & reactions" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Saved items" />
      <SidebarOption Icon={PageviewIcon} title="Channel Browser" />
      <SidebarOption Icon={MarkunreadMailboxIcon} title="All unreads" />
      <SidebarOption Icon={QuestionAnswerIcon} title="All DMs" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={GroupIcon} title="People & User Groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr></hr>
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <SidebarOption Icon={AddIcon} title="Add a channel" />
      <hr></hr>
      <SidebarOption Icon={ExpandMoreIcon} title="Direct messages" />
      <SidebarOption Icon={AddIcon} title="Invite people" />
    </div>
  );
}

export default Sidebar;
