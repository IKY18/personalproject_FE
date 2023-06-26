import React from "react";

export default function Navigation() {
  return (
    <header class="d-print-none">
      <div class="container text-center text-lg-left">
        <div class="pt-4 clearfix">
          <h1 class="site-title mb-0">Elvano Rizky Barahama - CV</h1>
          <div class="site-nav">
            <nav role="navigation">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link" href="#about" title="About">
                    <span class="menu-title">About</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#skills" title="Skills">
                    <span class="menu-title">Skills</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#interest" title="Intereset">
                    <span class="menu-title">Interest</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#education" title="Education">
                    <span class="menu-title">Education</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact" title="Contact">
                    <span class="menu-title">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
