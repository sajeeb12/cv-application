import { useState } from "react";
import Input from "./shared/Input";

const GeneralInfo = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const { name, email, phone } = formData;
        if (!formData.name || !formData.email || !formData.phone) {
            alert("All fields must be filled")
            return;
        }
        onSubmit(formData)
        alert(`Form submitted ${formData.name} ${formData.email} ${formData.phone}`);

        setFormData({
            name: "",
            email: "",
            phone: "",
        })
    }

    return (
        <section>
            <h2>General Information</h2>
            <form onSubmit={handleSubmit}>

                <Input
                    id="name"
                    label="Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange} />
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} />
                <Input
                    id="phone"
                    label="Phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
export default GeneralInfo;