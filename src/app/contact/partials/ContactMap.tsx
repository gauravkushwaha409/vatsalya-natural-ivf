import React from "react";

const ContactMap = () => {
  return (
    <section className="  overflow-hidden">
      <div className=" w-full h-[55vh] transition-all duration-300 ease-out">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5218702655384!2d55.27325897851282!3d25.185617442174536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f698bbccc308b%3A0x16faaaf9bd2fda7d!2sDubai%20Approvals%20Team!5e0!3m2!1sen!2snp!4v1739437964075!5m2!1sen!2snp"
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
