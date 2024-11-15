import { create } from "zustand";

const useReportStore = create((set) => ({
  reportData: {
    area: "",
    country: "",
    city: "",
    region: "",
    category: "",
    desc: "",
    image: null,
  },
  reports: [], // State untuk menyimpan history laporan
  setReportData: (newData) =>
    set((state) => ({
      reportData: { ...state.reportData, ...newData },
    })),
  setReports: (newReports) => set({ reports: newReports }), // Fungsi untuk mengubah laporan yang diambil dari API
  updateReport: (updatedReport) =>
    set((state) => ({
      reports: state.reports.map((report) =>
        report.id === updatedReport.id ? updatedReport : report
      ), // Mengupdate laporan di dalam daftar
    })),
  resetReportData: () =>
    set({
      reportData: {
        area: "",
        country: "",
        city: "",
        region: "",
        category: "",
        desc: "",
        image: null,
      },
    }),
}));

export default useReportStore;
