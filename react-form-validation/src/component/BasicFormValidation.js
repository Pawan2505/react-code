import React, {useState} from 'react'

function BasicFormValidation() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
      });
      const [errors, setErrors] = useState({});
    
      const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
          console.log('Form data is valid:', formData);
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            {errors.username && <span>{errors.username}</span>}
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            {errors.email && <span>{errors.email}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    
}

export default BasicFormValidation
