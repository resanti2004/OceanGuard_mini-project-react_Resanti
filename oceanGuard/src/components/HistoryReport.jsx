import React, { useEffect, useState } from "react";
import axios from "axios";
import useReportStore from "../store/useReportStore"; // Ganti dengan path yang sesuai

const HistoryReport = () => {
  const { reports, setReports, updateReport } = useReportStore();
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(
          "https://6735d0975995834c8a943305.mockapi.io/report/v1/report"
        );
        setReports(response.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, [setReports]);

  const handleOpenModal = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  // Fungsi untuk memperbarui laporan ke API
  const handleEditReport = async (updatedReport) => {
    try {
      const response = await axios.put(
        `https://6735d0975995834c8a943305.mockapi.io/report/v1/report/${updatedReport.id}`,
        updatedReport
      );
      updateReport(response.data); // Perbarui laporan di Zustand
      setIsModalOpen(false); // Tutup modal setelah penyimpanan
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };

  // Fungsi untuk menghapus laporan dari API
  const handleDeleteReport = async (id) => {
    try {
      await axios.delete(
        `https://6735d0975995834c8a943305.mockapi.io/report/v1/report/${id}`
      );
      setReports(reports.filter((report) => report.id !== id)); // Hapus laporan dari Zustand
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  return (
    <div className="border-gray-300 px-16 pt-8 mb-4">
      <h1 className="text-3xl font-bold text-primary mb-0.5">History Report</h1>
      <p className="text-base text-gray-600 mb-4">
        A list of reports you have previously submitted.
      </p>
      <div className="max-w-full h-0.5 bg-primary mx-auto mt-1 mb-10"></div>

      {reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        reports.map((report, index) => (
          <div
            key={index}
            className="max-w-3xl p-6 mx-auto mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-between items-center">
              <a href="#">
                <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Report #{index + 1}
                </h5>
              </a>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleOpenModal(report)}
                  className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700"
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
                  onClick={() => handleDeleteReport(report.id)}
                  className="p-2 rounded-full bg-red-500 text-white hover:bg-red-700"
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
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {report.area}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {report.desc}
            </p>
          </div>
        ))
      )}

      {/* Modal untuk menampilkan detail laporan */}
      {isModalOpen && selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <h2 className="text-2xl font-bold mb-4">Edit Report</h2>
            <div className="mb-4">
              <input
                type="text"
                value={selectedReport.area}
                onChange={(e) =>
                  setSelectedReport({
                    ...selectedReport,
                    area: e.target.value,
                  })
                }
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                value={selectedReport.country}
                onChange={(e) =>
                  setSelectedReport({
                    ...selectedReport,
                    country: e.target.value,
                  })
                }
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                value={selectedReport.city}
                onChange={(e) =>
                  setSelectedReport({
                    ...selectedReport,
                    city: e.target.value,
                  })
                }
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                value={selectedReport.region}
                onChange={(e) =>
                  setSelectedReport({
                    ...selectedReport,
                    region: e.target.value,
                  })
                }
                className="border p-2 w-full rounded"
              />
              <textarea
                rows="5"
                type="text"
                value={selectedReport.desc}
                onChange={(e) =>
                  setSelectedReport({
                    ...selectedReport,
                    desc: e.target.value,
                  })
                }
                className="border p-2 w-full rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => handleEditReport(selectedReport)}
                className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="text-gray-700 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryReport;
