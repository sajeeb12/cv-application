import { useState } from "react"
import Input from "./shared/Input";

const EducationInfo = ({ onSubmit }) => {
    const [educationData, setEducationData] = useState({
        schoolName: '',
        degree: '',
        cgpa: 0.0
    })
    const educationFormSubmit = (e) => {
        e.preventDefault();
        const { schoolName, degree, cgpa } = educationData;

        onSubmit(educationData)
        alert(`Form submitted ${educationData.schoolName} ${educationData.degree} ${educationData.cgpa}`);
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setEducationData({ ...educationData, [name]: value })
    }

    return (
        <section>
            <form onSubmit={educationFormSubmit}>
                <div>
                    <Input
                        id="schoolName"
                        name="schoolName"
                        label="Institute Name"
                        value={educationData.schoolName}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
export default EducationInfo