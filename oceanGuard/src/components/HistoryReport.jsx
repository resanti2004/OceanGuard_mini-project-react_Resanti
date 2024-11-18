import React, { useState } from "react";
import useReportStore from "../store/useReportStore";
import { useFetchReports, useReportActions } from "../hooks/reports";
import ReportCard from "./ReportCard";
import ReportModal from "./ReportModal";

const HistoryReport = () => {
  const { reports, setReports, updateReport } = useReportStore();
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch reports on component mount
  useFetchReports(setReports);

  // Custom hooks for report actions
  const { handleEditReport, handleDeleteReport } = useReportActions(
    reports,
    setReports,
    updateReport
  );

  // Open the modal with the selected report
  const openModal = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  // Close the modal and reset selected report
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  return (
    <div className="px-52 pt-28">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary mb-1">History Report</h1>
        <p className="text-base text-gray-600">
          A list of reports you have previously submitted.
        </p>
        <div className="max-w-full h-0.5 bg-primary mt-2"></div>
      </div>

      {/* Reports Section */}
      {reports.length > 0 ? (
        reports.map((report, index) => (
          <ReportCard
            key={report.id}
            report={report}
            index={index}
            onEdit={openModal}
            onDelete={handleDeleteReport}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No reports found.</p>
      )}

      {/* Modal for editing report */}
      {isModalOpen && selectedReport && (
        <ReportModal
          isOpen={isModalOpen}
          report={selectedReport}
          setReport={setSelectedReport}
          onSave={handleEditReport}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default HistoryReport;
