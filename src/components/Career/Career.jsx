import "./careerPage.scss";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
// import { db } from "../../../src/firebase-config"; 
// import { addDoc, collection } from "firebase/firestore"; 

export function Career() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = [
    { value: "Coding", label: "Coding" },
    { value: "Marketing", label: "Marketing" },
    { value: "Design", label: "Design" },
    { value: "Operations", label: "Operations" },
    { value: "Finance", label: "Finance" },
    { value: "HR", label: "HR" },
    { value: "Others", label: "Others" },
  ];

  const stipendOptions = [
    { value: "unpaid", label: "Unpaid" },
    { value: "expectedStipend", label: "Expected Stipend" },
  ];

  const [values, setValues] = useState({});
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [flauntSkills, setFlauntSkills] = useState("");
  const [tabSelected, setTabSelected] = useState("internship");
  const [otherSkill, setOtherSkill] = useState("");
  const [customStipend, setCustomStipend] = useState("");
  const [salaryExpectation, setSalaryExpectation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedStipendType, setSelectedStipendType] = useState(null);
  const [selectedStipendExpectation, setSelectedStipendExpectation] = useState("");

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  // const joinUsFormRef = collection(db, "joinusformdata");  // Firebase collection reference

  const handleInputsChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  const handleSelectChange = (e) => {
    setSelectedSkill(e.value);
    console.log(e.value)
  };

  const handleFlauntSkill = (e) => {
    setFlauntSkills(e.target.value);
    console.log(e.target.value)
  };

  const handleStipendTypeChange = (e) => {
    setSelectedStipendType(e.value);
    if (e.value === "unpaid") {
      setSelectedStipendExpectation("Unpaid");
      console.log('unpaid')
    } else {
      setSelectedStipendExpectation("");
    }
  };

  const handleStipendSelectChange = (e) => {
    setSelectedStipendExpectation(e.value);
    console.log(e.value)
  };

  const handleSalarySelectChange = (e) => {
    setSalaryExpectation(e.value);
    console.log(e.target.value)
  };

  const userSelectedExperience = (e) =>{
    setSelectedExperience(e)
  }

  const handleCareerFormSubmit = (e) => {
    e.preventDefault();
    let formData = {
      ...values,
      selectedSkill,
      flauntSkills,
    };

    if (selectedSkill === "Others") {
      formData = { ...formData, selectedSkill: otherSkill };
    }

    if (tabSelected === "internship") {
      if (selectedStipendType === "expectedStipend") {
        if (selectedStipendExpectation === "customStipend") {
          formData = { ...formData, selectedStipendExpectation: customStipend };
        } else {
          formData = { ...formData, selectedStipendExpectation };
        }
      } else {
        formData = { ...formData, selectedStipendExpectation: "Unpaid" };
      }
    } else {
      formData = { ...formData, salaryExpectation, selectedExperience };
    }

    uploadData(formData);
  };

  const handleTabSwitch = (tab) => {
    setSelectedSkill(null);
    setSelectedStipendExpectation("");
    setSelectedStipendType(null);
    setOtherSkill("");
    setCustomStipend("");
    setSalaryExpectation("");
    setSelectedExperience(null);
    setTabSelected(tab);
  };

  async function uploadData(formData) {
    if (tabSelected === "internship") {
      const { name, mobile, email, city, aspirations, selectedSkill, flauntSkills, selectedStipendExpectation } = formData;

      if (!name || !mobile || !email || !city || !aspirations || !selectedSkill || !flauntSkills || !selectedStipendExpectation) {
        enqueueSnackbar("Please provide all the fields", { variant: "error" });
        return;
      }

      try {
        // Uncomment to enable Firebase functionality
        // await addDoc(joinUsFormRef, {
        //   Role: "Internship",
        //   FullName: formData.name,
        //   PhoneNo: formData.mobile,
        //   Email: formData.email,
        //   City: formData.city,
        //   Aspirations: formData.aspirations,
        //   SelectedSkill: formData.selectedSkill,
        //   WhyWeNeedYou: formData.flauntSkills,
        //   StipendExpectation: formData.selectedStipendExpectation,
        // });

        enqueueSnackbar("Form Submitted Successfully", { variant: "success" });
        navigate("/");
      } catch (err) {
        console.log("Error in CareerPage is: " + err);
      }
    }

    if (tabSelected === "fulltime") {
      const { name, mobile, email, city, aspirations, selectedSkill, flauntSkills, selectedExperience, salaryExpectation } = formData;

      if (!name || !mobile || !email || !city || !aspirations || !selectedSkill || !flauntSkills || !selectedExperience || !salaryExpectation) {
        enqueueSnackbar("Please provide all the fields", { variant: "error" });
        return;
      }

      try {
        // Uncomment to enable Firebase functionality
        // await addDoc(joinUsFormRef, {
        //   Role: "Full Time",
        //   FullName: formData.name,
        //   PhoneNo: formData.mobile,
        //   Email: formData.email,
        //   City: formData.city,
        //   Aspirations: formData.aspirations,
        //   SelectedSkill: formData.selectedSkill,
        //   WhyWeNeedYou: formData.flauntSkills,
        //   Experience: formData.selectedExperience,
        //   SalaryExpectation: formData.salaryExpectation,
        // });

        enqueueSnackbar("Form Submitted Successfully", { variant: "success" });
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="career-form-container">
      <h1 className="text-4xl font-bold">
        <span>“</span>Join Us<span>”</span>
      </h1>

      <form className="career-page-form" onSubmit={handleCareerFormSubmit}>
        <div className="choose-adventure-container">
          <h2 className="adventure-heading text-2xl font-semibold">Choose your adventure.</h2>
          <div>
            <div
              className={tabSelected === "internship" ? "selected-button tab-button" : "tab-button"}
              onClick={() => handleTabSwitch("internship")}
            >
              Internship
            </div>
            <div
              className={tabSelected === "fulltime" ? "selected-button tab-button" : "tab-button"}
              onClick={() => handleTabSwitch("fulltime")}
            >
              Full time
            </div>
          </div>
        </div>

        <div className="personal-info-container">
          <h2 className="text-2xl font-semibold">Fill in your details like a true rockstar</h2>
          <TextField variant="standard" name="name" onChange={handleInputsChange} value={values.name} label="Full Name" className="text-field" />
          <TextField variant="standard" name="mobile" onChange={handleInputsChange} value={values.mobile} label="Phone No" className="text-field" />
          <TextField variant="standard" name="email" onChange={handleInputsChange} value={values.email} label="Email" className="text-field" />
          <TextField variant="standard" name="city" onChange={handleInputsChange} value={values.city} label="City" className="text-field" />
          <TextField variant="standard" name="aspirations" onChange={handleInputsChange} value={values.aspirations} label="Aspirations" className="text-field" />
        </div>

        <div className="choose-skills-container">
          <h2 className="text-xl font-semibold">Pick your superpower from the dropdown</h2>
          <div className="skills-options">
            <Select
              value={selectedSkill}
              onChange={handleSelectChange}
              options={options}
              placeholder={selectedSkill || "Select Skill"}
              isSearchable
            />
          </div>
          {selectedSkill === "Others" && (
            <TextField
              variant="standard"
              onChange={handleInputsChange}
              value={otherSkill}
              label="Other Skill"
              className="text-field"
            />
          )}
          {/* <TextField
            variant="standard"
            onChange={handleFlauntSkill}
            value={flauntSkills}
            label="Why We Need You?"
            className="text-field"
          /> */}
          <div className="text-center">
            <h4 className="m-5 font-semibold text-xl">Flaunt your skills in the "Tell us why we need you" box—impress us with your flair!</h4>
              <textarea
              style={{
                height: "10rem",
                width: "100%",
                fontSize: "1rem",
                border:'solid 1px'
              }}
              onChange={handleFlauntSkill}
            ></textarea>
          </div>
        </div>


        {tabSelected === "internship" && (
          <div className="stipend-container">
            <h2 className="text-xl font-semibold m-3">What kind of stipend do you expect?</h2>
            <Select
              value={selectedStipendType}
              onChange={handleStipendTypeChange}
              options={stipendOptions}
              placeholder={selectedStipendType || "Select expected stipend Type"}
              isSearchable
            />
            {selectedStipendType === "expectedStipend" && (
              <>
                <Select
                  value={selectedStipendExpectation}
                  onChange={handleStipendSelectChange}
                  options={[
                    { value: "customStipend", label: "Custom Stipend" },
                    { value: "2000", label: "₹2000" },
                    { value: "5000", label: "₹5000" },
                    { value: "10000", label: "₹10000" },
                  ]}
                  placeholder={"Select Stipend Expectation" || selectedStipendExpectation }
                  isSearchable
                />
                {selectedStipendExpectation === "customStipend" && (
                  <TextField
                    variant="standard"
                    name="customStipend"
                    onChange={(e) => setCustomStipend(e.target.value)}
                    value={customStipend}
                    // label="Enter Custom Stipend"
                    className="text-field"
                    placeholder={"enter stipend" || setCustomStipend}
                  />
                )}
              </>
            )}
          </div>
        )}

        {tabSelected === "fulltime" && (
          <div className="salary-container">
            <h2 className="text-xl font-semibold m-2">What is your salary expectation?</h2>
            {/* <Select
              value={salaryExpectation}
              onChange={handleSalarySelectChange}
            //   options={[
            //     { value: "30000", label: "₹30,000" },
            //     { value: "40000", label: "₹40,000" },
            //     { value: "50000", label: "₹50,000" },
            //   ]}
              placeholder="Select Salary Expectation"
              isSearchable
            /> */}
            <TextField variant="standard" name="name" onChange={handleSalarySelectChange}  value={values.name} label="Enetr expected salary" className="text-field w-100 mb-3" />
            <h2 className="text-xl font-semibold my-3">What is your experience level?</h2>
            <Select
              value={selectedExperience}
              onChange={userSelectedExperience}
              options={[
                { value: "Fresher", label: "Fresher" },
                { value: "1 Year", label: "1 Year" },
                { value: "2 Years", label: "2 Years" },
                { value: "3+ Years", label: "3+ Years" },
              ]}
              placeholder="Select Experience Level"
              isSearchable
            />
          </div>
        )}

        <div className="submit-button-container text-center">
            <h1 className="mb-6 mx-10 text-3xl font-semibold" style={{color:'#9c9b9b'}}>Hit that submit button like a boss and cross your fingers for a reply!</h1>
          <button className="submit-button text-lg" type="submit" style={{backgroundColor:'#9435b6',width:'20rem', height:'3rem',borderRadius:'5rem',color:'white'}}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}


export default Career