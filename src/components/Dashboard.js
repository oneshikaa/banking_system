import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import jsPDF from 'jspdf';

const Dashboard = () => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Account Statement', 10, 10);
    doc.save('account-statement.pdf');
  };

  const handleEmailStatement = async () => {
    const doc = new jsPDF();
    doc.text('Account Statement', 10, 10);
    const pdfOutput = doc.output('datauristring').split(',')[1];

    try {
      const response = await fetch('http://localhost:3001/email-statement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'customer-email@example.com',
          statementPdf: pdfOutput
        })
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email');
    }
  };

  return (
    <section className="p-6 flex flex-col min-h-screen">
      <div className="flex items-center mb-6">
        {/* Account settings dropdown */}
      </div>

      <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center mb-6">
        <div>
          <div>Sort code</div>
          <div>60-84-56</div>
        </div>
        <div>
          <div>Account number</div>
          <div>82918037</div>
        </div>
        <div className="bg-pink-500 p-4 rounded-md">
          <div>Total balance</div>
          <div>£0.00</div>
          <div>Available balance</div>
          <div>£0.00</div>
        </div>
        <div>
          <div>Gross Interest</div>
          <div>5.04%</div>
        </div>
        <div>
          <div>AER Interest</div>
          <div>5.16%</div>
        </div>
        <div>
          <button className="btn">How to move your funds</button>
          <button className="btn">Manage account</button>
        </div>
      </div>

      <div className="flex space-x-6 mb-6">
        <button className="btn active">Transactions</button>
        <button className="btn">Statements</button>
      </div>

      <div className="flex flex-1 justify-between mb-6">
  <div className="flex-1 flex flex-col bg-white p-6 border rounded-md">
    <div className="flex items-center justify-between mb-4">
      <div className="text-lg font-semibold">Monthly statements</div>
      <div className="relative">
        <select className="absolute right-0 top-0 p-2 border rounded-md">
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
    <div className="flex-1 p-6 bg-gray-100 border rounded-md text-center">
      <p>No monthly statements available</p>
    </div>
  </div>
  <div className="flex-1 flex flex-col bg-white p-6 border rounded-md">
    <div className="mb-4 text-lg font-semibold">Certificate of interest</div>
    <div className="flex-1 p-6 bg-gray-100 border rounded-md text-center">
      <p>No certificate of interest available</p>
    </div>
  </div>
</div>


      <div className="mt-auto flex space-x-6">
        <button onClick={handleDownloadPDF} className="btn flex items-center space-x-2">
          <FaDownload />
          <span>Download Statement</span>
        </button>
        <button onClick={handleEmailStatement} className="btn flex items-center space-x-2">
          <FaEnvelope />
          <span>Email Statement</span>
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
