import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
// import BlogCards from '../../components/blogCards'
import BrandSection from '../../components/brandSection'
import ContactSection from '../../components/contactSection'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import ProjectCards from '../../components/projectCards'
import ServiceCards from '../../components/serviceCards'
import './style.scss'

const Landing3 = () => {
    return(
        <>
            <Helmet>
                <title>Stact - Landing3</title>
            </Helmet>
            <NavBar/>
            <div className='landing-3'>  
                <Hero />
                <About />
                <Services />
                <Projects />
                <InfoSection/>
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
    return(
        <>
            <section className='section-global no-border bg-shade-green hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Enterprise solutions for next future</h1>
                        </div>
                        <div className="col-lg-6">
                            <p className='txt-1 mb-20'>We cut through the clutter to uncover new opportunities, and then develop and implement winning strategies using the latest technologies.</p>
                            <Link to='/' className='btn btn-primary btn-lg'>Get in touch</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to='/' className='btn btn-outline-primary btn-lg'>Learn more</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-image-container">                            
                                <img src={require('./assets/hero_image.jpg')} className="img-fluid" alt="Stact" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} bg="bg-shade-green" light src={'landing3'} />
        </>
    )
}

const About = () => {
    const capabilities = [
        {
            title: 'Enterprise solutions',
            text: 'Top-notch solutions provider in the industry'
        },
        {
            title: 'Technology services',
            text: 'Top-notch solutions provider in the industry'
        }
    ]
    const counter_data = [
        {
            count: '5K+',
            text: 'Projects'
        },
        {
            count: '75',
            text: 'Awards'
        },
        {
            count: '3m+',
            text: 'Users'
        }
    ]
    return(
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div className="about-img-container">
                                <a href='/'>
                                    <img src={require(`./assets/about.jpg`)} className="img-fluid" alt='about'/>
                                    <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="39.5" cy="39.5" r="37.5" fill="black"/>
                                        <circle cx="37.5" cy="37.5" r="37" fill="#FFFB9E" stroke="black"/>
                                        <path d="M49.5 37.7021C49.5 38.2851 48.9052 38.7044 48.9052 38.7044L32.2113 49.0452C30.9945 49.8428 30 49.2519 30 47.7407V27.6615C30 26.1464 30.9945 25.5594 32.2133 26.355L48.9072 36.6998C48.9053 36.6998 49.5 37.119 49.5 37.7021Z" fill="black"/>
                                    </svg>
                                </a>
                                <div className="counter-section d-flex justify-content-between bg-shade-blue">
                                    {counter_data.map((e,i)=> 
                                        <div className="count text-center" key={i}>
                                            <h2 className='mb-0'>{e.count}</h2>
                                            <div className="txt-2">{e.text}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Who we are</div>
                            <h2 className='mb-16'>Best in class innovative tech solutions</h2>
                            <p className='txt-1 mb-20'>We craft digital experiences that resonate with your audience and grow your business. If you have a vision for the next big thing, we can help you make it happen. </p>
                            <h3 className='mb-16'>Our core capabilities</h3>
                            <div>
                                <div className="row gy-4">
                                    {capabilities.map((e,i)=>
                                        <div className="col-xl-6 col-lg-12 col-md-6" key={i}>
                                            <div className="d-flex capability-card" key={i}>
                                                <div className="count">{i+1}</div>
                                                <div className="ms-2">
                                                    <div className="txt-2 fw-700 color-1">{e.title}</div>
                                                    <div className="txt-3">{e.text}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
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
            <section className='section-global bg-shade-1'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4">
                            <div className="section-tag mb-8">Solutions</div>
                            <h2 className='mb-16'>Best services to deliver digital outcomes</h2>
                            <Link to='/services' className='btn btn-outline btn-arrow'>
                                See all services
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="col-lg-8">
                            <div className="row gx-md-5 gy-5">
                                {
                                    services.map((service,i) => 
                                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6"  key={i}>
                                            <ServiceCards data={service} src="landing3"/>
                                        </div>                    
                                    )
                                }
                            </div>
                        </div>
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
                        <ProjectCards data={projects_data} src="landing3" />
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
            <section className='section-global bg-shade-blue'>
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
                        {/* <BlogCards data={blog_data} src='landing3'/> */}
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


export default Landing3