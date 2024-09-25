import React from "react";
import Logo from "../../assets/mystivibes.png";

function Footer() {
  return (
    <footer className="flex flex-col items-center p-5 w-full bg-[#400061] max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1140px] justofy-center max-md:max-w-full">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col flex-1 shrink justify-center items-start px-4 w-full basis-0 max-w-[1140px] min-w-[240px] max-md:max-w-full">
            <img
              loading="lazy"
              src={Logo}
              alt="Playace logo"
              className="object-contain w-40 max-w-full aspect-[3.4]"
            />
          </div>
        </div>
        <nav className="mt-12 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex m-1">
                  <FooterColumn title="Quick Links" items={["Host Event"]} />
                  <FooterColumn title="Brands" items={["Feature your brand"]} />
                  <FooterColumn
                    title="Help"
                    items={[
                      "Terms And Conditions",
                      "Privacy Policy",
                      "Refunds",
                      "Disclaimer",
                      "Contact Us",
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                {/* <h3 className="text-sm leading-relaxed text-white uppercase max-md:max-w-full">
                  Subscribe to our newsletter
                </h3> */}
                {/* <form className="flex relative flex-wrap items-start mt-6 text-sm whitespace-nowrap max-md:max-w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex z-0 flex-col flex-1 shrink justify-center px-4 py-3 text-gray-500 rounded-xl border border-solid basis-0 bg-white bg-opacity-10 border-zinc-700 min-h-[39px] min-w-[240px] max-md:max-w-full"
                  />
                  <button
                    type="submit"
                    className="absolute -right-px px-4 py-2 leading-none text-center text-rose-500 rounded-md"
                  >
                    Subscribe
                  </button>
                </form> */}
                <div className="flex gap-4 items-center mt-4">
                  <span className="self-stretch pb-4 my-auto text-sm text-white">
                    Follow us on
                  </span>
                  <SocialIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba7732bc69eb160673b4865cdcf81241b240e74823b49691ac6a88045dc91d9?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
                    alt="Facebook"
                  />
                  <SocialIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/497259964957508c66e4ae2e19f8dfb08cdb6503f5b6818bc76e73f5b813b88d?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
                    alt="Twitter"
                  />
                  <SocialIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4c3b4f018c083a848b24071ba425d157e2bd726b7d390bbb321d2d24443db61?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
                    alt="Instagram"
                  />
                  <SocialIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4f1369ccb02ab364c87e7caa4ec32ab7d207b7a40711679ed9ae81166ca87af?placeholderIfAbsent=true&apiKey=d44aee9adfe64d97a8f6ddc2200f8808"
                    alt="LinkedIn"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex flex-col items-center mx-4 text-sm leading-relaxed text-center text-white pl-[480px] pr-[481px] max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-2.5 justify-center items-center pt-20 pb-8">
            <p className="self-stretch my-auto">&copy; All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-4 text-sm leading-relaxed text-white capitalize min-h-[230px]">
        <h4 className="flex flex-col pb-4 w-full uppercase whitespace-nowrap">
          {title}
        </h4>
        <ul className="list-none p-0">
          {items.map((item, index) => (
            <li key={index} className="flex flex-col pb-4 w-full">
              <a href="#" className="text-white hover:text-gray-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SocialIcon({ src, alt }) {
  return (
    <a href="#" className="flex flex-col self-stretch pb-4 my-auto w-6">
      <div className="flex flex-col justify-center w-6">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="object-contain w-full aspect-square"
        />
      </div>
    </a>
  );
}

export default Footer;
