import * as React from "react";
import "./App.css";
import Hero from "./component/Hero"
import Feature from "./component/Feature";
import CertificateBanner from "./component/CertificateBanner";
import SocialMedia from "./component/SocialMedia";
function MyComponent() {
  return (
    <main>
      <section className="flex flex-col mx-auto w-full max-w-[480px]">
        <Hero />
        <Feature />
        <CertificateBanner />
        <SocialMedia />
      </section>
    </main>
  );
}

export default MyComponent;
