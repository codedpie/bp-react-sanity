import Helmet from 'react-helmet'
import FeatureCards from '../components/featureCards'
import Footer from '../components/footer'
import './css/about.scss'
import NavBar from "../components/navbar"
import { Link } from 'react-router-dom'
import TestimonialCards from "../components/testimonialCards"
import ContactSection from '../components/contactSection'
import MainpageArticleSection from '../components/mainpageArticleSection'

const About = () => {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <NavBar />
            <div className="about-container">
                <Hero />
                <AboutSection />
                <Counters />
                <MainpageArticleSection pagename='about' />
                <Features />
                {/* <Team /> */}
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

const Hero = () => {
    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">About Us</div>
                            <h1 className='display-1'>We provide digital solutions for your business</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const AboutSection = () => {
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
    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 align-self-center d-flex justify-content-center">
                            <div className='video-thumb'>
                                <a href='/'>
                                    <img src='https://dummyimage.com/446x304/ccc/fff.jpg' className="img-fluid" alt="stact" />
                                    <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="39.5" cy="39.5" r="37.5" fill="black" />
                                        <circle cx="37.5" cy="37.5" r="37" fill="#FFFB9E" stroke="black" />
                                        <path d="M49.5 37.7021C49.5 38.2851 48.9052 38.7044 48.9052 38.7044L32.2113 49.0452C30.9945 49.8428 30 49.2519 30 47.7407V27.6615C30 26.1464 30.9945 25.5594 32.2133 26.355L48.9072 36.6998C48.9053 36.6998 49.5 37.119 49.5 37.7021Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Who we are</div>
                            <h2 className='mb-16'>Best in class innovative tech solutions</h2>
                            <p className='txt-1 mb-20'>We craft digital experiences that resonate with your audience and grow your business. If you have a vision for the next big thing, we can help you make it happen. </p>
                            <h3 className='mb-16'>Our core capabilities</h3>
                            <div>
                                <div className="row gy-4">
                                    {capabilities.map((e, i) =>
                                        <div className="col-xl-6 col-lg-12 col-md-6" key={i}>
                                            <div className="d-flex capability-card" key={i}>
                                                <div className="count">{i + 1}</div>
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
                        {counter_data.map((e, i) =>
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

const Features = () => {

    const featurs_data = [
        {
            title: 'Research',
            text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
        },
        {
            title: 'Build',
            text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
        },
        {
            title: 'Scale',
            text: 'Our simple process helps us stay nimble, evolve rapidly and ultimately grow brands.'
        }
    ]

    return (
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2 text-center">
                            <div className="section-tag mb-8">How we work</div>
                            <h2>Extremely smooth workflow with cosistancy</h2>
                        </div>
                    </div>
                </div>
                <div className="container container-2">
                    <div className="row gy-4 gx-0 gx-md-5">
                        <FeatureCards data={featurs_data} src='about' />
                    </div>
                </div>
            </section>
        </>
    )
}

// const Team = () => {
//     const team_data = [
//         {
//             name: 'Sarah Winnemucca',
//             position: 'Founder & CEO',
//             imgUrl: 'assets/team1.jpg'
//         },
//         {
//             name: 'Alice Paul',
//             position: 'Founder & CTO',
//             imgUrl: 'assets/team2.jpg'
//         },
//         {
//             name: 'Margaret Sanger',
//             position: 'Chief Revenue Officer',
//             imgUrl: 'assets/team3.jpg'
//         },
//         {
//             name: 'Katharine Lee',
//             position: 'Chief Marketing Officer',
//             imgUrl: 'assets/team4.jpg'
//         }
//     ]
//     return(
//         <>
//             <section className='section-global bg-shade-blue'>
//                 <div className="container container-2">
//                     <div className="row mb-40">
//                         <div className="col-lg-8">
//                             <div className="section-tag mb-8">Team</div>
//                             <h2 className='mb-16'>A team of skilled idividuals that helps you to grow</h2>
//                         </div>
//                     </div>
//                     <div className="row gy-4">
//                         {team_data.map((e,i)=>
//                             <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
//                                 <div className="team-member text-center">
//                                     <img src={require(`./${e.imgUrl}`)} className="img-fluid mb-16" alt={e.name} />
//                                     <div className="txt-2 color-1 fw-500">{e.name}</div>
//                                     <div className="txt-3">{e.position}</div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

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

export default About