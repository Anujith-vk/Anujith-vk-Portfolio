import React from "react";
import Section_one from "../Subcomponent/Section-one";
import Section_two from "../Subcomponent/Section_two";
import Section_three from "../Subcomponent/Section_three";
import Section_four from "../Subcomponent/Section_four";
const Fullbody = () => {
  return (
    <section>
      <section id="home" className="relative min-h-screen h-auto flex items-center justify-center px-10 bg-black">
        <Section_one/>
      </section>
      <section id="about" className="bg-black min-h-screen h-auto">
        <Section_two/>
      </section>
      <section id="works" className="bg-black min-h-screen h-auto">
  <Section_three />
</section>

      <section id="contact" className="bg-black min-h-screen h-auto">
        <Section_four/>
      </section>
    </section>
  );
};

export default Fullbody;
