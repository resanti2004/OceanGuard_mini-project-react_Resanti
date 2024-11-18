import { useEffect } from "react";
import axios from "axios";

const useFetchReports = (setReports) => {
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
};

export default useFetchReports;
