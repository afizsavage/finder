const Footer = (params) => {
  return (
    <div className="flex justify-center">
      <span>
        © {new Date().getFullYear()} Finder, Inc. All Right Reserved. Privacy
        &amp; Terms
      </span>
    </div>
  );
};

export default Footer;