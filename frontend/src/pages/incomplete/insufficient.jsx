import React from 'react';
import './insufficient.css';  // Make sure this CSS path is correct

const resolutionOptions = [
  { id: 1, title: 'Modify Order', description: 'Change Order' },
  { id: 2, title: 'Add Deposit', description: 'Deposit funds into your account' },
];

function InsufficientFunds() {
  return (
    <div>
      <hr />
      <h2 class ="title-header">How would you like to resolve this issue?</h2>
      <hr />
      <div className="card-container">
        {resolutionOptions.map(option => (
          <ResolutionCard key={option.id} title={option.title} description={option.description} />
        ))}
      </div>
      <div className="cancel-button-container">
        <button className="cancel-button">Cancel Order</button>  {/* Separate Cancel button */}
      </div>
    </div>
  );
}

function ResolutionCard({ title, description }) {
  return (
    <div className="card">
      <div className="center">
        <div className="property-card">
          <div className="property-image">
            {/* Placeholder for image if needed */}
          </div>
          <div className="property-description">
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
          <div className="property-social-icons">
            {/* Placeholder for social icons or other interactive elements */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsufficientFunds;
