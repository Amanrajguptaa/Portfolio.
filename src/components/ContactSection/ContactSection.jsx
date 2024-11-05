import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className=" md:mt-40">
      <div>
        <h2 className="font-horizon text-3xl md:text-7xl text-center">CONTACT ME</h2>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:gap-28 md:mt-20 ">
          <form action="#" className=" w-full md:w-[43%] bg-slate-500 p-10 rounded-xl">
            <div class="mb-4">
              <label for="name" class="block text-white font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="border rounded w-full py-2 px-3 text-black  border-black"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block  text-white font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="border rounded w-full py-2 px-3 text-black border-black"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block  text-white font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="border rounded w-full py-2 px-3 text-black  border-black"
              ></textarea>
            </div>
            <div class="flex justify-end">
              <button
                type="submit"
                class=" bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
          <img className="h-[500px] w-[500px]" src="/contact.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
