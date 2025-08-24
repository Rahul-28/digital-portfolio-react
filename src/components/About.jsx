import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { technologyImages } from "../../constants";
import { SplitText } from "gsap/all";

const About = () => {
    const carouselRef = useRef(null);

    useGSAP(() => {

        const aboutSplit1 = new SplitText(".about-content-1", {
            type: "lines",
        });

        const aboutSplit2 = new SplitText(".about-content-2", {
            type: "lines",
        });

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })

        const images = gsap.utils.toArray(carouselRef.current.children);
        images.forEach(img => {
            const clone = img.cloneNode(true);
            carouselRef.current.appendChild(clone);
        });

        const totalWidth = carouselRef.current.scrollWidth / 2; 
        gsap.set(carouselRef.current, { x: 0 });

        gsap.to(carouselRef.current, {
            x: -totalWidth,
            duration: 40,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => {
                    if (Math.abs(x) >= totalWidth) return 0;
                    return x;
                })
            }
        });

        scrollTimeline
        .from(aboutSplit1.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.02,
            delay: 0.8,
        })
        .from(aboutSplit2.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.04,
            delay: 0.4,
        }, '-=0.5');     

    }, []);

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <a href="#about" className="badge">About Me</a>
                        <h2 c>
                            Passion for creativity -
                            driven by curiosity
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p className="about-content-1">
                            Hi! I’m Rahul Rajesh, a dedicated web developer with a keen eye for design and a passion for 
                            building intuitive, accessible digital experiences. Having worked on projects 
                            across multiple domains, I thrive on transforming ideas into polished, 
                            user-friendly realities.
                        </p>
                        <p className="about-content-2">
                            Always curious and creative—whether coding, exploring 
                            new tech, or finding inspiration outside the screen.
                        </p>
                    </div>
                </div>
            </div>

            <h1>My tech Stack</h1>

            <div className="carousel" style={{ whiteSpace: "nowrap", width: "100%" }}>
                <div ref={carouselRef} className="flex">
                    {technologyImages.map((image, idx) => (
                        <img
                            key={image.alt + idx}
                            src={image.link}
                            alt={image.alt}
                            className="grayscale hover:grayscale-0 p-5 w-[100px] h-[100px] object-contain"
                            tooltip={image.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
