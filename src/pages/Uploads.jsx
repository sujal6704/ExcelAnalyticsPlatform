// File: src/components/FileUpload.js

import React, { useState } from 'react';

function FileUpload() {
  const [fileNames, setFileNames] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFileNames(files.map(file => file.name));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFileNames(files.map(file => file.name));
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Upload files, Get charts</h1>
      <p className="text-lg mb-10 text-center">Easily upload Excel or CSV files and generate beautiful charts and graphs.</p>

      <div
        className="border-2 border-dashed border-yellow-400 rounded-lg p-10 w-full max-w-2xl text-center cursor-pointer bg-gray-800 bg-opacity-30"
        onDrop={handleDrop}
        onDragOver={preventDefault}
        onDragEnter={preventDefault}
      >
        <label className="cursor-pointer">
          <input type="file" multiple onChange={handleFileChange} className="hidden" />
          <p className="text-xl font-semibold">
            click here or drop files to upload or transfer
          </p>
          <p className="text-sm mt-2">(Max 50 files, 10 GB per file, total 100 GB)</p>

        </label>
      </div>

      {fileNames.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl mb-2">Files to upload:</h2>
          <ul className="list-disc pl-6">
            {fileNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
