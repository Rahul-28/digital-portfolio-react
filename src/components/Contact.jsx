import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';
import { gmail, socials } from '../../constants';

const Contact = () => {
 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
        .from('#socials', {
			opacity: 0, yPercent: 20, stagger: 0.01
	 })
	})
 
 return (
	<footer id="contact">   	 
	 <div className="content">
		<h2 className='text-yellow'>Where to Find Me</h2>
		
		<div>
		 <h3>Let's Connect</h3>
		 <p>{gmail}</p>
		</div>
		

		<div>
		 <h3>Socials</h3>
		 
		 <div className="flex-center gap-5" id="socials">
			{socials.map((social) => (
			 <a
			 	key={social.name}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
                className={social.className}
			 >
				<img src={social.icon} />
			 </a>
			))}
		 </div>
		</div>
	 </div>
	</footer>
 )
}

export default Contact