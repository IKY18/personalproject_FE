import React from "react";

export default function About() {
  return (
    <div class="shadow-1-strong bg-white my-5 p-5" id="about">
      <div class="about-section">
        <div class="row">
          <div class="col-md-6">
            <h2 class="h2 fw-light mb-4">About Me</h2>
            <p>
              Hello! I'm Elvano Rizky Barahama. I am 21 years old I am the
              youngest of three siblings.I am currently studying at Klabat
              University, Faculty of Computer Science, majoring in Informatics
              Engineering.
            </p>
          </div>
          <div class="col-md-5 offset-lg-1">
            <div class="row mt-2">
              <h2 class="h2 fw-light mb-4">Bio</h2>
              <div class="col-sm-5">
                <div class="pb-2 fw-bolder">
                  <i
                    class="far fa-calendar-alt pe-2 text-muted"
                    style={{ width: "24px", opacity: "0.85" }}
                  ></i>
                  Age
                </div>
              </div>
              <div class="col-sm-7">
                <div class="pb-2">21</div>
              </div>
              <div class="col-sm-5">
                <div class="pb-2 fw-bolder">
                  <i
                    class="far fa-envelope pe-2 text-muted"
                    style={{ width: "24px", opacity: "0.85" }}
                  ></i>
                  Email
                </div>
              </div>
              <div class="col-sm-7">
                <div class="pb-2">barahama420@gmail.com</div>
              </div>
              <div class="col-sm-5">
                <div class="pb-2 fw-bolder">
                  <i
                    class="fas fa-phone pe-2 text-muted"
                    style={{ width: "24px", opacity: "0.85" }}
                  ></i>
                  Phone
                </div>
              </div>
              <div class="col-sm-7">
                <div class="pb-2">082190269264</div>
              </div>
              <div class="col-sm-5">
                <div class="pb-2 fw-bolder">
                  <i
                    class="fas fa-map-marker-alt pe-2 text-muted"
                    style={{ width: "24px", opacity: "0.85" }}
                  ></i>
                  Address
                </div>
              </div>
              <div class="col-sm-7">
                <div class="pb-2">
                  Airmadidi atas, Airmadidi, North minahasa Regency, North
                  Sulawesi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
