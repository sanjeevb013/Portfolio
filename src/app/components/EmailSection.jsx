"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";

// Utility validation functions
const validateEmail = (value) => {
  if (!value.trim()) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) return "Invalid email format";
  return "";
};

const validateRequired = (value, fieldName) =>
  !value.trim() ? `${fieldName} is required` : "";

// Reusable Input Field
const InputField = ({ id, label, type = "text", value, setValue, error, setError, placeholder }) => (
  <div className="mb-6">
    <label htmlFor={id} className="text-white block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      value={value}
      onChange={(e) => {
        const val = e.target.value;
        if (!(val.length === 1 && val[0] === " ")) setValue(val);
      }}
      onBlur={() => setError(id === "email" ? validateEmail(value) : validateRequired(value, label))}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Reusable TextArea Field
const TextAreaField = ({ id, label, value, setValue, error, setError, placeholder }) => (
  <div className="mb-6">
    <label htmlFor={id} className="text-white block text-sm font-medium mb-2">
      {label}
    </label>
    <textarea
      id={id}
      placeholder={placeholder}
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      value={value}
      onChange={(e) => {
        const val = e.target.value;
        if (!(val.length === 1 && val[0] === " ")) setValue(val);
      }}
      onBlur={() => setError(validateRequired(value, label))}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSendMessage = useCallback(() => {
    const emailErr = validateEmail(email);
    const subjectErr = validateRequired(subject, "Subject");
    const messageErr = validateRequired(message, "Message");

    setEmailError(emailErr);
    setSubjectError(subjectErr);
    setMessageError(messageErr);

    if (emailErr || subjectErr || messageErr) return;

    const recipient = "sanjeevbisht@myyahoo.com";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom: ${email}`)}`;
    window.location.href = mailtoLink;

    setEmail("");
    setSubject("");
    setMessage("");
  }, [email, subject, message]);

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/sanjeevb013" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sanjeev-bisht-478b56293/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <div>
        <div className="flex flex-col">
          <InputField
            id="email"
            label="Your email"
            value={email}
            setValue={setEmail}
            error={emailError}
            setError={setEmailError}
            placeholder="abc@gmail.com"
          />
          <InputField
            id="subject"
            label="Subject"
            value={subject}
            setValue={setSubject}
            error={subjectError}
            setError={setSubjectError}
            placeholder="Subject"
          />
          <TextAreaField
            id="message"
            label="Message"
            value={message}
            setValue={setMessage}
            error={messageError}
            setError={setMessageError}
            placeholder="Message"
          />

          <button
            onClick={handleSendMessage}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
