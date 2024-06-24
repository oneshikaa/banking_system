import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const PersonalDetailsForm = () => {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [manualInput, setManualInput] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    secondaryStreet: '',
    city: '',
    postcode: '',
    county: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Address saved!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Toaster />
      {!showAddressForm ? (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Important documents to review</h2>
          <p className="mb-4">Please open and read all of the following important documents - you won't be able to apply until you've done so. Please also save or print copies of these documents for future reference. If you have any questions about the contents of these documents please contact us.</p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">FSCS Information</li>
            <li className="mb-2">Terms & Conditions</li>
            <li className="mb-2">Key Features & Summary Box</li>
            <li className="mb-2">Privacy Policy</li>
          </ul>
          <button
            onClick={() => setShowAddressForm(true)}
            className="bg-emerald-600 text-white py-2 px-4 rounded disabled:opacity-50"
          >
            Start Application
          </button>
        </div>
      ) : (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Your address</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {manualInput ? (
              <>
                <div>
                  <label htmlFor="street" className="block font-bold">Street Name:</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={address.street}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="secondaryStreet" className="block font-bold">Secondary Street (Optional):</label>
                  <input
                    type="text"
                    id="secondaryStreet"
                    name="secondaryStreet"
                    value={address.secondaryStreet}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block font-bold">Town or City:</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={address.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postcode" className="block font-bold">Postcode:</label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={address.postcode}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="county" className="block font-bold">County (Optional):</label>
                  <input
                    type="text"
                    id="county"
                    name="county"
                    value={address.county}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </>
            ) : (
              <div>
                <label htmlFor="search-address" className="block font-bold">Search Address:</label>
                <input
                  type="text"
                  id="search-address"
                  name="search-address"
                  className="w-full p-2 border rounded"
                  required
                />
                <button type="button" className="mt-2 bg-emerald-600 text-white py-2 px-4 rounded">Search</button>
                <p className="mt-2">Automatic address finder feature coming soon!</p>
              </div>
            )}
            <button
              type="button"
              onClick={() => setManualInput(!manualInput)}
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              {manualInput ? 'Search address automatically' : 'Enter address manually'}
            </button>
            <div className="flex justify-between">
              <button type="submit" className="bg-emerald-600 text-white py-2 px-4 rounded">Save Address</button>
              <button
                type="button"
                className="bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => setShowAddressForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PersonalDetailsForm;
