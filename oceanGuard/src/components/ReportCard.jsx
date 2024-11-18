import React from "react";

const ReportCard = ({ report, index, onEdit, onDelete }) => (
  <div className="max-w-4xl p-6 mx-auto mb-6 bg-white border border-gray-200 rounded-xl shadow-lg transition hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-between items-center mb-4">
      <h5 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Report #{index + 1}
      </h5>
      <div className="flex space-x-3">
        <button
          onClick={() => onEdit(report)}
          className="p-2 rounded-full bg-blue-500 text-white transition hover:bg-blue-600 hover:shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3H5v14h14V10h-6z"
            />
          </svg>
        </button>
        <button
          onClick={() => onDelete(report.id)}
          className="p-2 rounded-full bg-red-500 text-white transition hover:bg-red-600 hover:shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <p className="text-base font-semibold text-gray-900 dark:text-gray-400 mb-1">
      Area: <span className="text-gray-600 font-normal">{report.area}</span>
    </p>
    <p className="text-base font-semibold text-gray-900 dark:text-gray-400 mb-1">
      Category:{" "}
      <span className="text-gray-600 font-normal">{report.reportCategory}</span>
    </p>
    <p className="text-base font-medium text-gray-900 dark:text-gray-400">
      Description: <br />
      <span className="text-gray-600 font-normal">{report.desc}</span>
    </p>
  </div>
);

export default ReportCard;
