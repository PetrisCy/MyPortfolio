import React, { useState } from "react";

function Contact() {
  const [msgSent, setMsgSent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3a11a2d4-c91d-47fd-991e-6d490b97db07");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setMsgSent("Message successfully sent");
    }
  };

  return (
    <div
      className="flex flex-col justify-center text-center mt-20 border-t border-gray-500"
      id="contact"
    >
      <h1 className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-4xl sm:text-5lx lg:text-6xl text-center mt-40 ">
        Contact
      </h1>
      <p className="text-center mt-5 text-neutral-400 w-5/6 m-auto ">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <form
        className="container m-auto mt-20 rounded flex flex-col items-center "
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-5 w-5/6 mt-5  bg-zinc-800"
          required
          name="name"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-5 w-5/6 mt-10 bg-zinc-800"
          required
          name="email"
        />
        <div className="w-5/6">
          <textarea
            name="message"
            id=""
            placeholder="Your Message"
            className="w-full mt-10 p-2 h-40  bg-zinc-800 resize-none"
            required
          ></textarea>
          <span className="text-green-400 text-xl block text-left">
            {msgSent}
          </span>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md hover:text-black mt-10 text-m lg:text-xl text-center block w-1/3 lg:w-1/5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;