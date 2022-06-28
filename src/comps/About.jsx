

const About = () => {
  return (
    <section>
      <div className="container w-[85%] md:w-[38rem] lg:w-[58rem] mx-auto px-auto flex flex-col justify-center md:space-y-12 sm:space-y-26">
        <div className="my-20 container w-full flex flex-col justify-center align-middle mx-auto md:space-y-6 space-y-5">
          <h1 className="flex justify-center lg:hidden text-white text-center text-3xl md:text-5xl font-bold tracking-wider">
            ABOUT ME
          </h1>
          <p id="about" className="text-white font-thin text-4xl text-center">
            I’m passionate about software development and I’m skilled in HTML,
            JavaScript, and React. I’m now looking for a junior dev position as
            I recently learned how to code by myself.”
          </p>
          <p id="about" className="text-white font-thin text-4xl text-center">
            My Goal is to continuosly grow as a developer while stying current
            with latest trends and technolgies.
          </p>
        </div>
        <div className=" w-[17rem] md:w-fit mx-auto flex flex-col justify-center space-y-10 mb-16">
          <h1 className=" text-white text-center text-3xl md:text-5xl font-bold tracking-wider">
            MY TECH STACK
          </h1>
          <div className="m-0 grid gap-y-8 md:gap-y-16 grid-cols-2 gap-x-10 md:grid-cols-3 lg:grid-cols-4 place-items-center md:py-8">
            <div className="flex flex-row space-x-2 items-center">
              <img
                src="https://res.cloudinary.com/dvqbyum5o/image/upload/v1652714761/html_5_bupbxx.svg"
                alt=""
              />
              <h4
                id="techs"
                className="text-white text-sm  md:text-xl lg:text-2xl  tracking-widest"
              >
                HTML
              </h4>
            </div>
            <div className="flex flex-row space-x-2 w-fit items-center">
              <img
                src="https://res.cloudinary.com/dvqbyum5o/image/upload/v1652714761/css_3_kubde7.svg"
                alt=""
              />
              <h4
                id="techs"
                className="text-white text-sm  md:text-xl lg:text-2xl  tracking-widest"
              >
                CSS
              </h4>
            </div>
            <div className="flex flex-row space-x-2 w-fit items-center">
              <img
                src="https://res.cloudinary.com/dvqbyum5o/image/upload/v1652714762/js_wdwuoz.svg"
                alt=""
              />
              <h4
                id="techs"
                className="text-white text-sm  md:text-xl lg:text-2xl  tracking-widest"
              >
                JAVASCRIPT
              </h4>
            </div>
            <div className="flex flex-row space-x-2 w-fit items-center">
              <img
                src="https://res.cloudinary.com/dvqbyum5o/image/upload/v1652714761/react_cd8amf.svg"
                alt=""
              />
              <h4
                id="techs"
                className="text-white text-sm  md:text-xl lg:text-2xl tracking-widest"
              >
                REACT
              </h4>
            </div>
            <div className="flex flex-row space-x-2 w-fit items-center">
              <img
                src="https://res.cloudinary.com/dvqbyum5o/image/upload/v1652714763/Vector_vxpdki.svg"
                alt=""
              />
              <h4
                id="techs"
                className="text-white text-sm  md:text-xl lg:text-2xl  tracking-widest"
              >
                TAILWIND
              </h4>
            </div>
            <div className="flex flex-row space-x-2 w-fit mx-auto items-center">
              <img
                src="https://res.cloudinary.com/dvqbyum5o/image/upload/v1652714762/bootstrap-logo_1_hdbsub.svg"
                alt=""
              />
              <h4
                id="techs"
                className="text-white text-sm  md:text-xl lg:text-2xl tracking-widest"
              >
                BOOTSTRAP
              </h4>
            </div>
            <div className="flex flex-row space-x-2 w-fit mx-auto items-center">
              <img
                src="https://res.cloudinary.com/dvqbyum5o/image/upload/v1652714764/sass-1-logo-png-transparent_1_iuqwac.svg"
                alt=""
              />
              <h4
                id="techs"
                className="text-white text-sm  md:text-xl lg:text-2xl tracking-widest"
              >
                SASS
              </h4>
            </div>
            <div className="flex flex-row space-x-2 w-fit  items-center">
              <img
                src="https://res.cloudinary.com/dvqbyum5o/image/upload/v1652714762/Frame_14_lwykn4.svg"
                alt=""
              />
              <h4
                id="techs"
                className="text-white text-sm  md:text-xl lg:text-2xl tracking-widest"
              >
                FIGMA
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
