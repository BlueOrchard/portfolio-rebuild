import { useState } from 'react'
 
function Contact(){
    const [formData, setformData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function setName(e){
        setformData({
            ...formData,
            name: e.target.value,
        })
    }

    function setEmail(e){
        setformData({
            ...formData,
            email: e.target.value,
        })
    }

    function setMessage(e){
        setformData({
            ...formData,
            message: e.target.value,
        })
    }


    function submitMessage(e){
        e.preventDefault();
        console.log("submitting...")
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
                    <input type="text" value={formData.name} onChange={setName} />

                    <p>Email Address</p>
                    <input type="text" value={formData.email} onChange={setEmail} />

                    <p>Message</p>
                    <textarea value={formData.message} onChange={setMessage} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;