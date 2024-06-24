import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import

const PersonalDetailsForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Updated hook

  const calculateAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const isValidDate = (day, month, year) => {
    const date = new Date(`${year}-${month}-${day}`);
    return date && (date.getMonth() + 1) == month && date.getDate() == day && date.getFullYear() == year;
  };

  const handleSubmit = () => {
    let isValid = true;
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'This field is mandatory';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'This field is mandatory';
      isValid = false;
    }

    if (!dobDay.trim() || !dobMonth.trim() || !dobYear.trim() || !isValidDate(dobDay, dobMonth, dobYear)) {
      newErrors.dob = 'Invalid date';
      isValid = false;
    } else {
      const birthDate = new Date(`${dobYear}-${dobMonth}-${dobDay}`);
      const age = calculateAge(birthDate);

      if (age < 18) {
        newErrors.dob = 'You are not 18';
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      // Progress to the next step
      navigate('/nextstep'); // Updated navigation
    }
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Personal Details</h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-2 border rounded-lg"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full px-3 py-2 border rounded-lg"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="dobDay"
              placeholder="DD"
              className="w-1/3 px-3 py-2 border rounded-lg"
              value={dobDay}
              onChange={(e) => setDobDay(e.target.value)}
            />
            <input
              type="text"
              id="dobMonth"
              placeholder="MM"
              className="w-1/3 px-3 py-2 border rounded-lg"
              value={dobMonth}
              onChange={(e) => setDobMonth(e.target.value)}
            />
            <input
              type="text"
              id="dobYear"
              placeholder="YYYY"
              className="w-1/3 px-3 py-2 border rounded-lg"
              value={dobYear}
              onChange={(e) => setDobYear(e.target.value)}
            />
          </div>
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-pink-500 w-full text-white py-2.5 rounded-lg hover:bg-emerald-700"
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default PersonalDetailsForm;
