import React, { useState } from "react";

import { Layout } from "antd";
import colors from "../../assets/colors/color";
import "./Index.css";
import icons from "../../assets/icons";
import { CardsSection } from "../../components/cardsSection/CardsSection";
import Popup from "../../assets/select/Popup";
import { FilterComp } from "../../assets/others/Others";
// import DraggableComponent from "../../components/dragAndDrop/DraggableComponent";

const {Content, Sider } = Layout;

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);
 
  return (
    <Layout
      style={{
        minHeight: "80vh",
        backgroundColor: colors.theme,
      }}
    >
      <Sider width={!collapsed ? "250" : "20"} collapsed={collapsed} className="borderClass">
        <div className="demo-logo-vertical" />
        <div className="sidebar-options  ">
          {!collapsed ? (
            <div className="menueClass d-flex ">
              <div class="BVceZHOoUszsgw r6KV0yEdmnh3Op">S</div>

              <div className=" text-white text-class  my-1 px-2 d-flex ">
                Staffshaw Workspace <br />
                free
                <div
                  className="m-1 my-3 cursor-pointer"
                  onClick={(value) => setCollapsed(value)}
                >
                  {icons.sidebarclose}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="m-1  my-3 d-flex position-relative justify-content-end  text-white cursor-pointer"
              style={{ cursor: "pointer", left: "10px" }}
              onClick={(value) => setCollapsed(!value)}
            >
              {icons.sidebarOpen}
            </div>
          )}
        </div>
      </Sider>
      <Layout>
        <div
          style={{
            padding: 16,

            color: "white",
            background: colors.darkTheme,
          }}
        >
          <div className="headesss d-flex justify-content-between">
            <div className="fs-6 fw-bolder ">
              <span className="p-2 styleButton">Project Name</span>
              <span className=" mx-1 p-2 text-white styleButton">
                {icons.starIcon}
              </span>
              <span className=" mx-1 p-2 text-white styleButton">
                {icons.peopleGroupIcon}
              </span>
              <span className=" mx-1 text-white p-2 rounded-1   styleButton">
                <span>
                  {icons.listIcon}
                  <span className="mx-2">Board</span>
                  <span>{icons.downIcon}</span>
                </span>
              </span>
            </div>
            <div className="filter-Section">
          <div className="filterBox text-white d-flex p-1 px-2 justify-content-between   styleButton"  >
            <div className="filterIcon mx-2 ">
                    <Popup title="Filters" className='text-white bg-body p-0 bg-transparent border-0' icon={icons.filterIcon} component={<FilterComp  icon={icons.peopleGroupIcon} />} />
            </div>
            <div className="filterTittle fw-bolder">
              Filter
            </div>
          </div>

            
            </div>
          </div>{" "}
        </div>
        <Content
         style={{backgroundColor:colors.theme, width:"auto" , overflow:"auto"}}
        >
          <div
            style={{
              padding: 24,
              minHeight: 433,
              width:"1400px",
              // background: "white",
              background: colors.theme,
            }}
          >
            <CardsSection />
            {/* <DraggableComponent  /> */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Index;
