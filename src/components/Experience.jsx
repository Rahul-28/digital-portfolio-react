import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { experiences } from "../../constants";

const Experience = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {

        const start = isMobile ? 'top 20%' : 'top top';
        
        const timeline = gsap.timeline({
           scrollTrigger: {
                trigger: '#experience',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })
        timeline
            .to('.fade-text', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
            .to('.exp-card', { scale: 1.3, duration: 0.8, ease: 'ease.inOut '})
    })


    return (
        <div id="experience">
            <h2 className="fade-text">My Experience</h2>

                <div className="content">
                    <ul>
                        {experiences.map(({ duration, title, company, locationType }, idx) => (
                            <li key={idx}>
                                <div className="exp-card">
                                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{duration}</span>
                                    <h3 className="text-lg font-bold text-blue-600">{title}</h3>
                                    <p className="text-gray-800 font-medium">{company}</p>
                                    <p className="text-xs text-gray-500">{locationType}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default Experience;