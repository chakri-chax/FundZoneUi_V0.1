import React from 'react';

function SubmitSuccess({ formData }) {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Form Submitted Successfully!</h2>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Wallet Address:</strong> {formData.walletAddress}</p>
        <p><strong>Crop Name:</strong> {formData.cropName}</p>
      </div>
    </div>
  );
}

export default SubmitSuccess;
