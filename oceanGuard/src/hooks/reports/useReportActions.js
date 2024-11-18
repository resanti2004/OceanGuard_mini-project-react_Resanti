import axios from "axios";

const useReportActions = (reports, setReports, updateReport) => {
  const handleEditReport = async (updatedReport, onClose) => {
    try {
      const response = await axios.put(
        `https://6735d0975995834c8a943305.mockapi.io/report/v1/report/${updatedReport.id}`,
        updatedReport
      );
      updateReport(response.data);
      alert("Report updated successfully!"); // Alert on success
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error updating report:", error);
    }
  };

  const handleDeleteReport = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://6735d0975995834c8a943305.mockapi.io/report/v1/report/${id}`
      );
      setReports(reports.filter((report) => report.id !== id));
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };

  return { handleEditReport, handleDeleteReport };
};

export default useReportActions;
