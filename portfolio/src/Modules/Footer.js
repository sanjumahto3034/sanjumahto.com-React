import React from "react";
import "../Modules/Footer.css";
function Footer() {
  const footer_text = "@sanjumahto (Latest) v6";
  const footer_version = "v1";
  const older_version = [
    {
      key: "v1",
      value: "https://v1.sanjudev.site",
    },
    {
      key: "v2",
      value: "https://v2.sanjudev.site",
    },
    {
      key: "v3",
      value: "https://v3.sanjudev.site",
    },
    {
      key: "v4",
      value: "https://v4.sanjudev.site",
    },
    {
      key: "v5",
      value: "https://v5.sanjudev.site",
    },
  ];
  const portfolio_code = "";
  const fontSize = { fontSize: "0.8rem" };
  return (
    <div
      className="footer_parent"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <div>
        {footer_text.split("").map((char, index) => (
          <span key={index} className="char_name" style={fontSize}>
            {char}
          </span>
        ))}
      </div>
      <div className="portfolio_source_code">
        {portfolio_code.split("").map((char, index) => (
          <span key={index} className="char_name" style={fontSize}>
            {char}
          </span>
        ))}
      </div>

      {older_version.map((value, index) => (
        <div
          key={index}
          className="portfolio_old_version"
          onClick={() => {
            window.open(value.value);
          }}
        >
          {value.key.split("").map((char, __index) => (
            <span key={__index} className="char_name" style={fontSize}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Footer;
