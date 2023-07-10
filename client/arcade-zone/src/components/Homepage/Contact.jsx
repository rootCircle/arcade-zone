import React, { useState } from 'react';
import style from '../../css/Homepage/Contact.module.css';
import img21 from '../../assets/images/contact.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        contactName: '',
        contactEmail: '',
        contactTextarea: ''
    });

    const handleSubmitHomeContactForm = (e) => {
        e.preventDefault();
        document.getElementById('autoclick').click();

        console.log(formData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const autoclick = () => {
    }

    return (
        <>
            <h1 style={{ fontSize: '38px', textAlign: 'center', marginTop: '15vmin' }}>Contact Us</h1>
            <p style={{ fontSize: '22px', textAlign: 'center', marginTop: '1vmin' }}>Share your Views and Opinions with Us</p>
            <div className={style.contact} id={style.contact}>
                <img src={img21} alt="" />
                <form className={style.form} id='contactHomeForm' onSubmit={handleSubmitHomeContactForm}>
                    <div className={style.inputBx}>
                        <p>Enter Name</p>
                        <input type="text" name='contactName' placeholder='Full Name' value={formData.contactName} onChange={handleInputChange}  required/>
                    </div>
                    <div className={style.inputBx}>
                        <p>Enter Email</p>
                        <input type="text" name='contactEmail' placeholder='Email' value={formData.contactEmail} onChange={handleInputChange}  required/>
                    </div>
                    <div className={style.inputBx}>
                        <p>Message</p>
                        <textarea name='contactTextarea' placeholder='Type here...' value={formData.contactTextarea} onChange={handleInputChange} required></textarea>
                    </div>
                    <div className={style.inputBx}>
                      <input type="submit" name='Submit' form='contactHomeForm' onClick={autoclick} />
                    </div>

                    <a href={`mailto:dev.frolics@gmail.com?subject=${formData.contactName}&body=${formData.contactTextarea}\n by ${formData.contactEmail}`} id='autoclick'></a>
                </form>
            </div>
        </>
    );
};

export default Contact;
