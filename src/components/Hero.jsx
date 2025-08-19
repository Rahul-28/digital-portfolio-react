import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {

    useGSAP(() => {
           const heroSplit = new SplitText(".title", {
            type: "chars, words",
           });

           const hilightHeroSplit = new SplitText(".hilight-title", {
            type: "chars, words",
           });
           
           const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
           });

           heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
           hilightHeroSplit.chars.forEach((char) => char.classList.add("hilight-text-gradient"));

           gsap.from(heroSplit.chars, {
            opacity: 0,
            duration: 1.6,
            ease: "expo.out",
            stagger: 0.06,
           });
           
           gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
           });           
    })

    return (
        <>
            <section id="hero">
                <h1 className="title">
                    The guy behind  <br/>
                    <span className="hilight-title" >the Code</span>
                </h1>

                <div className="body">
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Be. A. Rebel.</p>
			 <p className="subtitle">
				Craft your ideas <br /> into Reality
			 </p>
			</div>
			
			<div className="about-section">
			 <p className="subtitle">
                I'm Rahul, a passionate Developer with a knack for creating stunning digital experiences.
			 </p>

             <span className="flex animate-bounce mt-5">
			 <a href="#about">About Me</a>
             <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M12 19V5" />
                    <path d="M5 12l7 7 7-7" />
                </svg>
             </span>
			</div>
		 </div>
		</div>
            </section>
        </>
    )
}

export default Hero;