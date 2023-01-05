import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BrandSection from '../../components/brandSection'
import Footer from '../../components/footer'
import ProjectCards from '../../components/projectCards'
import ServiceCards from '../../components/serviceCards'
import TestimonialCards from '../../components/testimonialCards'
import './style.scss'
import NavBar from "../../components/navbar"
import ContactSection from '../../components/contactSection'
 
const Landing2 = () => {
    return(
        <>
            <Helmet>
                <title>Stact - Landing2</title>
            </Helmet>
            <NavBar/>
            <div className='landing-2'>
                <Hero />
                <About />
                <Services />
                <Projects />
                <InfoSection/>
                <Testimonials />
                <Contact />
                <Footer/>
            </div>
        </>
    )
}

const Hero = () => {
    const counters = [
        {
            count: '5K+',
            text: "Projects"
        },
        {
            count: '75',
            text: "Awards"
        },
        {
            count: '3m+',
            text: "Users"
        }
    ]
    const brands = [
        {
            name: "brand1",
            imgUrl: "assets/brand1.svg"
        },
        {
            name: "brand2",
            imgUrl: "assets/brand2.svg"
        },
        {
            name: "brand3",
            imgUrl: "assets/brand3.svg"
        },
        {
            name: "brand4",
            imgUrl: "assets/brand4.svg"
        },
        {
            name: "brand5",
            imgUrl: "assets/brand5.svg"
        }
    ]
    return(
        <>
            <section className='section-global no-border bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h1 className='mb-16'>Solutions ready for the future.</h1>
                            <p className='txt-1 mb-16'>Become a part of this digital revolution today.</p>
                            <Link to='/' className='btn btn-primary btn-lg'>Get a demo</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to='/' className='btn btn-outline-primary btn-lg'>Learn more</Link>
                            <div className="counter mt-20 d-flex flex-wrap">
                                {counters.map((e,i)=>
                                    <div className="count txt-center" key={i}>
                                        <h2 className='mb-0'>{e.count}</h2>
                                        <div className='txt-2'>{e.text}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div style={{maxWidth: '500px'}}>
                                <img src={require('./assets/hero_image.png')} className="img-fluid mt-5 mt-lg-0" alt='hero' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} src={'landing2'} bg="bg-shade-1" light bordered/>
        </>
    )
}

const About = () => {

    const features_data = [
        "Seamless, comprehensive, and cost-effective",
        "Connect with your customers",
        "Streamline your operations"
    ]

    return(
        <>  
            <section className="section-global">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div className='video-thumb'>
                                <a href='/'>
                                    <img src={require('./assets/video_thumb.jpg')} className="img-fluid" alt="stact" />
                                    <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="39.5" cy="39.5" r="37.5" fill="black"/>
                                        <circle cx="37.5" cy="37.5" r="37" fill="#FFFB9E" stroke="black"/>
                                        <path d="M49.5 37.7021C49.5 38.2851 48.9052 38.7044 48.9052 38.7044L32.2113 49.0452C30.9945 49.8428 30 49.2519 30 47.7407V27.6615C30 26.1464 30.9945 25.5594 32.2133 26.355L48.9072 36.6998C48.9053 36.6998 49.5 37.119 49.5 37.7021Z" fill="black"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Who we are</div>
                            <h2 className='mb-16'>We provide digital solutions for your business</h2>
                            <p className='txt-1'>We craft digital experiences that resonate with your audience and grow your business. If you have a vision for the next big thing, we can help you make it happen. </p>
                            {features_data.map((e,i)=> <div key={i} className="txt-2 color-1 fw-500 mb-8 d-flex align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                                    <rect width="24" height="24" rx="12" fill="#0FA958"/>
                                    <path d="M6.66675 12L10.6667 16L17.3334 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>


                                {e}
                            </div>)}
                            <div className='mt-16'>
                                <Link to="/about" className='arrow-link'>
                                    Learn more
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ms-1'>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="currentColor"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Services = () => {

    const services = [
        {
            name: 'Applied AI',
            info: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.',
            link: '/services',
            icoUrl: 'assets/service_ico1.svg'
        },
        {
            name: 'Cyber Security',
            info: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.',
            link: '/services',
            icoUrl: 'assets/service_ico2.svg'
        },
        {
            name: 'Internet of Things',
            info: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.',
            link: '/services',
            icoUrl: 'assets/service_ico3.svg'
        },
        {
            name: 'Digital Marketing',
            info: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.',
            link: '/services',
            icoUrl: 'assets/service_ico4.svg'
        }
    ]

    return(
        <>
            <section className='section-global bg-shade-pink'>
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Services</div>
                            <h2>Best in class innovative tech solutions</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='/services' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all services
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black"/>
                                </svg>

                            </Link>
                        </div>
                    </div>
                    <div className="row gx-md-5 gy-4">
                        {
                            services.map((service,i) => 
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6"  key={i}>
                                    <ServiceCards data={service} src="landing2"/>
                                </div>                    
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const Projects = () => {

    const projects_data = [
        {
            category: 'development',
            text: 'LAPI - Single entry point API management',
            imgUrl: 'assets/project1.png',
            color: "#F97316",
            link: '/project-detail'
        },
        {
            category: 'design',
            text: 'How Deko manages to scale using Stact',
            imgUrl: 'assets/project2.png',
            color: "#2D7EF8",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project3.png',
            color: "#00AA45",
            link: '/project-detail'
        }
    ]

    return(
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Case Studies</div>
                            <h2>Our recently compeleted projects</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='/projects' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all case studies
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <ProjectCards data={projects_data} src="landing2" />
                    </div>
                </div>
            </section>
        </>
    )
}

const InfoSection = () => {

    const infoData = [
        {
            title: 'Customer Research',
            text: 'We mine data, uncover insights and identify opportunities'
        },
        {
            title: 'User friendly Build',
            text: 'We architect websites and apps to solve user problems'
        },
        {
            title: 'Scalable models',
            text: 'Continuous Delivery pipelines to ensure fast iteration'
        }
    ]

    return(
        <>
            <section className="section-global bg-shade-green">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Why choose Stact?</div>
                            <h2 className='mb-16'>We provide solutions that make our clients' lives simpler</h2>
                            {infoData.map((e,i)=>
                                <div className='d-flex mb-16' key={i}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='me-2'>
                                        <rect width="24" height="24" rx="12" fill="#0FA958"/>
                                        <path d="M6.66675 12L10.6667 16L17.3334 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div>
                                        <h4 className='mb-0'>{e.title}</h4>
                                        <div className="txt-2">{e.text}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-lg-6 text-center align-self-center">
                            <img src={require('./assets/info.png')} className="img-fluid info-banner-image" alt="Why stact" />                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Testimonials = () => {

    const testimonial_data = [
        {
            brandImgUrl: 'assets/review_brand1.svg',
            text: 'Love the product and the service, and the customer care team is awesome. The features are great, too--everything that you need.',
            userName: 'Mary Edwards',
            position: 'Product director',
            userImgUrl: 'assets/review_user1.svg'
        },
        {
            brandImgUrl: 'assets/review_brand2.svg',
            text: 'I recommend this product because it benefits everyone. You will be able to stay connected with your team and clients from all over the world.',
            userName: 'Felisa Rincon',
            position: 'Head of Product',
            userImgUrl: 'assets/review_user2.svg'
        },
        {
            brandImgUrl: 'assets/review_brand3.svg',
            text: 'I was able to get a fully functional online office space that included all the software we needed and it was super cheap!',
            userName: 'Eunice Kennedy',
            position: 'Product director',
            userImgUrl: 'assets/review_user3.svg'
        }
    ]

    return(
        <>
            <div className="section-global bg-shade-blue">
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Customer reviews</div>
                            <h2>Adopted by the most creative individuals</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='/' className='btn btn-outline btn-arrow ms-lg-auto'>
                                See all reviews
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <TestimonialCards data={testimonial_data} src="landing2" />
                    </div>
                </div>
            </div>
        </>
    )
}

const Contact = () => {

    const contact_data = {
            title: 'Have an idea?',
            title_highlight: "Let's talk",
            text: "One of the best industry service providers with top tier talented individuals.",
            link: '/contact'
        }

    return(
        <>
            <ContactSection contact_data={contact_data}/>
        </>
    )
}

export default Landing2