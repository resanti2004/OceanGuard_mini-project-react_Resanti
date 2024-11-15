import React, { useState } from "react";
import axios from "axios";
import useReportStore from "../store/useReportStore";

function Report() {
  const { reportData, setReportData, resetReportData } = useReportStore();
  const [currentStep, setCurrentStep] = useState(1);

  // Fungsi untuk melanjutkan ke langkah berikutnya
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Fungsi untuk kembali ke langkah sebelumnya
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Ambil file pertama yang diupload
    if (file) {
      console.log(file.type); // Periksa tipe file (image, video, dll)

      if (file.type.startsWith("image")) {
        // Proses gambar jika file adalah gambar
        useReportStore.getState().setReportData({ image: file });
      } else if (file.type.startsWith("video")) {
        // Proses video jika file adalah video
        useReportStore.getState().setReportData({ image: file });
      } else {
        console.log("Unsupported file type");
      }
    }
  };

  const submitForm = async () => {
    try {
      const response = await axios.post(
        "https://6735d0975995834c8a943305.mockapi.io/report/v1/report",
        reportData
      );
      console.log("Form submitted successfully:", response.data);
      resetReportData();
      alert("Report submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit report. Please try again.");
    }
  };

  return (
    <>
      <div className=" border-gray-300 px-16 pt-8 mb-4">
        <h1 className="text-3xl font-bold text-primary mb-0.5">Report form</h1>
        <p className="text-base text-gray-600 mb-4">
          Follow the simple 4 steps to complete your information
        </p>
        <div className="max-w-full h-0.5 bg-primary mx-auto mt-1 mb-10"></div>
      </div>

      <div className="max-w-2xl mx-auto my-8 p-10 border border-gray-300 rounded-lg shadow-lg">
        {/* Step Indicator */}
        <ol className="flex items-center w-full mb-4 sm:mb-5">
          {[1, 2, 3, 4].map((step) => (
            <li
              key={step}
              className={`flex w-full items-center ${
                currentStep >= step
                  ? "text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 dark:after:border-blue-800"
                  : "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 dark:after:border-gray-700"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 ${
                  currentStep >= step
                    ? "bg-blue-100 dark:bg-blue-800"
                    : "bg-gray-100 dark:bg-gray-700"
                } rounded-full lg:h-12 lg:w-12 shrink-0`}
              >
                {/* Step Icon */}
                <svg
                  className={`${
                    currentStep >= step
                      ? "w-4 h-4 lg:w-6 lg:h-6 text-blue-600 dark:text-blue-300"
                      : "w-4 h-4 lg:w-6 lg:h-6 text-gray-600 dark:text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {/* Icon Path (can be replaced with appropriate SVG path per step) */}
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </div>
            </li>
          ))}
        </ol>

        {/* Step Content */}
        {currentStep === 1 && (
          <div>
            <form>
              <p className="font-light mb-1.5 text-sm">Step 1/4</p>
              <h3 className="mb-1.5 text-2xl font-semibold leading-none text-primary">
                Location Information
              </h3>
              <p className="mb-6 font-light">
                Upload your personal information to proceed to the next step{" "}
              </p>
              <div className="grid gap-4 mb-4 sm:grid-cols-1 px-16">
                <div>
                  <label
                    htmlFor="area"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Beach/ Area Name
                  </label>
                  <input
                    type="text"
                    name="area"
                    id="area"
                    value={reportData.area}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contry"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={reportData.country}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={reportData.city}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="region"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Region
                  </label>
                  <input
                    type="text"
                    name="region"
                    id="region"
                    value={reportData.region}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end ">
                <button
                  type="button"
                  className="w-1/4 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5 mt-6"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <form>
              <p className="font-light mb-1.5 text-sm">Step 2/4</p>
              <h3 className="mb-1.5 text-2xl font-semibold leading-none text-primary">
                Issue Type
              </h3>
              <p className="mb-6 font-light">
                Upload your personal information to proceed to the next step
              </p>
              <div className="grid gap-4 mb-4 sm:grid-cols-1 px-16">
                <div>
                  <label className="block mb-2 text-base font-medium text-gray-900">
                    Report Category
                  </label>
                  <div className="flex flex-col gap-2">
                    {[
                      "Plastic Waste",
                      "Pollution/ Spillage",
                      "Ecosystem Damage",
                      "Neglected Area",
                      "Marine Wildlife Hazard",
                    ].map((category) => (
                      <label key={category} className="font-light text-sm">
                        <input
                          type="radio"
                          name="reportCategory"
                          value={category}
                          checked={reportData.reportCategory === category}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5 mr-2"
                          required
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="desc"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Issue Description
                  </label>
                  <textarea
                    rows="5"
                    name="desc"
                    id="issueDescription"
                    value={reportData.desc} // Menambahkan value
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Type the description here"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-x-4 mt-12">
                <button
                  type="button"
                  className="w-1/4 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <form>
              <p className="font-light mb-1.5 text-sm">Step 3/4</p>
              <h3 className="mb-1.5 text-2xl font-semibold leading-none text-primary">
                Supporting Photos or Videos
              </h3>
              <p className="mb-6 font-light">
                Upload your personal information to proceed to the next step
              </p>
              <div className="grid gap-4 mb-4 sm:grid-cols-1 px-16">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-x-4 mt-12">
                <button
                  type="button"
                  className="w-1/4 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-2xl text-sm px-5 py-2.5"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStep === 4 && (
          <div>
            <form>
              <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
                Step 4: Review & Submit
              </h3>
              <div className="mb-4">
                <p>
                  <strong>Beach/ Area Name</strong> {reportData.area}
                </p>
                <p>
                  <strong>Country:</strong> {reportData.country}
                </p>
                <p>
                  <strong>City:</strong> {reportData.city}
                </p>
                <p>
                  <strong>Region:</strong> {reportData.region}
                </p>
                <p>
                  <strong>Report Category:</strong> {reportData.category}
                </p>
                <p>
                  <strong>Issue Description:</strong> {reportData.desc}
                </p>
                {/* Menampilkan gambar jika ada */}
                {reportData.image && (
                  <div>
                    <strong>Uploaded Media:</strong>
                    {reportData.image.type.startsWith("image") ? (
                      <img
                        src={URL.createObjectURL(reportData.image)}
                        alt="Uploaded"
                        className="mt-2"
                        style={{ maxWidth: "100%", maxHeight: "300px" }}
                      />
                    ) : reportData.image.type.startsWith("video") ? (
                      <video
                        controls
                        src={URL.createObjectURL(reportData.image)}
                        className="mt-2"
                        style={{ maxWidth: "100%", maxHeight: "300px" }}
                      />
                    ) : null}
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-x-4 mt-12">
                <button
                  type="button"
                  className="w-1/4 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={submitForm}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Report;
