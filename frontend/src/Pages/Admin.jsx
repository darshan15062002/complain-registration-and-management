
import axios from 'axios'
import emailjs from 'emailjs-com';
import React, { useState } from 'react'
import { useEffect } from 'react'

function Admin() {
    const [complaint, setComplaint] = useState([])
    useEffect(() => {
        getALL();
    }, [])
    const getALL = async () => {
        const result = await axios.get('http://localhost:4000/api/v1/complaint/')
        console.log(result.data.response);
        setComplaint(result.data.response)
    }

    const handleAccept = async (e, id, email, product) => {
        e.preventDefault();
        // var link = `mailto:${mail}?`
        //     + "&subject=" + encodeURIComponent(`Successful Warranty Claim Registration for ${product}`)
        //     + "&body=" + encodeURIComponent('We hope this email finds you well. We are writing to inform you that your warranty claim  has been successfully registered ')
        //     ;

        // window.location.href = link;
        const serviceId = 'service_rrqeijq';
        const templateId = 'template_n5u6xze';
        const publicKey = 'r-yENt-b5rwsjajXd'
        const params = {
            from_name: "Clasi-Kal",
            from_email: email,
            subject: `Successful Warranty Claim Registration for ${product}`,
            message_html: `We hope this email finds you well. We are writing to inform you that your warranty claim  has been successfully registered 
            `,
            carbon_copy: 'delivery@gmail.com'
        };
        const res = emailjs.send(serviceId, templateId, params, publicKey)
            .then(async () => {

                const result = await axios.delete(`http://localhost:4000/api/v1/complaint/${id}`)
                console.log(result.data.response);
                console.log('Email sent successfully!');

            }, (error) => {
                console.error('Error sending email:', error);
            });



    }

    const handleDelete = async (e, id, email) => {
        e.preventDefault();
        // var link = `mailto:${mail}?`
        //     + "&subject=" + encodeURIComponent('Complaint Rejected ')
        //     + "&body=" + encodeURIComponent('We regret to inform you that we have rejected your complaint regarding the warranty claim. After reviewing your complaint, we have found that it does not meet the criteria for a valid complaint')
        //     ;

        // window.location.href = link;
        const serviceId = 'service_rrqeijq';
        const templateId = 'template_n5u6xze';
        const publicKey = 'r-yENt-b5rwsjajXd'
        const params = {
            from_name: "Clasi-Kal",
            from_email: email,
            subject: `Complaint Rejected`,
            message_html: 'We regret to inform you that we have rejected your complaint regarding the warranty claim. After reviewing your complaint, we have found that it does not meet the criteria for a valid complaint',
            carbon_copy: 'delivery@gmail.com'
        };
        const res = emailjs.send(serviceId, templateId, params, publicKey)
            .then(async () => {

                const result = await axios.delete(`http://localhost:4000/api/v1/complaint/${id}`)
                console.log(result.data.response);
                console.log('Email sent successfully!');

            }, (error) => {
                console.error('Error sending email:', error);
            });



    }

    return (
        <div className="formContainer " style={{ height: '100vh ', alignItems: 'start' }}>
            <div className="formWrapper">
                <h1>Complaint managment</h1>
                <h3 style={{ paddingBottom: '20px' }}>Total {complaint.length} complaint pandding</h3>
                <hr />
                {/* <div className="titles">
                    <span>Name</span>
                    <span>Email</span>
                    <span>Invoice/Bils</span>
                </div> */}
                {complaint.map((doc) => {
                    return (
                        <div className="complaintBox" key={doc._id}>
                            <span>{doc.name}</span><span>{doc.email}</span><a href={doc.imgUrl} style={{ textDecoration: 'none' }}>Image</a>
                            <button onClick={e => { return handleAccept(e, doc._id, doc.email, doc.product) }} style={{
                                marginTop: " 5px",
                                background: "#4F3B78",
                                padding: "10px 20px",
                                textAlign: "center",
                                textDecoration: 'none',

                                color: " white",
                                fontSize: " 12px",
                                fontWeight: " bold",
                                border: "none",
                                cursor: "pointer",
                            }}>Accept</button>

                            <button onClick={e => { return handleDelete(e, doc._id, doc.email) }} style={{

                                marginTop: " 5px",
                                background: "red",
                                padding: "10px 20px",
                                textAlign: "center",
                                textDecoration: 'none',

                                color: " white",
                                fontSize: " 12px",
                                fontWeight: " bold",
                                border: "none",
                                cursor: "pointer",
                            }}>Reject</button>
                        </div>
                    )
                })


                }

            </div>
        </div>
    )
}

export default Admin