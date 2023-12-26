
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {  IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

function App() {
  
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isValid, setIsValid] = useState(true);

  
  

  function handleSubmit(e) {
    e.preventDefault();
    // if(email.includes(validRegex)) setIsValid(false)
    // eslint-disable-next-line no-unused-vars
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    console.log(validRegex);

    if(validRegex === false) { toast.error("Please provide a valid email address", {
      duration: 3000,
      position: "top-center",

      className: "text-sm",
    }); setIsValid(false)} else { console.log(email); toast.success("Email submited", {
      duration: 3000,
      position: "top-center",

      className: "text-lg",
    }); setIsValid(true)}
    
  }

  return (
    <div className="sm:w-1/2 w-80  m-auto text-center pt-10">
      <div className="flex items-center justify-center">
        <img src="./images/logo.svg" />
      </div>
      <h1 className="text-3xl text-grey-100 font-light mt-5 mb-2">
        We are launching <span className="text-grey-200 font-bold">soon!</span>
      </h1>
      <p className="text-sm mb-4">Subscribe and get notified</p>
      <form className="sm:flex justify-center items-center gap-10 mb-10 flex-row">
        <label>
        <input
          type="email"
          required
          placeholder="Your email address..."
          name="searchInput"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          className={`${!isValid ? "border-secondary-200 focus:ring-secondary-200" : ""} border-secondary-100 focus:ring-secondary-100  border-2 py-2 px-9 focus:outline-none rounded-full  ring-1 mr-3 `}
        />
        
        </label>
        <button className="bg-primary mt-4 sm:mt-0 text-[#fff] px-6 py-2 rounded-full" onClick={handleSubmit}>Notify Me</button>
   
      </form>
      <div>
        <img src="./images/illustration-dashboard.png" />
      </div>
      
      <Footer />
      <Toaster />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex items-center justify-center gap-10 mb-4">
      <IoLogoFacebook className="text-primary" />
      <IoLogoTwitter className="text-primary" />
      <IoLogoInstagram className="text-primary" />
      </div>
      <p className="text-grey-100 text-sm">&copy; Copyright Ping. All rights reserved.</p>
      <p className="text-sm">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Jamiu Abdulkareem</a>.
      </p>
    </footer>
  );
}

export default App;
