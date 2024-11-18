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

  reports: [],
  setReportData: (newData) =>
    set((state) => ({
      reportData: { ...state.reportData, ...newData },
    })),

  setReports: (newReports) => set({ reports: newReports }),

  updateReport: (updatedReport) =>
    set((state) => ({
      reports: state.reports.map((report) =>
        report.id === updatedReport.id ? updatedReport : report
      ),
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
