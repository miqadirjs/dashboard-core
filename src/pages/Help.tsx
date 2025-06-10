import React from "react";

const HelpdeskForm: React.FC = () => {
  return (
    <div className="help_page mb-8">
      <div className="title_section">
        <h3 className="title">Help</h3>

      </div>
      <div className="form-container">
        <div className="form-header">
          <div className="form-icon">🎧</div>
          <p>
            For any support or technical issues please contact the Helpdesk at
          </p>
          <a href="mailto:support@coreintegrity.com.au" className="form-email">
            <i className="fas fa-envelope"></i>
            support@coreintegrity.com.au
          </a>
        </div>

        <form className="support-form">
          <div className="form-row two-cols">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
              <label>First Name</label>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
              <label>Last Name</label>
            </div>
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email *" required />
            <label>Email *</label>
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Phone" />
            <label>Phone</label>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Organisation *" required />
            <label>Organisation *</label>
          </div>

          <div className="form-group">
            <input type="text" placeholder="Subject *" required />
            <label>Subject *</label>
          </div>

          <div className="form-group">
            <textarea placeholder="Description *" required></textarea>
            <label>Description *</label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpdeskForm;