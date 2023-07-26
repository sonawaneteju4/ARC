import React from "react";

const TrustedBy = () => {
  return (
    <div>
      <section className=" text-gray-800 text-center">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      . {\n        filter: (100%);\n      }\n    ",
          }}
        />
        <h2 className="lg:text-5xl text-2xl font-bold mb-6" style={{color: "dodgerblue"}}>
          Our Service Partners 
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div className="mb-12 lg:mb-0">
            <img
              src="/image/3m.png"
              className="img-fluid  px-6 md:px-12"
              alt="Nasa - logo"
            />
          </div>
          <div className="mb-12 lg:mb-0">
            <img
              src="/image/avd.png  "
              className="img-fluid  px-6 md:px-12"
              alt="Amazon - logo"
            />
          </div>
          <div className="mb-12 lg:mb-0 font-extrabold  text-5xl">
            {/* <img
              src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/3.png"
              className="img-fluid  px-6 md:px-12"
              alt="Nike - logo"
            /> */}
            <span className="md:px-12 px-6">
            GARAVE TATA MOTAR
            </span>
          </div>
          <div className="mb-12 lg:mb-0 font-extrabold lg:text-5xl">
            <span className="md:px-12 px-6">
           100KMph
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustedBy;
