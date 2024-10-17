import React, { useState } from "react";
import Select from "react-select";
import { storage, db } from "../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-hot-toast";

const saveSettings = (settings) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve() : reject();
    }, 2000);
  });
};

const Career = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Role: "Internship",
    resume: "",
    City: "",
    Email: "",
    PhoneNo: "",
    Aspirations: "",
    SelectedSkill: "",
    StipendMode: "",
    StipendExpectation: "0",
    SalaryExpectation: "",
    Experience: "",
    WhyWeNeedYou: "",
  });

  const [click, setClick] = useState("Internship");
  const [stipend, setStipend] = useState("unpaid");
  const [amount, setAmount] = useState("0");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!file) {
      toast.error("Please select a file to upload");
      setLoading(false);
      return;
    }

    const storageRef = ref(storage, `resumes/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(
          "An error occurred while uploading the file. Please try again."
        );
        console.error("Error uploading file:", error);
        setLoading(false); // Stop loading if an error occurs
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setFormData((prevFormData) => ({
          ...prevFormData,
          resume: downloadURL,
        }));
        const finalFormData = { ...formData, resume: downloadURL };

        try {
          const jobApplicantsCollectionRef = collection(db, "joinusformdata");
          await addDoc(jobApplicantsCollectionRef, finalFormData);
          console.log(
            "Application submitted successfully! Data: ",
            finalFormData
          );
          setFormData({
            FullName: "",
            Role: "Internship",
            resume: "",
            City: "",
            Email: "",
            PhoneNo: "",
            Aspirations: "",
            SelectedSkill: "",
            StipendMode: "",
            StipendExpectation: "0",
            SalaryExpectation: "",
            Experience: "",
            WhyWeNeedYou: "",
          });
          setFile(null);
          setFileName(null);
          setUploadProgress(0);
          await toast.promise(
            saveSettings({
              theme: "dark",
              notificationsEnabled: true,
              language: "en",
            }),
            {
              loading: "Uploading your application....",
              success: <b>Application submitted successfully!</b>,
              error: <b>Please try again!</b>,
            },
            {
              style: {
                backgroundColor: "#8b5cf6", // Violet background color
                color: "white", // Text color
              },
              iconTheme: {
                primary: "white", // Icon primary color
                secondary: "#8b5cf6", // Icon secondary color (violet)
              },
            }
          );
        } catch (error) {
          toast.error(
            "An error occurred while submitting the application. Please try again."
          );
          console.error("Error submitting application: ", error);
        } finally {
          setLoading(false);
        }
      }
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-8 font-poppins bg-slate-100 ">
      <h1 className="text-3xl font-bold text-violet-700 mb-3">“Join Us”</h1>
      <div className="">
        <p className="text-2xl text-gray-600 mb-10 font-semibold text-center">
          Choose your adventure.
        </p>
        <div className="flex mx-auto items-center space-x-5 sm:space-x-10 text-xl font-semibold py-3">
          <button
            className={`${
              click === "Internship"
                ? "bg-violet-500 text-white"
                : "bg-slate-300"
            } p-3 border rounded-xl transition-transform duration-200 hover:scale-110 hover:bg-violet-500 hover:text-white`}
            onClick={() => {
              setClick("Internship");
              setFormData({ ...formData, Role: "Internship" });
            }}
          >
            Internship
          </button>
          <button
            className={`${
              click === "Full time"
                ? "bg-violet-500 text-white"
                : "bg-slate-300"
            } p-3 border rounded-xl transition-transform duration-200 hover:scale-110 hover:bg-violet-500 hover:text-white`}
            onClick={() => {
              setClick("Full time");
              setFormData({ ...formData, Role: "Full time" });
            }}
          >
            Full-time
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 shadow-lg space-y-4"
      >
        <input
          type="text"
          name="FullName"
          placeholder="Full Name"
          value={formData.FullName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-300 text-gray-700 font-medium text-lg"
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-300 text-gray-700 font-medium text-lg"
        />
        <input
          type="text"
          name="City"
          placeholder="City"
          value={formData.City}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-300 text-gray-700 font-medium text-lg"
        />
        <input
          type="tel"
          name="PhoneNo"
          placeholder="Phone Number"
          value={formData.PhoneNo}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-300 text-gray-700 font-medium text-lg"
        />
        <input
          type="text"
          name="Aspirations"
          placeholder="Aspirations"
          value={formData.Aspirations}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-300 text-gray-700 font-medium text-lg"
        />

        <div className="py-3">
          <h1 className="text-center py-3 font-semibold text-base sm:text-xl">
            Pick your superpower from the dropdown
          </h1>
          <Select
            name="SelectedSkill"
            options={[
              { value: "Coding", label: "Coding" },
              { value: "Marketing", label: "Marketing" },
              { value: "Design", label: "Design" },
              { value: "Operations", label: "Operations" },
              { value: "Finance", label: "Finance" },
              { value: "HR", label: "HR" },
              { value: "Others", label: "Others" },
            ]}
            onChange={(e) => {
              setFormData({ ...formData, SelectedSkill: e.value });
            }}
            className="w-full text-lg"
            placeholder="Select Primary Skill"
            styles={{
              control: (provided) => ({
                ...provided,
                border: "1px solid #D1D5DB",
                boxShadow: "none",
                "&:hover": {
                  border: "1px solid #4F46E5",
                },
              }),
            }}
          />
        </div>

        <div className="py-3">
          <h1 className="text-center py-3 font-semibold text-base sm:text-xl">
            Flaunt your skills in the "Tell us why we need you" box—impress us
            with your flair!
          </h1>
          <textarea
            name="WhyWeNeedYou"
            placeholder="write here.."
            value={formData.WhyWeNeedYou}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-300 text-gray-700 font-medium text-lg"
          />
        </div>

        <div className="flex flex-col items-start px-5 py-5 mt-5 border rounded-xl bg-slate-200 hover:bg-slate-300 hover:shadow-xl transition-colors duration-200 cursor-pointer">
          <label
            htmlFor="file-upload"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v16h16V4H4zm16-2a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h16zM6 9l3 3m0 0l3-3m-3 3v6"
              />
            </svg>
            <span className="text-xl font-medium  ">Upload Resume</span>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          {fileName && (
            <p className="mt-2 text-green-600 font-medium">
              Selected File: {fileName}
            </p>
          )}
        </div>

        {click === "Internship" ? (
          <div className="py-3 space-y-5">
            <h1 className="text-center py-3 font-semibold text-base sm:text-xl">
              What kind of stipend do you expect?
            </h1>
            <Select
              name="ExpendedStipend"
              options={[
                { value: "Unpaid", label: "Unpaid" },
                { value: "Expected Paid", label: "Expected Paid" },
              ]}
              onChange={(e) => {
                setStipend(e.value);
                setFormData({ ...formData, StipendMode: e.value });
              }}
              className="w-full text-lg"
              placeholder="Expected Stipend"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "1px solid #D1D5DB",
                  boxShadow: "none",
                  "&:hover": {
                    border: "1px solid #4F46E5",
                  },
                }),
              }}
            />
            {stipend === "Expected Paid" && (
              <Select
                name="StipendExpectation"
                options={[
                  { value: "Custom stipend", label: "Custom stipend" },
                  { value: "10000 Rs", label: "10000 Rs" },
                  { value: "5000 Rs", label: "5000 Rs" },
                  { value: "2000 Rs", label: "2000 Rs" },
                ]}
                onChange={(e) => {
                  setAmount(e.value);
                  if (e.value !== "Custom stipend") {
                    setFormData({ ...formData, StipendExpectation: e.value });
                  } else {
                    setFormData({ ...formData, StipendExpectation: "" });
                  }
                }}
                className="w-full text-lg"
                placeholder="Select Primary Skill"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: "1px solid #D1D5DB",
                    boxShadow: "none",
                    "&:hover": {
                      border: "1px solid #4F46E5",
                    },
                  }),
                }}
              />
            )}
            {amount === "Custom stipend" && (
              <input
                type="text"
                name="StipendExpectation"
                placeholder="Stipend Expectation"
                value={formData.StipendExpectation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-300 text-gray-700 font-medium text-lg"
              />
            )}
          </div>
        ) : (
          <>
            <div className="font-poppins mt-5">
              <h1 className="text-center py-3 font-semibold text-base sm:text-xl">
                What is your salary expectation?
              </h1>
              <input
                type="text"
                name="SalaryExpectation"
                placeholder="Salary Expectation"
                value={formData.SalaryExpectation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 bg-slate-300 text-gray-700 font-medium text-lg"
              />
            </div>
            <Select
              name="Experience"
              options={[
                { value: "Fresher", label: "Fresher" },
                { value: "1-2 years", label: "1-2 years" },
                { value: "3-5 years", label: "3-5 years" },
                { value: "5+ years", label: "5+ years" },
              ]}
              onChange={(e) => {
                setFormData({ ...formData, Experience: e.value });
              }}
              className="w-full text-lg"
              placeholder="Select Experience level"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "1px solid #D1D5DB",
                  boxShadow: "none",
                  "&:hover": {
                    border: "1px solid #4F46E5",
                  },
                }),
              }}
            />
          </>
        )}

        <h1 className="py-5 text-lg  sm:text-2xl font-semibold text-center">
          Hit that submit button like a boss and cross your fingers for a reply!
        </h1>

        <button
          type="submit"
          className="w-full p-3 bg-violet-700 text-white rounded-xl hover:shadow-xl
           focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          {loading ? (
            <span className="loading loading-spinner text-primary"></span>
          ) : (
            "Submit Application"
          )}
        </button>
        {uploadProgress > 0 && (
          <p className="text-sm text-gray-500 text-center">
            Upload Progress: {uploadProgress.toFixed(2)}%
          </p>
        )}
      </form>
    </div>
  );
};

export default Career;
