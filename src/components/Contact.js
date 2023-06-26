import React from "react";

export default function Contact() {
  return (
    <div class="shadow-1-strong bg-white my-5 p-5" id="contact">
      <div class="contant-section">
        <h2 class="h2 fw-light text mb-4">Contact</h2>
        <div class="row mb-4">
          <div class="col-md-5" data-aos="fade-left" data-aos-delay="200">
            <div class="mt-1">
              <div class="h6">
                <i
                  class="fas fa-phone pe-2 text-muted"
                  style={{ width: "24px", opacity: "0.85" }}
                ></i>
                082190269264
              </div>
              <div class="h6">
                <i
                  class="far fa-envelope pe-2 text-muted"
                  style={{ width: "24px", opacity: "0.85" }}
                ></i>
                barahama420@gmail.com
              </div>
            </div>

            <div class="row mb-4"></div>
            <form action="#" method="POST">
              <div></div>
              <div class="form-outline mb-4">
                <div>Your Email Address</div>
                <label>
                  <input type="email" name="email" />
                </label>
              </div>
              <div class="form-outline mb-4">
                <div>Your Message</div>
                <label>
                  <textarea name="message"></textarea>
                </label>
              </div>
              <button class="btn btn-info btn-block mb-4" type="submit">
                Send
              </button>
            </form>
          </div>
          <div
            class="col-md-7 d-print-none"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3827.5269101164486!2d125.17816583001341!3d1.4459888205715434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1669641277843!5m2!1sen!2sid"
              width="600"
              height="460"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
