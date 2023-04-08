import React from "react";
import "../styles/index.css";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<article>
				<article className='article1'>
					<h3>Gomarvel</h3>
					<p>
						This Marvel app fetches data from the API! With just a
						few taps, you can access your favorite characters,
						comics, and series.
					</p>
				</article>

				<article className='article2'>
					<h3>FOLLOW US</h3>
					<article>
						<a
							href='https://twitter.com/aditya_K87'
							className='footer-social-links twitter'>
							<span className='social_logo'>
								<BsTwitter />
							</span>
						</a>
						<a
							href='https://github.com/adityaK87'
							className='footer-social-links github'>
							<span className='social_logo'>
								<BsGithub />
							</span>
						</a>
						<a
							href='https://www.linkedin.com/in/adityak87/'
							className='footer-social-links linkedIn'>
							<span className='social_logo'>
								<BsLinkedin />
							</span>
						</a>
					</article>
				</article>
			</article>
			<p className='copyright'>
				<p>
					Made with
					<span className='social_logo'>
						<AiFillHeart />
					</span>
					in India
				</p>
				<p className='copyright-line'>
					Copyright
					<BiCopyright />
					{new Date().getFullYear()}
					<a className='link' href='https://gomarvel.netlify.app/'>
						gomarvel.netlify.app
					</a>
				</p>
			</p>
		</footer>
	);
};

export default Footer;
