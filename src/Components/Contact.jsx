import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Slide } from "./Slide";
import { Reveal } from "./Reveal.jsx";

export const Contact = () => {
 const form = useRef();
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [uniqueID, setUniqueID] = useState((Math.random() * 100000) | 0);
 const [sendLoading, setSendLoading] = useState(false);
 const [isError, setIsError] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);
 const [completedForm, setCompletedForm] = useState({});

 const sendEmail = (e) => {
  e.preventDefault();
  setSendLoading(true);

  emailjs.sendForm("service_os12iyo", "contact_form", form.current, "M3g5--3qVERLq6TLG").then(
   (result) => {
    setIsSuccess(true);
    setCompletedForm({ name, email, message, uniqueID });
    setEmail("");
    setMessage("");
    setName("");
   },
   (error) => {
    setSendLoading(false);
    setIsError(true);
   }
  );
 };

 if (isSuccess) {
  return (
   <div className="mt-28">
    <div className="fixed top-[80px] left-0 z-30 h-80px w-[100%]">
     <h2 className="-mt-14 text-white sm:hidden text-center text-3xl sm:mt-10">Contact Form</h2>
    </div>
    <div className="flex flex-col m-auto mt-5 text-center xl:w-[70%]">
     <p className="text-green-600 text-xl text-center font-med">Message Sent!</p>
     <div className="mt-5 m-auto p-5 border-2 border-black w-[80%] rounded-md">
      <p className="text-slate-400">Unique ID: {completedForm.uniqueID}</p>
      <div className="m-auto w-[80%] mt-5 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
      <p>{completedForm.name}</p>
      <div className="m-auto w-[80%] mt-5 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
      <p>{completedForm.email}</p>
      <div className="m-auto w-[80%] mt-5 mb-5 border-b-2 border-orange-600 xl:w-[60%] xl:max-w-{1000px]"></div>
      <p>{completedForm.message}</p>
     </div>
    </div>
   </div>
  );
 }

 return (
  <div className="mt-28">
   <div className="fixed top-[80px] left-0 z-30 h-80px w-[100%]">
    <h2 className="-mt-14 text-white lg:hidden text-center text-3xl lg:mt-10 ">Contact Form</h2>
   </div>
   <p className="m-auto mt-10 w-[80%] text-center text-lg xl:w-[60%] sm:text-xl">
    <Reveal width="100%">
     I am actively seeking feedback from experienced developers. I welcome all forms of constructive criticism and insightful feedback on my projects. <br />{" "}
    </Reveal>
    <Reveal width="100%">Please feel free to reach out if you have any questions or would like to discuss my work in more detail.</Reveal>
   </p>
   <form
    ref={form}
    onSubmit={sendEmail}
    className="animate-fade m-auto mt-10 w-[80%] lg:w-[80%] flex flex-col xl:w-[60%] xl:text-center xl:gap-y-0 xl:gap-x-2 xl:h-[400px] sm:mt-5"
   >
    <label className="hidden">unique_id</label>
    <input type="text" name="unique_id" value={uniqueID} readOnly className="hidden" />
    <div className="w-[100%] mb-[20px] flex flex-row justify-between">
     <Slide width={"45%"} margin="0 auto 0 0" popUpDelay={0.65} slideDelay={0.3}>
      <input
       placeholder="Name"
       required
       type="text"
       name="user_name"
       value={name}
       onChange={(event) => {
        setName(event.target.value);
       }}
       className="border-2 border-orange-600 w-[100%] h-[50px] rounded-md text-center row-start-2 xl:col-span-2 sm:text-2xl"
      />
     </Slide>
     <Slide width={"45%"} margin="0 0 0 auto" popUpDelay={0.65} slideDelay={0.3}>
      <input
       placeholder="Email"
       type="email"
       name="user_email"
       value={email}
       onChange={(event) => {
        setEmail(event.target.value);
       }}
       className="border-2 border-orange-600 w-[100%] h-[50px] rounded-md text-center row-start-2 xl:col-span-2 sm:text-2xl"
      />
     </Slide>
    </div>
    <Slide width="100%" popUpDelay={0.85} slideDelay={0.5}>
     <textarea
      placeholder="Message"
      required
      name="message"
      value={message}
      onChange={(event) => {
       setMessage(event.target.value);
      }}
      className="border-2 border-orange-600 rounded-md p-5 resize-none min-h-[300px] text-center xl:min-h-fit xl:row-start-4 xl:row-span-3 xl:col-span-4 sm:text-2xl w-[100%] h-[200px]"
     />
    </Slide>
    <button
     className={`animate-slideup1 m-auto mt-5 bg-orange-600 w-[40%] p-2 rounded-md text-white xl:row-start-7 xl:col-span-4 hover:bg-slate-500 ${
      sendLoading ? "bg-slate-600" : null
     }`}
     type="submit"
     disabled={sendLoading ? true : false}
    >
     {sendLoading ? "Sending..." : "Send"}
    </button>
    {sendLoading ? (
     <div className="w-[100%] m-auto col-start-1m col-span-4">
      <svg className="animate-spin m-auto mt-2 h-5 w-5 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
       <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
       ></path>
      </svg>
     </div>
    ) : null}
    {isError ? <p className="text-red-500 text-xl text-center font-med">Something went wrong, please try again later!</p> : null}
   </form>
  </div>
 );
};
