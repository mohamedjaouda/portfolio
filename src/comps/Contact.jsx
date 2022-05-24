import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsFillCheckCircleFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import emailjs from "emailjs-com";
import { useState } from "react";



const Contact = () => {

  const [confirm, setConfirm] = useState(false)
  const [error, setErorr] = useState(false)

  const sendEmail = (e)=> {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text);
          setConfirm(true);
        },
        (error) => {
          // console.log(error.text);
          setErorr(true);
        }
      );
      e.target.reset()
  }



  return (
    <footer>
      <div className="mx-auto flex flex-col justify-center">
        <div className=" w-[85%] lg:w-[85%] mx-auto flex flex-col justify-center space-y-4 py-16">
          <h1 className="text-3xl mx-auto text-white font-bold text-center mb-6 pb-2 tracking-widest border-b-2 border-white">
            CONTACT
          </h1>
          <h1 className="text-sm w-max md:text-lg mx-auto text-sky-400 font-thin text-center mb-6 pb-2 tracking-wide">
            Have a question or want to work together?
          </h1>
          <form
            onSubmit={sendEmail}
            autoComplete="off"
            className=" mx-auto w-full md:w-auto flex flex-col space-y-1 justify-center"
          >
            <input
              type="email"
              name="email"
              required
              className="w-full md:w-[30rem] h-10 rounded-sm bg-lightWhite text-white pl-5"
              placeholder="Email Address"
              autoComplete="off"
            />
            <input
              id="message"
              type="message"
              required
              name="subject"
              className="w-full md:w-[30rem] pb-28 rounded-sm bg-lightWhite pl-5 pt-2 text-white"
              placeholder="Your message"
              autoComplete="off"
            />
            <button
              type="submit"
              className=" ease-in-out duration-100 bg-blue-600 w-28 h-10 rounded-md font-bold text-lg tracking-wider text-zinc-50 hover:bg-blue-500 relative top-2"
            >
              <div className="flex flex-row justify-center mr-3 align-middle">
                <BiSend className="text-white mt-[5px] mr-1" />
                <p className="text-center">Send</p>
              </div>
            </button>

            {confirm && (
              <div className="bg-lightWhite w-72 mx-auto p-2 rounded-md text-white text-center flex flex-row justify-center space-x-2 relative top-6">
                <BsFillCheckCircleFill className="text-green-500 mt-[5px] mr-[5px]" />
                your message was sent. thank you
              </div>
            )}
            {error && (
              <div className="bg-lightRed w-72 mx-auto p-2 rounded-md text-white text-center flex flex-row justify-center space-x-2">
                An Erorr occurred, Please try again.
              </div>
            )}
          </form>
          <div className=" flex flex-row justify-center md:justify-end space-x-10 relative top-20 lg:left-16 pb-10 lg:pb-6">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-jaouda-8833a5200/"
            >
              <BsLinkedin className="text-gray-200 text-2xl hover:text-gray-400 ease-in-out duration-300" />
            </a>
            <a target="_blank" href="https://www.facebook.com/mjaouda">
              <BsFacebook className="text-gray-200 text-2xl hover:text-gray-400 ease-in-out duration-300" />
            </a>
            <a target="_blank" href="https://www.instagram.com/mohamedjaouda/">
              <BsInstagram className="text-gray-200 text-2xl hover:text-gray-400 ease-in-out duration-300" />
            </a>
            <a target="_blank" href="https://twitter.com/mohammed_jaouda">
              <BsTwitter className="text-gray-200 text-2xl hover:text-gray-400 ease-in-out duration-300" />
            </a>
          </div>
        </div>
        <span className="text-lightText text-sm">
          Made & Designed By
          <a href="#" className="hover:text-white">
            @mohammedjaouda
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Contact