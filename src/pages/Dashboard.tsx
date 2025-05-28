import React, { useState } from "react";
import Card from "../components/ui/Card";
import CustomModal from "components/ui/CustomModal";

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="mb-8">
      <div className="title_section">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Active Modules
        </h3>

        <div
          className="active_inactiveTab nav nav-tabs"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Active
          </button>
          <button
            // onClick={openModal}
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Inactive
          </button>
          <CustomModal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Case+ is In-active"
            bodyImageUrl="/images/dashboard-icon.png" // Optional image for modal body
          >
            <p>Are you sure you want to proceed?</p>
            <div className="modal_cta_btn">
              <button onClick={closeModal} className="card_btn ctaborder">
                Learn More
              </button>
              <button className="card_btn cta">Activate</button>
            </div>
          </CustomModal>
        </div>
      </div>

      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <Card
                title="SPEAKUP+"
                icon={<img src="/images/speakup-icon.png" alt="SpeakUp Icon" />}
                description="Ethics and Whistleblower Reporting"
                textValue="2/2 Licenses"
                color="green"
                buttons={[
                  {
                    label: "Manage",
                    onClick: () => alert("Navigating to Dashboard"),
                  },
                ]}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Card
                title="Dashboard+"
                icon={
                  <img src="/images/dashboard-icon.png" alt="Dashboard Icon" />
                }
                description="Interactive Visual Management Tool"
                value={75}
                color="blue"
                buttons={[
                  {
                    label: "Learn More",
                    onClick: () => alert("Navigating to Dashboard"),
                  },
                  {
                    label: "Schedule a call",
                    onClick: () => alert("Navigating to Dashboard"),
                  },
                ]}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Card
                title="Case+"
                icon={<img src="/images/case.png" alt="Person Search Icon" />}
                description="Case Management System"
                value={25}
                color="blue"
                buttons={[
                  {
                    label: "Coming soon",
                    onClick: () => alert("Navigating to Dashboard"),
                  },
                  {
                    label: "Schedule a call",
                    onClick: () => alert("Navigating to Dashboard"),
                  },
                ]}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Card
                title="My Users"
                icon={<img src="/images/groups.png" alt="Groups Icon" />}
                description="Access Management"
                value={25}
                color="green"
                buttons={[
                  {
                    label: "Learn more",
                    onClick: () => alert("Navigating to Dashboard"),
                  },
                ]}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Card
                title="System Logs"
                icon={<img src="/images/logout.png" alt="Users Icon" />}
                description="Access Information"
                value={25}
                color="green"
                buttons={[
                  {
                    label: "Learn more",
                    onClick: () => alert("Navigating to Dashboard"),
                  },
                ]}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <Card
                title="Help"
                icon={<img src="/images/front_hand.png" alt="Help Icon" />}
                description="Support or Technical Issues"
                value={25}
                color="green"
                buttons={[
                  {
                    label: "Learn more",
                    onClick: () => alert("Navigating to Dashboard"),
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="row opacity-5">
            <div className="col-12 col-md-6 mb-3" onClick={openModal}>
              <Card
                title="Dashboard+"
                icon={
                  <img src="/images/dashboard-icon.png" alt="Dashboard Icon" />
                }
                description="Average Time to Close Reports"
                value={75}
                color="blue"
              />
            </div>
            <div className="col-12 col-md-6 mb-3" onClick={openModal}>
              <Card
                title="SPEAKUP+"
                icon={<img src="/images/speakup-icon.png" alt="SpeakUp Icon" />}
                description="Average Time to Close Reports"
                value={25}
                color="green"
              />
            </div>
            <div className="col-12 col-md-6 mb-3" onClick={openModal}>
              <Card
                title="ADVISE +"
                icon={<img src="/images/advise.png" alt="Person Search Icon" />}
                description="Average Time to Close Reports"
                value={25}
                color="blue"
              />
            </div>
            <div className="col-12 col-md-6 mb-3" onClick={openModal}>
              <Card
                title="CASE +"
                icon={<img src="/images/case.png" alt="Groups Icon" />}
                description="Average Time to Close Reports"
                value={25}
                color="green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
