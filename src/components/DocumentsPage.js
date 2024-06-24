import React, { useState } from 'react';

const DocumentsPage = () => {
  const [docsClicked, setDocsClicked] = useState({
    doc1: false,
    doc2: false,
    doc3: false,
    doc4: false,
  });

  const handleDocClick = (doc) => {
    window.open(`/assets/${doc}.pdf`, '_blank');
    setDocsClicked({ ...docsClicked, [doc]: true });
  };

  const allDocsClicked = Object.values(docsClicked).every((clicked) => clicked);

  return (
    <div>
      <header className="bg-blue-500">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-white text-3xl font-bold">Easy Access Account</h1>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="w-full max-w-4xl p-8 bg-white rounded shadow-lg">
          <h1 className="text-xl font-bold text-center">Important documents to review</h1>
          <p className="mt-4 text-gray-700">
            Please open and read all of the following important documents - you won't be able to apply until you've done so. 
            Please also save or print copies of these documents for future reference. If you have any questions about the contents 
            of these documents please contact us.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              onClick={() => handleDocClick('doc1')}
              className="w-full px-4 py-4 bg-gray-200 rounded text-left"
            >
              <span className="font-bold">FSCS Information</span>
              <br />
              <span className="text-gray-500">Read and review</span>
            </button>
            <button
              onClick={() => handleDocClick('doc2')}
              className="w-full px-4 py-4 bg-gray-200 rounded text-left"
            >
              <span className="font-bold">Terms & Conditions</span>
              <br />
              <span className="text-gray-500">Read and review</span>
            </button>
            <button
              onClick={() => handleDocClick('doc3')}
              className="w-full px-4 py-4 bg-gray-200 rounded text-left"
            >
              <span className="font-bold">Key Features & Summary Box</span>
              <br />
              <span className="text-gray-500">Read and review</span>
            </button>
            <button
              onClick={() => handleDocClick('doc4')}
              className="w-full px-4 py-4 bg-gray-200 rounded text-left"
            >
              <span className="font-bold">Privacy Policy</span>
              <br />
              <span className="text-gray-500">Read and review</span>
            </button>
          </div>
          <p className="mt-4 text-gray-700">
            If you click on the 'Start Application' button below, you confirm your agreement to both the General Savings Conditions 
            and Key Features and Summary Box document.
          </p>
          <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              if (allDocsClicked) {
                window.location.href = '/your-desired-page';
              }
            }}
            disabled={!allDocsClicked}
            className={`px-4 py-2 ${
              allDocsClicked ? 'bg-pink-500 text-white' : 'bg-pink-200 text-gray-500'
            } rounded`}
          >
            Start Application
          </button>
          </div>


        </div>
        <div className="w-full max-w-4xl p-4 mt-6 bg-white rounded shadow-lg text-center">
          <h2 className="text-lg font-bold">Need support?</h2>
          <p className="mt-2 text-gray-700">
            At OSB, we are committed to providing you with the best banking experience possible. We understand that sometimes you may 
            have questions or need assistance, which is why we've created our Help Centre to provide you with the information you need 
            quickly and easily.
          </p>
          <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">Contact with us</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
