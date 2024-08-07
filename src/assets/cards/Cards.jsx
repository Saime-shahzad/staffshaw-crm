import React, { useRef, useState } from "react";
import { Card } from "antd";
import "./Cards.css";
import TextArea from "antd/es/input/TextArea";
import { Buttons } from "../button/Buttons";
import icons from "../icons";
import Modals from "../modals/Modals";

export const Cards = ({ icon, data, cardsName, cardId }) => {
  const [isAddList, setIsAddList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inputValue=useRef( null)
  const handleAddList = () => {
      console.log("list Added");
      setIsAddList(true);
    };
    const handleAddCard = (e) => {
        e.preventDefault();
        console.log("card Added");
        setIsAddList(false);
        const getValue=inputValue?.current.resizableTextArea.textArea.value
        console.log("getValue>>>>", getValue);

  };
  return (
    <div className="card-parrent d-flex">
      <Card
        title={cardsName}
        bordered={false}
        style={{
          width: 300,
          backgroundColor: "#F1F2F4",
        }}
        className=""
      >
        {data?.map((items) => {
          return (
            <div className="parent d-flex justify-content-between bg-white hoverControl rounded-2  m-1 p-2">
              <div className="decription-parrent " onClick={() => setIsModalOpen(true)}>{items.description}</div>
              {isModalOpen && <Modals isModalOpen={isModalOpen}  setIsModalOpen={setIsModalOpen} />}
              <div className="">{icon}</div>
            </div>
          );
        })}
        {cardsName === "card1" && (
          <div>
            {isAddList ? (
              <div className="textArea-Parent w-100 p-1 border-dark-subtle">
                <TextArea
                  //    value={value}
                    //  onChange={(e) => inputValue(e.target.value)}
                    //  onChange={(e) => setValue(e.target.value)}
                  ref={inputValue}
                  placeholder="Add Task"
                  className="textArea-control"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
                <div className="d-flex pt-1">
                  <Buttons
                    className="fw-bold text-white "
                    type="button"
                    text="Add card"
                    onClick={handleAddCard}
                  />
                  <div
                    className=" p-1 mx-2 "
                    onClick={() => setIsAddList(false)}
                    style={{ cursor: "pointer" }}
                  >
                    {icons.popupclose}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="parent d-flex border-1 justify-content-between bg-white hoverControl rounded-2  m-1 p-2"
                onClick={handleAddList}
              >
                <div className="decription-parrent ">Add Your task</div>
                <div className="">{icon}</div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};
