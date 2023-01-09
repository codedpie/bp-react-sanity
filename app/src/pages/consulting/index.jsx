import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import BrandSection from "../../components/brandSection"
import ContactSection from "../../components/contactSection"
import Footer from "../../components/footer"
import NavBar from "../../components/navbar"
import ServiceCards from "../../components/serviceCards"
import TestimonialCards from "../../components/testimonialCards"
import './style.scss'
import { Accordion } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Branding Pioneers</title>
            </Helmet>
            <NavBar />
            <div className="consulting">
                <Hero />
                <Services />
                <About />
                <Culture />
                <Testimonials />
                <FAQSection />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

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


const Hero = () => {
    return (
        <>
            <section className="section-global no-border">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            <h1>Attract more patients and boost your revenue with our healthcare digital marketing solutions.</h1>
                            <p className='txt-1 mt-16 me-lg-5'>Experience exceptional results with us.</p>
                            {/* <form className='mt-20 me-lg-5'>
                                <div className="cta-form d-flex align-items-center justify-content-between">
                                    <div className="cta-input">
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                                    </div>
                                    <div className="cta-btn">
                                        <button type="submit" className="btn btn-primary btn-lg">Get a demo</button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                        <div className="col-lg-6 align-self-center">
                            {/* <img src={require('./assets/hero_image.png')} className="img-fluid" alt="hero" /> */}
                            <img src='https://dummyimage.com/974x746/ccc/fff.jpg' className="img-fluid" alt="hero" />
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} src={'consulting'} bordered />
        </>
    )
}

const Services = () => {
    const services = [
        {
            name: 'Digital Patient Acquisition',
            info: ['Search Engine Optimization', 'Performance Ads & Lead Generation', 'Local SEO'],
            link: '/services',
            icoUrl: 'assets/service_ico1.svg'
        },
        {
            name: 'Reputation Management',
            info: ['Google Review Management', 'Quora Review', 'Testimonials Video Creation'],
            link: '/services',
            icoUrl: 'assets/service_ico2.svg'
        },
        {
            name: 'Brand Building',
            info: ['Social Media Marketing', 'Video Marketing', 'Influencer & PR'],
            link: '/services',
            icoUrl: 'assets/service_ico3.svg'
        },
        {
            name: 'Sales Automation',
            info: ['CRM', 'Leadmade', 'IVM & Call Tracking'],
            link: '/services',
            icoUrl: 'assets/service_ico4.svg'
        }
    ]
    return (
        <>
            <section className="section-global">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">Our Services</div>
                            <h2>Best in class innovative tech solutions</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services.map((service, i) =>
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 gx-5 gy-4" key={i}>
                                    <ServiceCards data={service} src="consulting" />
                                </div>)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const FAQSection = () => {
    const FAQ_data = [
        {
            title: 'Why Branding Pioneers?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How my basic account is evaluated?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How can I upgrade from basic to team plan?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How user research takes place in Stact?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How many people can join collaborative space?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        },
        {
            title: 'How to redeem student discounts?',
            text: 'Our goal is to enable your business to reach its full potential with the help of our digital tools. Our fully integrated suite of applications lets you focus on your core business, while we take care of all aspects of the technology stack.'
        }
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">FAQ's</div>
                            <h2>Do You Have Questions?</h2>
                        </div>
                        <div className="col-12">
                            <Accordion alwaysOpen flush>
                                {FAQ_data.map((e, i) =>
                                    <Accordion.Item eventKey={i} key={i}>
                                        <Accordion.Header>{e.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {e.text}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const About = () => {
    return (
        <>
            <section className="section-global bg-shade-1">
                <div className="container">
                    <div className="row mb-40 gy-4">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center align-items-center">
                            <div style={{ maxWidth: '600px', boxShadow: '6px 6px #000' }}>
                                <img src='https://dummyimage.com/927x622/ccc/fff.jpg' className="img-fluid" alt="About" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Growth</div>
                            <h2 className='mb-16'>Why Branding Pioneers?</h2>
                            <p className='txt-1'>
                                Branding Pioneers is a full-service digital marketing agency specializing in the healthcare industry. We have a team of experienced professionals who understand the healthcare industry and know how to get your website in front of the right people. From improving your online presence to driving more traffic to your website, we'll help you achieve your goals.
                            </p>
                        </div>
                    </div>
                    <div className="row pt-5 gy-4">
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Solutions</div>
                            <h2 className='mb-16'>Our Reporting Solutions</h2>
                            <p className='txt-1'>Our reporting process is a bit different than what you may be used to. We don't just focus on SEO tactics like on-page and off-page optimization. Instead, we take a more holistic approach that includes all aspects of your digital marketing strategy.<br /><br />This means that we not only look at your website and see how it's performing in search engines, but we also track your social media engagement, email marketing campaigns, and anything else that's happening online. We then compile all of this data into an easy-to-understand report so you can see which areas are working well and which need improvement.</p>
                        </div>
                        <div className="col-lg-6 align-self-center d-flex justify-content-center align-items-center">
                            <div style={{ maxWidth: '600px', boxShadow: '6px 6px #000' }}>
                                <img src='https://dummyimage.com/927x622/ccc/fff.jpg' className="img-fluid" alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-40 gy-4">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center align-items-center">
                            <div style={{ maxWidth: '600px', boxShadow: '6px 6px #000' }}>
                                <img src='https://dummyimage.com/927x622/ccc/fff.jpg' className="img-fluid" alt="About" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Growth</div>
                            <h2 className='mb-16'>Medical Digital Marketing</h2>
                            <p className='txt-1'>Marketing for the healthcare industry is often very different than other industries. While there are undoubtedly many similarities, the needs and behaviors of healthcare customers and practitioners are often radically different. In today's competitive world, every healthcare professional needs a comprehensive digital marketing strategy to stay relevant. With almost half of all searches in India being conducted on mobile devices, it's critical that your healthcare Businesses is easy to find. Branding Pioneers is one of the best healthcare digital marketing agency. We help our clients grow their online presence and reach their target audiences.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Culture = () => {

    const culture_data = [
        {
            imgUrl: './assets/culture_1.png',
            title: 'Industry Experts',
            text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
        },
        {
            imgUrl: './assets/culture_2.png',
            title: 'Growth oriented',
            text: 'We empower digital brands to grow faster by providing services in growth marketing and operations.'
        },
        {
            imgUrl: './assets/culture_3.png',
            title: 'Team spirit',
            text: 'We cut through the clutter to uncover new opportunities, and always ensure customer satisfaction.'
        }
    ]

    return (
        <>
            <section className="section-global">
                <div className="container container-2">
                    <div className="row mb-40">
                        <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 text-center">
                            <div className="section-tag mb-8">Culture</div>
                            <h2>We aspire to be one of the most loved companies in the world</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            culture_data.map((e, i) =>
                                <div className="col-lg-4 col-md-6 col-sm-6 text-center" key={i}>
                                    <img src={require(`${e.imgUrl}`)} className="img-fluid" alt={e.title} />
                                    <h3>{e.title}</h3>
                                    <p className="txt-2">{e.text}</p>
                                </div>
                            )
                        }
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

    return (
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
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <TestimonialCards data={testimonial_data} src="consulting" />
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

    return (
        <>
            <ContactSection contact_data={contact_data} />
        </>
    )
}


export default HomePage