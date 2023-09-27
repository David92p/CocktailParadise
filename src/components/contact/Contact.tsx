import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import img from "../../assets/form.png";
import axios from "axios";

const Contact: React.FC = () => {
  const [user_name, setUser_name] = useState<string>("");
  const [user_surname, setUser_surname] = useState<string>("");
  const [user_email, setUser_email] = useState<string>("");
  const [user_message, setUser_messae] = useState<string>("");
  const [user_check, setUser_check] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const DATA = {
      service_id: import.meta.env.VITE_APP_SERVICE_ID,
      template_id: import.meta.env.VITE_APP_TEMPLATE_ID,
      user_id: import.meta.env.VITE_APP_PUBLIC_KEY,
      template_params: {
        user_name,
        user_surname,
        user_email,
        user_message,
      },
    };
    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", DATA);
      setUser_name("");
      setUser_surname("");
      setUser_email("");
      setUser_messae("");
      setUser_check(false);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-300 to-green-100">
      <div className="sm:w-[100%] 2xl:w-9/12 flex flex-col-reverse md:flex-row m-10 bg-slate-100 rounded-2xl shadow-2xl">
        <div className="2xl:w-1/3 w-[100%] bg-gradient-to-br from-green-900 to-slate-600 relative rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none">
          <img
            src={img}
            alt="Logo"
            className="w-[100%] h-[100%] object-cover absolute mix-blend-soft-light rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none"
          />
          <div className="px-14 py-4 sm:p-10">
            <p className="text-slate-100 text-xl text-justify font-bold tracking-wide leading-8 sm:py-[50%]">
              Do you have questions about the project or do you want to propose
              a collaboration? Contact me by filling out the form and I will
              reply as soon as possible. Warm greetings from Cocktail Paradise!
            </p>
          </div>
        </div>
        <div className="2xl:w-2/3 w-[100%] bg-slate-200 rounded-t-2xl sm:rounded-r-2xl sm:rounded-l-none sm:py-20 pt-4 px-4">
          {!success && !error ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:grid grid-cols-2 gap-4 mb-6">
                <input
                  value={user_name}
                  name="user_name"
                  onChange={(e) => setUser_name(e.target.value)}
                  placeholder="First Name"
                  type="text"
                  required
                  className="border border-slate-400 py-1 px-2"
                />
                <input
                  value={user_surname}
                  name="user_surname"
                  onChange={(e) => setUser_surname(e.target.value)}
                  placeholder="Last Name"
                  type="text"
                  required
                  className="border border-slate-400 py-1 px-2"
                />
              </div>
              <div className="flex flex-col mt-5 gap-4 mb-6">
                <input
                  value={user_email}
                  name="user_email"
                  onChange={(e) => setUser_email(e.target.value)}
                  placeholder="Email"
                  type="email"
                  required
                  className="w-full border border-slate-400 py-1 px-2 mb-6"
                />
                <textarea
                  value={user_message}
                  name="user_message"
                  onChange={(e) => setUser_messae(e.target.value)}
                  placeholder="Enter your message ..."
                  required
                  maxLength={500}
                  className="py-1 px-2 h-48 border border-slate-400 resize-none"
                ></textarea>
              </div>
              <div className="mt-5 flex justify-center">
                <input
                  required
                  checked={user_check}
                  onChange={(e) => setUser_check(e.target.checked)}
                  type="checkbox"
                  name="check"
                  id="check"
                  className="border border-slate-400 mr-4"
                />
                <span>
                  {" "}
                  I accept the{" "}
                  <a className="text-green-500 font-semibold" href="">
                    terms of Use
                  </a>{" "}
                  &{" "}
                  <a className="text-green-500 font-semibold" href="">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-10 w-full flex justify-center">
                <button className="bg-green-200 hover:bg-green-300 w-1/2 rounded-2xl py-2 my-4 text-xl sm:text-2xl font-bold tracking-wide text-slate-600">
                  Send
                </button>
              </div>
            </form>
          ) : success ? (
            <div
              onClick={() => setSuccess(false)}
              className="my-[50%] sm:mt-10 py-4 px-2 text-center bg-green-300 shadow-xl font-bold tracking-wide text-slate-600 rounded-lg text-xl sm:text-2xl cursor-pointer"
            >
              Sent successfully
            </div>
          ) : (
            <div
              onClick={() => setError(false)}
              className="my-[50%] sm:mt-10 py-4 text-center bg-red-300 shadow-xl font-bold tracking-wide text-slate-600 rounded-lg text-xl sm:text-2xl cursor-pointer"
            >
              Error: Please try again
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
