import React, { useState } from "react";
import axios from "axios";

import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
const Complaint = () => {

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const mobile = e.target[2].value;
    const address = e.target[3].value;
    const landmark = e.target[4].value;
    const state = e.target[5].value;
    const city = e.target[6].value;
    const pincode = e.target[7].value;
    const productGroup = e.target[8].value;
    const product = e.target[9].value;
    const problem = e.target[10].value;
    const perchasePlatform = e.target[11].value;
    const problemDescription = e.target[12].value;
    const file = e.target[13].files[0];
    const date = e.target[14].value;
    console.log(name, address, problem, productGroup);
    const storageRef = ref(storage, `${name + date}`);

    await uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        const res = await axios.post('http://localhost:4000/api/v1/complaint/new', {
          name, email, mobile, address: `${address},${landmark},${city} , ${state} ,${pincode}`, productGroup, product, problem, problem, perchasePlatform, problemDescription, imgUrl: downloadURL, perchaseDate: date
        })
        console.log(res);
        if (res.length != 0) {
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
            document.getElementById("create-course-form").reset();
          }, [3000])
        }
      })
    });

  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Classi-Kal</span>
        <h3 className="title">Register Complaint</h3>
        <form onSubmit={handleSubmit} id='create-course-form'>
          <div
            className=" inputsWrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "5px",

            }}
          >
            <span>Name</span>
            <input
              type="text"
              placeholder="First select product group and then product"
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter email"
                required

              />
            </div>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Mobile Number</span>
              <input
                type="tel"
                maxlength="10"
                placeholder="Enter Mobile Number"
                required

              />
            </div>

          </div>
          <div
            className=" inputsWrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "5px",

            }}
          >
            <span>Shipping & Pick Up Address</span>
            <input
              type="text"
              required
              placeholder="First select product group and then product"

            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Landmark</span>
              <input
                type="text"
                placeholder="Enter landmark"
                required
              />
            </div>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>State</span>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                required
              />
            </div>

          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>City</span>
              <input
                type="text"
                placeholder="Enter city name"
                required
              />
            </div>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Pincode</span>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                required
              />
            </div>

          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Product group</span>
              <select type="text" required>
                <option selected disabled value>
                  Please choose one option
                </option>

                <option value="1">Bluetooth Earphones/Headphones</option>
                <option value="2">Wired Earphones/Headphones</option>
                <option value="3">Bluetooth Speakers</option>
                <option value="4">Cables and Chargers</option>
                <option value="10">Sound Bar</option>
                <option value="11">Party-Pal Speakers</option>
                <option value="12">Alexa Speakers</option>
              </select>
            </div>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Product</span>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                required
              />
            </div>

          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Product Problem</span>
              <select type="text" required>
                <option selected disabled value>
                  Please choose problem
                </option>

                <option value="1">One / Both Side not working</option>
                <option value="2">Mic Issue (On Call)</option>
                <option value="3">Button Issue</option>
                <option value="4">Bluetooth Connectivity</option>
                <option value="10">Bluetooth Range Issue</option>
                <option value="11">Power-On Failure</option>
                <option value="12">Charging Issue</option>
              </select>
            </div>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Purchase Platform</span>
              <select type="text" required>
                <option selected disabled value>
                  Select platform
                </option>

                <option value="1">Amazon</option>
                <option value="2">Flipkart</option>
                <option value="3">Paytm Mall</option>
                <option value="4">Myntra</option>
                <option value="10">Tata Cliq</option>

              </select>
            </div>

          </div>
          <div className="inputsWrapper" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "5px",

          }}>
            <span>Problem Description</span>
            <textarea required name="" id="" style={{ width: '100%' }} rows="5"></textarea>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Invoice/ Bill</span>
              <input type="file" name="" id="" required />
            </div>
            <div
              className="inputsWrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <span>Purchase Date</span>
              <input type="date" name="" id="" required />
            </div>

          </div>
          <div className="">
            <p
              style={{
                textAlign: "left",
                fontFamily: "sans-serif",
                fontSize: "10px",
                opacity: 0.7,


              }}
            >
              <input type="checkbox" style={{ width: 'auto' }} name="" id="" required />Please ensure that the selected product name, model and colour
              matches the one written on the product box received/ invoice In
              case of a name mismatch, claim is liable for rejection
            </p>
          </div>
          {success && (<div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ background: 'white', height: '12rem', width: '25rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Complaint successfull</h3>
          </div>)}

          <button>SUBMIT</button>







        </form>
        {/* <form onSubmit={handleSubmit}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:'5px'}}>
            <span>Product Group</span>
            <select type="text">
              <option selected disabled value>
                Please choose one option
              </option>

              <option value="1">Bluetooth Earphones/Headphones</option>
              <option value="2">Wired Earphones/Headphones</option>
              <option value="3">Bluetooth Speakers</option>
              <option value="4">Cables and Chargers</option>
              <option value="10">Sound Bar</option>
              <option value="11">Party-Pal Speakers</option>
              <option value="12">Alexa Speakers</option>
            </select>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:'5px'}}>
            <span>Product</span>
            <input type="text" placeholder="First select product group and then product" style={{width:'94%'}}/> */}
        {/* <select type="text">
              <option selected disabled value>
                Select product group first and type
              </option>

              <option value="1">Bluetooth Earphones/Headphones</option>
              <option value="2">Wired Earphones/Headphones</option>
              <option value="3">Bluetooth Speakers</option>
              <option value="4">Cables and Chargers</option>
              <option value="10">Sound Bar</option>
              <option value="11">Party-Pal Speakers</option>
              <option value="12">Alexa Speakers</option>
            </select> */}
        {/* </div>
          <div className="" style={{display:'flex',flexDirection:'column',alignItems:'start',gap:'5px' }}>
          <span>Pincode</span>
             <input type="text" placeholder="eg.401501" style={{width:'94%'}}/>
          </div>
         

       
           <div className="">
            <p
              style={{
                textAlign: "left",
                fontFamily: "sans-serif",
                fontSize: "10px",
                opacity: 0.7,
                
                
              }}
            >
              <input type="checkbox" style={{width:'auto'}} name="" id="" required/>Please ensure that the selected product name, model and colour
              matches the one written on the product box received/ invoice In
              case of a name mismatch, claim is liable for rejection
            </p>
            </div>
        
          <button>SUBMIT</button>

          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Somthing went wrong</span>}
        </form>
       */}
      </div>
    </div>
  );
};

export default Complaint;
