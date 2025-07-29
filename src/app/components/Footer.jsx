import React from "react";
import Footericon from "./Footericons";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <span className="text-lg text-slate-600 font-semibold">sanjeevbisht@myyahoo.com</span>
        <p className="text-slate-600 text-sm">© 2025 Sanjeev Bisht | Bringing ideas to life.</p>
        <Footericon />
      </div>
    </footer>
  );
};

export default Footer;