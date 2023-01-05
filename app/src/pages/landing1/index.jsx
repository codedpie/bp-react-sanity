import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
// import BlogCards from '../../components/blogCards'
import BrandSection from '../../components/brandSection'
import Footer from '../../components/footer'
import PricingCard from '../../components/pricingCard'
import ServiceCards from '../../components/serviceCards'
import './style.scss'
import NavBar from "../../components/navbar"
import ContactSection from '../../components/contactSection'

const Landing1 = () => {
    return (
        <>
            <Helmet>
                <title>Stact - Landing1</title>
            </Helmet>
            <NavBar/>
            <div className='landing-1'>
                <Hero />
                <Services />
                <About />
                <Counters />
                <Pricing />
                <Blog />
                <Contact />
                <Footer/>
            </div>
        </>
    )
}

const Hero = () => {

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

    return (
        <>
            <section className='section-global no-border bg-shade-blue hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h1>We build brands digitally</h1>
                            <p className='txt-1 mt-16 me-lg-5'>Become a part of this digital revolution today with the best in class solutions of stact.</p>
                            <form className='mt-20 me-lg-5'>
                                <div className="cta-form d-flex align-items-center justify-content-between">
                                    <div className="cta-input">
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                                    </div>
                                    <div className="cta-btn">
                                        <button type="submit" className="btn btn-primary btn-lg">Get a demo</button>
                                    </div>
                                </div>
                            </form>
                            <p className='mt-16 mb-0 txt-4'>or Checkout our recently updated and value for money <Link className='white-link' to='/'>pricing plans.</Link></p>
                        </div>
                        <div className="col-lg-6 align-self-center d-flex justify-content-center text-center">
                            <div style={{maxWidth: '450px'}}>
                                <img src={require('./assets/hero_image.png')} className="img-fluid mt-5 mt-lg-0" alt='hero' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} src={'landing1'} bg="bg-shade-blue" light bordered/>
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
            <section className="section-global">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">Services</div>
                            <h2>Best in class innovative tech solutions</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services.map((service,i) => 
                                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 gx-5 gy-4"  key={i}>
                                    <ServiceCards data={service} src="landing1"/>
                                </div>                    
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

const About = () => {
    const timeline = [
        {
            title: 'Research',
            text: 'We mine data, uncover insights and identify opportunities'
        },
        {
            title: 'Build',
            text: 'We architect websites and apps to solve user problems'
        },
        {
            title: 'Scale',
            text: 'Continuous Delivery pipelines to ensure fast iteration'
        }
    ]
    return(
        <>
            <section className='section-global bg-shade-1'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 text-center align-self-center">
                            <img src={require('./assets/about.png')} className="img-fluid about-banner-image" alt="how we work" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-tag mb-8">How we work</div>
                            <h2 className='mb-16'>Manage your business effortlessly with Stact</h2>
                            <p className='txt-1 mb-16'>We empower digital brands to grow faster by providing services in growth marketing + operations and venture capital.</p>
                            <div className="time-line">
                                {timeline.map((e,i)=> 
                                    <div className="content" key={i}>
                                        <div className="index">{i+1}</div>
                                        <h3 className='mb-8 mb-0'>{e.title}</h3>
                                        <p className='txt-2 mb-0'>{e.text}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Counters = () => {
    const counter_data = [
        {
            count: '5K+',
            text: 'Delivered projects'
        },
        {
            count: '43%',
            text: 'Market share'
        },
        {
            count: '75',
            text: 'Awards won'
        },
        {
            count: '3m+',
            text: 'Users worldwide'
        }
    ]
    return (
        <>
            <section className='counter-section dark'>
                <div className="container">
                    <div className="row">
                        {counter_data.map((e,i) => 
                            <div className="col-lg-3 col-md-4 col-6 gy-4 text-center" key={i}>
                                <h2 className="display-1">
                                    {e.count}
                                </h2>
                                <p className='txt-1'>{e.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

const Pricing = () => {

    const pricing_data = [
        {
            title: 'Basic',
            text: 'For personal or small teams',
            price: '$39',
            period: 'month',
            included: ['Enterprise-grade security','Performance Reviews','360º feedback'],
            not_included: ["Data insights","Employee management"]
        },
        {
            title: 'Pro',
            text: 'For big teams',
            price: '$59',
            period: 'month',
            included: ['Enterprise-grade security','Performance Reviews','360º feedback',"Data insights"],
            not_included: ["Employee management"],
            featured: true
        },
        {
            title: 'Enterprise',
            text: 'For big organizations',
            price: '$79',
            period: 'month',
            included: ['Enterprise-grade security','Performance Reviews','360º feedback',"Data insights","Employee management"],
            buttonLabel: 'Contact sales'
        }
    ]
    
    return(
        <>
            <section className='section-global'>
                <div className="container container-2">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">Pricing</div>
                            <h2>Flexible plans that feet in all of your needs</h2>
                        </div>
                    </div>
                    <div className="row">
                        {pricing_data.map((e,i)=> 
                            <div className="col-lg-4 col-md-6 gy-4" key={i}>
                                <PricingCard data={e}/>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

const Blog = () => {

    // const blog_data = [
    //     {
    //         category: 'leadership',
    //         title: 'How Stact helps you make values visible in your business.',
    //         date: '09 Sept, 2021',
    //         imgUrl: 'assets/blog_thumb1.jpg',
    //         link: '/blog-article'
    //     },
    //     {
    //         category: 'announcement',
    //         title: "Values (What They Are, Why They're Important)",
    //         date: '09 Sept, 2021',
    //         imgUrl: 'assets/blog_thumb2.jpg',
    //         link: '/blog-article'
    //     },
    //     {
    //         category: 'culture',
    //         title: 'How Our Tools Will Change The Way You Create Content',
    //         date: '09 Sept, 2021',
    //         imgUrl: 'assets/blog_thumb3.jpg',
    //         link: '/blog-article'
    //     }
    // ]

    return(
        <>
            <section className='section-global bg-shade-green'>
                <div className="container">
                    <div className="row mb-40 justify-content-between gy-4">
                        <div className="col-xl-5 col-lg-5">
                            <div className="section-tag mb-8">Blog</div>
                            <h2>Stay updated with our insider affairs</h2>
                        </div>
                        <div className="col d-flex align-self-center">
                            <Link to='/blog' className='btn btn-outline btn-arrow ms-lg-auto'>
                                Go to blog
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        {/* <BlogCards data={blog_data} src='landing1'/> */}
                    </div>
                </div>
            </section>
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

export default Landing1