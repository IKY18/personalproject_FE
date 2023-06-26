import React from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <div class="shadow-1-strong bg-white my-5" id="intro">
      <div class="bg-info text-white">
        <div class="cover bg-image">
          <div
            class="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(2px)",
            }}
          >
            <div class="text-center p-5">
              <div class="avatar p-1">
                <img
                  class="img-thumbnail shadow-2-strong"
                  src={profile}
                  width="160"
                  height="160"
                  alt="avatar"
                />
              </div>
              <div class="header-bio mt-3">
                <div data-aos="zoom-in" data-aos-delay="0">
                  <h2 class="h1">Elvano Rizky Barahama</h2>
                  <p></p>
                </div>
                <div
                  class="header-social mb-3 d-print-none"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                ></div>
                <div class="d-print-none">
                  <a
                    class="btn btn-info btn-lg shadow-sm mt-1"
                    href="#contact"
                    data-aos="fade-left"
                    data-aos-delay="700"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
