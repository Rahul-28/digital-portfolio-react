import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { allExperiences } from "../../constants";
import { useRef, useState } from "react";

const Experience = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const contentRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

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
            .to('.fade-text', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
            .to('.container', { duration: 1, ease: 'ease.inOut', yPercent: -40}, '<50%')
    })

    const totalExperiences = allExperiences.length;

        const goToSlide = (index) => {
        const newIndex = (index + totalExperiences) % totalExperiences;

        setCurrentIndex(newIndex);
    }

    const getCompanyAt = (indexOffset) => {
        return allExperiences[(currentIndex + indexOffset + totalExperiences) % totalExperiences]
    }

    const currentCompany = getCompanyAt(0);

    return (
        <section id="experience" aria-labelledby="menu-heading">

            <h2 className="fade-text">My Experience</h2>

            <div className="container">
                <nav className="company-tabs" aria-label="Company Navigation">
                    {allExperiences.map((experience, index) => {
                        const isActive = index === currentIndex;

                        return (
                            <button 
                                key={experience.id}
                                className={`
                                    ${isActive 
                                    ? 'text-white border-white' 
                                    : 'text-white/50 border-white/50'}
                                `} onClick={() => goToSlide(index)}
                                >
                                {experience.companyName}
                            </button>
                        )
                    })}
                </nav>

                <div className="content">
                    <div className="arrows">
                        <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                            <img src="/images/arrow-left-circle.svg" alt="right-arrow" aria-hidden="true" />
                        </button>

                        <button className="text-right" onClick={() => goToSlide(currentIndex + 1)}>
                            <img src="/images/arrow-right-circle.svg" alt="left-arrow" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="exp-card">
                            <h3 className="text-lg font-bold text-yellow">{currentCompany.title}</h3>
                            <p className="font-medium">{currentCompany.companyName}</p>
                            <p className="text-xs">{currentCompany.locationType}</p>
                    </div>

                    <div className="duration">
                        <div ref={contentRef} className="info">
                            <p>Duration: </p>
                            <p id="title">{currentCompany.duration}</p>
                        </div>

                        <div className="details">
                            <h2>{currentCompany.title}</h2>
                            <p>{currentCompany.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;