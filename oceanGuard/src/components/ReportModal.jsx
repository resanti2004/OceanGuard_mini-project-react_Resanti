import React from "react";

const ReportModal = ({ isOpen, report, onSave, onClose, setReport }) => {
  if (!isOpen || !report) return null;

  const handleSave = () => {
    onSave(report, onClose); // Pass onClose to handleSave
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Detail & Edit Report</h2>
        <div className="mb-4">
          <div className="mb-4">
            <label
              htmlFor="area"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Beach/ Area Name
            </label>
            <input
              type="text"
              id="area"
              value={report.area}
              onChange={(e) => setReport({ ...report, area: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              value={report.country}
              onChange={(e) =>
                setReport({ ...report, country: e.target.value })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="region"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Region
            </label>
            <input
              type="text"
              id="region"
              value={report.region}
              onChange={(e) => setReport({ ...report, region: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              value={report.city}
              onChange={(e) => setReport({ ...report, city: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Issue Description
            </label>
            <textarea
              rows="5"
              id="desc"
              value={report.desc}
              onChange={(e) => setReport({ ...report, desc: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSave} // Trigger save function with close action
            className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="text-gray-700 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
