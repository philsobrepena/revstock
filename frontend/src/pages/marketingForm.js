import React, { useState } from "react";

function MarketingForm (){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        audience: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        //send to django backend if necessary
        //fetch or axios to POST request to django endpoint
        //handle response
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
            </label>
            <br />
            <label>
                Audience:
                <select name="audience" value={formData.audience} onChange={handleInputChange}>
                    <option value="">Select and audience</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
            </label>
            <br />
            <label>
                Message:
                <input type="text" name="message" value={formData.message} onChange={handleInputChange}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
    }


    export default MarketingForm;
