import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
 const form = useRef();
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [isError, setIsError] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);
 const [completedForm, setCompletedForm] = useState({});

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm("service_os12iyo", "contact_form", form.current, "M3g5--3qVERLq6TLG").then(
   (result) => {
    setIsSuccess(true);
    setCompletedForm({ name, email, message });
    setEmail("");
    setMessage("");
    setName("");
   },
   (error) => {
    setIsError(true);
   }
  );
 };

 if (isSuccess) {
  return (
   <div className="flex flex-col m-auto mt-5 text-center">
    <p className="text-green-600 text-xl text-center font-med">Message Sent!</p>
    <div className="mt-5 m-auto p-5 border-2 border-black w-[80%] rounded-md">
     <p>{completedForm.name}</p>
     <div className="m-auto w-[80%] mt-5 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
     <p>{completedForm.email}</p>
     <div className="m-auto w-[80%] mt-5 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
     <p>{completedForm.message}</p>
    </div>
   </div>
  );
 }

 return (
  <>
   <h2 className="mt-0 text-center text-3xl underline">Contact Form</h2>
   <form ref={form} onSubmit={sendEmail} className="m-auto mt-10 w-[80%] flex flex-col">
    <label>Name</label>
    <input
     required
     type="text"
     name="user_name"
     value={name}
     onChange={(event) => {
      setName(event.target.value);
     }}
     className="border-2 border-orange-600 rounded-md"
    />
    <label className="mt-5">Email</label>
    <input
     required
     type="email"
     name="user_email"
     value={email}
     onChange={(event) => {
      setEmail(event.target.value);
     }}
     className="border-2 border-orange-600 rounded-md"
    />
    <label className="mt-5">Message</label>
    <textarea
     required
     name="message"
     value={message}
     onChange={(event) => {
      setMessage(event.target.value);
     }}
     className="border-2 border-orange-600 rounded-md resize-none min-h-[400px]"
    />
    <input className="m-auto mt-5 bg-orange-600 w-[50%] p-2 rounded-md text-white" type="submit" value="Send" />
    {isSuccess ? <p className="text-green-600 text-xl text-center font-med">Message Sent!</p> : null}
    {isError ? <p className="text-red-500 text-xl text-center font-med">Something went wrong, please try again later!</p> : null}
   </form>
  </>
 );
};
