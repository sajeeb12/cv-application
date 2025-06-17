import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [educationData, setEducationData] = useState({
    schoolName: '',
    degree: '',
    cgpa: 0.0
  })
  const [generalInfo, setGeneralInfo] = useState(true)
  const [educationBtn, setEducationBtn] = useState(true)
  const [dataAvailable, setDataAvailable] = useState(false)
  const handleFormSubmit = (dataFromForm) => {
    setFormData(dataFromForm);
    setDataAvailable(true);
    setGeneralInfo(true);
  }
  const educationFormSubmit = (educationForm) => {
    setEducationData(educationForm);
    setEducationBtn(true);
  }
  const addGeneralInfo = () => {
    setGeneralInfo(false)
    console.log("generalInfo", generalInfo)
  }

  const addEducationInfo = () => {
    console.log("education", educationBtn)
    setEducationBtn(false)
  }

  const showForm = () => {
    setDataAvailable(true);
  }

  return (
    <div>
      <div>
        <h1 className="text-red-600">CV Application</h1>
        {(!dataAvailable && !formData.name) &&
          <button onClick={showForm}>Take me to Form</button>
        }

        {dataAvailable &&
          (
            <>
              {(!formData.name && generalInfo) &&
                <button type="button" onClick={addGeneralInfo}>
                  Add General Info
                </button>
              }
              {(!formData.name && !generalInfo) &&
                <GeneralInfo onSubmit={handleFormSubmit} />
              }
              {formData.name && <h2>General Information</h2>}

              {formData.name && (
                <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
                  <h3>Submitted Data:</h3>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                </div>
              )}


              {formData.name &&
                <>
                  {(!educationData.schoolName && educationBtn) &&
                    (
                      <button type="button" onClick={addEducationInfo}>Add Education Info</button>
                    )
                  }
                </>
              }


              {(!educationData.schoolName && !educationBtn) &&
                <EducationInfo onSubmit={educationFormSubmit} />
              }

              {educationData.schoolName && (
                <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
                  <h3>Submitted Data:</h3>

                  <p><strong>Name:</strong> {educationData.schoolName}</p>
                  <p><strong>Email:</strong> {educationData.degree}</p>
                  <p><strong>Phone:</strong> {educationData.cgpa}</p>
                </div>
              )}
            </>
          )
        }

      </div>


    </div>
  )
}
export default App;