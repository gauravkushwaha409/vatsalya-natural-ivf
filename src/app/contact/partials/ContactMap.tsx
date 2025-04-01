const ContactMap = () => {
  return (
    <section className="overflow-hidden">
      <div className="w-full h-[55vh] transition-all duration-300 ease-out">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.058104155192!2d85.3227382750634!3d27.715492225132884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f958b950b%3A0x6882ae078bfd75ac!2sVatsalya%20Natural%20IVF!5e0!3m2!1sen!2snp!4v1743501417244!5m2!1sen!2snp"
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
