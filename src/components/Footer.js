import React, { useEffect, useState } from "react";

export default function Footer() {
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  useEffect(() => {
    fetchSocialMediaLinks();
  }, []);

  const fetchSocialMediaLinks = async () => {
    try {
      const response = await fetch("http://localhost:8080/socialMediaLinks");
      const data = await response.json();
      setSocialMediaLinks(data);
    } catch (error) {
      console.error("Error fetching social media links:", error);
    }
  };

  return (
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">Elvano Rizky Barahama</div>
          <div className="footer-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                {socialMediaLinks.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a className="nav-link" href={link.url} title={link.title}>
                      <i className={`fab ${link.icon}`}></i>
                      <span className="menu-title sr-only">{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
