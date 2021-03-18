import axios from 'axios';
import { useState, useEffect } from 'react'
 
function Contact(){
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [submitStatus, setsubmitStatus] = useState("IDLE")

    useEffect(() => {
        document.title = "Contact Me"
    }, [])

    function setValue(e, field){
        setsubmitStatus("IDLE")
        setformData({
            ...formData,
            [field]: e.target.value
        })
    }

    function submitMessage(e){
        e.preventDefault();

        setsubmitStatus("SUBMITTING")

        axios.post('https://api.richey.tech/wp-json/gf/v2/forms/1/submissions', {
            "input_1" : formData.name,
            "input_2" : formData.email,
            "input_3" : formData.message
        })
        .then((data) => {
            setsubmitStatus("SUBMITTED")
        })
    }

    return(
        <div className="page-component">
            <div className="contact-header">
                <h1>Contact</h1>
                <p>Have a question for me? Want to get in touch? Here’s the perfect place to do it!</p>
            </div>
            <div className="contact-form">
                <form onSubmit={submitMessage} >
                    <p>Name</p>
                    <input type="text" value={formData.name} onChange={(e) => setValue(e, "name")} />

                    <p>Email Address</p>
                    <input type="email" value={formData.email} onChange={(e) => setValue(e, "email")} />

                    <p>Message</p>
                    <textarea value={formData.message} onChange={(e) => setValue(e, "message")} />

                    <button type="submit" disabled={submitStatus != "IDLE"} className={submitStatus}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;