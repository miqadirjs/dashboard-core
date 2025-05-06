import React, { useState } from "react";
import { FaFileInvoice, FaRegUser } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import { RxDragHandleDots2 } from "react-icons/rx";

interface ClientsCardProps {
  imageSrc: string;
  usedUsers: number;
  totalUsers: number;
  description: string;
  reportTotal: number;
  reportDescription: string;
  onSwitch?: () => void;
}

const ClientsCard: React.FC<ClientsCardProps> = ({
  imageSrc,
  usedUsers,
  totalUsers,
  description,
  reportTotal,
  reportDescription,
  onSwitch,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-white Clients_Card position-relative">
      <div className="top_select_opt d-flex justify-content-between align-items-center px-2 py-1">
        <span>
          <RxDragHandleDots2 />
        </span>
        <span
          className="three_dots position-relative"
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        >
          <HiDotsVertical />
          {menuOpen && (
            <div
              className="card_menu position-absolute bg-white shadow-sm p-2"
              style={{ right: 0, top: "100%", zIndex: 10 }}
            >
              <ul className="list-unstyled mb-0">
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("View Details")}
                >
                  View Details
                </li>
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("Edit")}
                >
                  Edit
                </li>
                <li
                  className="menu_item py-1 px-2"
                  onClick={() => alert("Delete")}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </span>
      </div>

      <div className="client_card_img">
        <img src={imageSrc} alt="Client" />
      </div>

      <div className="client_card_bottom">
        <div className="client_card_bottom_left">
          <div className="stat_item">
            <span className="bg_icon">
              <FaRegUser />
            </span>
            <span className="number">
              {usedUsers}/{totalUsers}
            </span>
            <span className="client_desc">
              <p>{description}</p>
            </span>
          </div>

          <div className="stat_item">
            <span className="bg_icon">
              <FaFileInvoice />
            </span>
            <span className="number">{reportTotal}</span>
            <span className="client_desc">
              <p>{reportDescription}</p>
            </span>
          </div>
        </div>

        <div className="client_card_bottom_right">
          <div className="switch_btn">
            <button className="switch_cta" onClick={onSwitch}>
              <TbExchange /> Switch Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCard;
