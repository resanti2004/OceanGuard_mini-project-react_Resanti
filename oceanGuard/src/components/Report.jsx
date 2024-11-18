import React, { useState } from "react";
import axios from "axios";
import useReportStore from "../store/useReportStore";
import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();
  const { reportData, setReportData, resetReportData } = useReportStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Validasi langkah 1
  const validateStep1 = () => {
    const newErrors = {};
    // Beach/Area Name: Tidak boleh kosong, minimal 3 karakter
    if (!reportData.area || reportData.area.trim() === "") {
      newErrors.area = "Beach/Area Name is required.";
    } else if (!/^[a-zA-Z\s]{3,}$/.test(reportData.area)) {
      newErrors.area =
        "Beach/Area Name must be at least 3 characters and only letters.";
    }

    // Country: Tidak boleh kosong, hanya huruf
    if (!reportData.country || reportData.country.trim() === "") {
      newErrors.country = "Country is required.";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(reportData.country)) {
      newErrors.country = "Country must only contain letters.";
    }

    // City: Tidak boleh kosong, minimal 2 karakter
    if (!reportData.city || reportData.city.trim() === "") {
      newErrors.city = "City is required.";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(reportData.city)) {
      newErrors.city = "City must be at least 2 characters.";
    }

    // Region: Tidak boleh kosong
    if (!reportData.region || reportData.region.trim() === "") {
      newErrors.region = "Region is required.";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(reportData.region)) {
      newErrors.region = "Region must be at least 2 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validasi langkah 2
  const validateStep2 = () => {
    const newErrors = {};
    if (!reportData.reportCategory)
      newErrors.reportCategory = "Please select a report category.";

    // Issue Description: Tidak boleh kosong, minimal 10 karakter, hanya huruf/angka
    if (!reportData.desc || reportData.desc.trim() === "") {
      newErrors.desc = "Issue Description is required.";
    } else if (!/^[a-zA-Z0-9\s.,!?]{10,}$/.test(reportData.desc)) {
      newErrors.desc = "Issue Description must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validasi langkah 3
  const validateStep3 = () => {
    const newErrors = {};
    if (!reportData.image)
      newErrors.image = "Please upload a supporting image or video.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fungsi untuk melanjutkan ke langkah berikutnya
  const nextStep = () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = validateStep1();
    } else if (currentStep === 2) {
      isValid = validateStep2();
    } else if (currentStep === 3) {
      // Langsung lanjut tanpa validasi untuk langkah 3
      isValid = true;
    }

    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Fungsi untuk kembali ke langkah sebelumnya
  const prevStep = () => {
    setErrors({}); // Hapus pesan error saat kembali
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Hapus error saat input berubah
  };

  // Fungsi untuk menangani perubahan file
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image") || file.type.startsWith("video")) {
        useReportStore.getState().setReportData({ image: file });

        // Create a preview URL for the selected file
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result); // Set the preview URL
        };
        reader.readAsDataURL(file); // Read file as Data URL

        // Clear previous error message (if any)
        setErrors((prevErrors) => ({ ...prevErrors, image: "" }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: "Unsupported file type. Please upload an image or video.",
        }));
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

      // Setel kembali ke langkah pertama
      setCurrentStep(1); // Mengatur ulang langkah ke 1 setelah submit
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit report. Please try again.");
    }
  };

  const stepIcons = [
    // Step 1 Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>,

    // Step 2 Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6Z"
      />
    </svg>,

    // Step 3 Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>,

    // Step 4 Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>,
  ];

  return (
    <>
      <div className=" border-gray-300 px-52 pt-28 mb-4">
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
                {stepIcons[step - 1]}
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
                Upload your information to proceed to the next step{" "}
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
                  />
                  {errors.area && (
                    <p className="text-red-600 text-sm">{errors.area}</p>
                  )}
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
                  />
                  {errors.country && (
                    <p className="text-red-600 text-sm">{errors.country}</p>
                  )}
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
                  />
                  {errors.city && (
                    <p className="text-red-600 text-sm">{errors.city}</p>
                  )}
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
                  />
                  {errors.region && (
                    <p className="text-red-600 text-sm">{errors.region}</p>
                  )}
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
                Upload your information to proceed to the next step
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
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                  {errors.reportCategory && (
                    <p className="text-red-600 text-sm">
                      {errors.reportCategory}
                    </p>
                  )}
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
                  />
                  {errors.desc && (
                    <p className="text-red-600 text-sm">{errors.desc}</p>
                  )}
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
                  {/* Show upload area if no file is selected */}
                  {!preview ? (
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
                  ) : (
                    // Display image/video preview if available
                    <div className="w-full h-64 flex justify-center items-center bg-gray-100 rounded-lg">
                      {preview.startsWith("data:image") ? (
                        <img
                          src={preview}
                          alt="Selected"
                          className="rounded-lg shadow-lg"
                          style={{ maxWidth: "100%", maxHeight: "300px" }}
                        />
                      ) : preview.startsWith("data:video") ? (
                        <video
                          controls
                          src={preview}
                          className="rounded-lg shadow-lg"
                          style={{ maxWidth: "100%", maxHeight: "256px" }}
                        />
                      ) : null}
                    </div>
                  )}
                </div>
                {/* Error handling */}
                {errors.image && (
                  <div className="text-red-500 mt-2 text-sm">
                    {errors.image}
                  </div>
                )}
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
              <p className="font-light mb-1.5 text-sm">Step 4/4</p>
              <h3 className="mb-1.5 text-2xl font-semibold leading-none text-primary">
                Review & Submit
              </h3>
              <p className="mb-6 font-light">
                Upload your information to proceed to the next step
              </p>
              <div className="overflow-x-auto p-4 bg-white shadow-md rounded-lg border border-gray-200">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        Field
                      </th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Beach/Area Name */}
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 text-sm text-gray-700 font-medium">
                        Beach/Area Name
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-800">
                        {reportData.area}
                      </td>
                    </tr>

                    {/* Country */}
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 text-sm text-gray-700 font-medium">
                        Country
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-800">
                        {reportData.country}
                      </td>
                    </tr>

                    {/* City */}
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 text-sm text-gray-700 font-medium">
                        City
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-800">
                        {reportData.city}
                      </td>
                    </tr>

                    {/* Region */}
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 text-sm text-gray-700 font-medium">
                        Region
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-800">
                        {reportData.region}
                      </td>
                    </tr>

                    {/* Report Category */}
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 text-sm text-gray-700 font-medium">
                        Report Category
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-800">
                        {reportData.reportCategory}
                      </td>
                    </tr>

                    {/* Issue Description */}
                    <tr className="border-t border-b">
                      <td className="px-4 py-2 text-sm text-gray-700 font-medium">
                        Issue Description
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-800">
                        {reportData.desc}
                      </td>
                    </tr>

                    {/* Uploaded Media */}
                    {reportData.image && (
                      <tr className="border-t border-b">
                        <td className="px-4 py-2 text-sm text-gray-700 font-medium">
                          Uploaded Media
                        </td>
                        <td className="px-4 py-2">
                          {/* Display Image or Video */}
                          {reportData.image.type.startsWith("image") ? (
                            <img
                              src={URL.createObjectURL(reportData.image)}
                              alt="Uploaded"
                              className="mt-2 rounded-lg shadow-md"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "300px",
                                objectFit: "cover",
                              }}
                            />
                          ) : reportData.image.type.startsWith("video") ? (
                            <video
                              controls
                              src={URL.createObjectURL(reportData.image)}
                              className="mt-2 rounded-lg shadow-md"
                              style={{
                                maxWidth: "100%",
                                maxHeight: "200px",
                                objectFit: "cover",
                              }}
                            />
                          ) : null}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
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
