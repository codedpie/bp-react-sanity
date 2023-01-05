import './style.scss'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import BrandSection from '../../components/brandSection'
import ProjectCards from '../../components/projectCards'
import NavBar from "../../components/navbar"

const PersonalPortfolio = () => {
    return(
        <>
            <Helmet>
                <title>Stact - Personal Portfolio</title>
            </Helmet>
            <NavBar/>
            <div className="portfolio-container">
                <Hero/>
                <About/>
                <Counters/>
                <PersonalDetails/>
                <Projects/>
                <PortfolioFooter/>
            </div>
        </>
    )
}

const Hero = () => {
    return(
        <>
            <section className="section-global bg-shade-green hero">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-4 col-lg-5 align-self-center">
                            <h1>Hi, I’m Nellie Paul</h1>
                            <p className='txt-1 mb-20 mt-16'>I'm a freelance UIX designer based in San Francisco that creates beautiful websites for companies all around the world.</p>
                            <Link to='/' className='btn btn-primary btn-lg'>Hire me</Link>
                        </div>
                        <div className="col-xl-8 col-lg-7 align-self-center d-flex justify-content-center text-center">
                            <div style={{maxWidth: '650px'}}>
                                <img src={require('./assets/hero_image.png')} className="img-fluid" alt='hero' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const About = () => {
    return(
        <>
            <section className='section-global'>
                <div className="container container-2">
                    <div className="row gy-4">
                        <div className="col-lg-4">
                            <h2>More about me...</h2>
                        </div>
                        <div className="col-lg-8">
                            <p className='txt-1'>
                                Let me give you a little introduction to myself. I'm an Canadian developer with a lot of experience. I learnt Digital Marketing through various online courses and through attending events. I'm also a Google certified Digital Marketing Consultant.
                                <br/><br/>
                                I've worked for a couple firms in my marketing career and am presently freelancing. My whole professional life hinges on three words, which you will discover further down. My primary goal is to make money for both the business owner and the client.
                            </p>
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
            count: '1K+',
            text: 'Delivered projects'
        },
        {
            count: '05',
            text: 'Years of experience'
        },
        {
            count: '09',
            text: 'Awards won'
        },
        {
            count: '900',
            text: 'Designs delivered'
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

const PersonalDetails = () => {

    const details = [
        {
            title: 'Skills',
            data: [
                {title: 'UI/UX Designing', text: 'Pro'},
                {title: 'Web Development', text: 'Intermediate'},
                {title: 'Digital Marketing', text: 'Beginner'},
                {title: 'Animation', text: 'Intermediate'}
            ]
        },
        {
            title: 'Experience',
            data: [
                {title: 'Game Developer', text: 'Ubisoft • 2019 - current'},
                {title: 'Full stack developer', text: 'Microsoft • 2018 - 2019'},
                {title: 'Software Engineer', text: 'Amazon • 2016 - 2018'}
            ]
        },
        {
            title: 'Education',
            data: [
                {title: 'Game and VFX development', text: 'Harvard • 2015 - 2017'},
                {title: 'Masters of CSE', text: 'MIT • 2013 - 2015'},
                {title: 'B. Tech in CSE', text: 'UC Berkeley • 2008 - 2012'}
            ]
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
            <section className='section-global'>
                <div className="container container-2">
                    <div className="row gy-5">
                        {details.map((e,i)=>
                            <div className="col-lg-4 col-md-6 col-sm-5" key={i}>
                                <h2 className='display-2 mb-40'>{e.title}</h2>
                                {e.data.map((x,j)=>
                                    <div key={j} className="mb-16">
                                        <h4 className='mb-0'>{x.title}</h4>
                                        <div className='txt-3'>{x.text}</div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <BrandSection brands={brands} src={'personalPortfolio'} customTitle="Brands I’ve worked with" light bg="bg-shade-1" pt/>
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
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project4.png',
            color: "#F15757",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project5.png',
            color: "#7F57F1",
            link: '/project-detail'
        },
        {
            category: 'branding',
            text: "Teno's journey from small to giant",
            imgUrl: 'assets/project6.png',
            color: "#007AFF",
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
                            <h2>My recently compeleted projects</h2>
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
                        <ProjectCards data={projects_data} src="personalPortfolio" />
                    </div>
                </div>
            </section>
        </>
    )
}

const PortfolioFooter = () => {

    const contactLinkData = [
        {
            title: "Email",
            text: "nellie@email.com",
            icoUrl: "assets/contact_ico1.svg",
            link: "mailto:nellie@email.com"
        },
        {
            title: "Phone",
            text: "+91 123 4567 890",
            icoUrl: "assets/contact_ico2.svg",
            link: "tel:+911234567890"
        }
    ]

    return(
        <>
            <section className='section-global dark'>
                <div className="container container-2">
                    <div className="row gy-4">
                        <div className="col-lg-6 col-md-6">
                            <h2 className='mb-16'>Let’s collab...</h2>
                            <p className='txt-2'>You've come to the right spot at the right moment if you're beginning a business or stuck in the middle and need a creative Digital Marketer to help you grow your business or enhance your user engagements.</p>
                        </div>
                        <div className="col-lg-4 offset-lg-2 col-md-6">
                            <div className="contact-link-container">
                                {
                                    contactLinkData.map((e,i) =>
                                            <a href={e.link} className="contact-link" key={i}>
                                                <div className="contact-link-container d-flex align-items-center">
                                                    <img src={require(`./${e.icoUrl}`)} height="50" alt={e.title} />
                                                    <div className='ms-3'>
                                                        <div className="txt-2 fw-500 color-1">{e.title}</div>
                                                        <div className="txt-3">{e.text}</div>
                                                    </div>
                                                </div>
                                            </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='portfolio-footer-bottom dark'>  
                <div className="container container-2 py-4">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-between">
                            <div className="copyright txt-3">Copyright © 2021 Stact Inc.</div>
                            <div className="social-link">
                                    <a href='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>
                                    </a>
                                    <a href='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </a>
                                    <a href='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                    </a>
                                    <a href='/'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                        </svg>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PersonalPortfolio