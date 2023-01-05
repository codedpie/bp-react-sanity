import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import FeatureCards from '../../components/featureCards'
import Footer from '../../components/footer'
import TestimonialCards from '../../components/testimonialCards'
import './style.scss'
import NavBar from "../../components/navbar"

const AppLanding = () => {
    return(
        <>
            <Helmet>
                <title>Stact - App Landing</title>
            </Helmet>
            <NavBar/>
            <div className="app-landing">
                <Hero />
                <Showcase />
                <Stats />
                <Features />
                <Testimonials />
                <EndCTA />
                <Footer/>
            </div>
        </>
    )
}

const Hero = () => {
    return(
        <>
            <section className='section-global bg-shade-blue hero'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6 align-self-center">
                            <h1 className='mb-16'>A mobile gaming workspace</h1>
                            <p className='txt-1 mb-20'>It's where players can go to review live stats, or watch a live stream. It's where the community is.</p>
                            <a href='/'>
                                <img src={require('./assets/playstore_badge.svg').default} alt="playstore" />
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='/'>
                                <img src={require('./assets/appstore_badge.svg').default} alt="playstore" />
                            </a>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div style={{maxWidth: '485px'}}>
                                <img src={require('./assets/hero_image.png')} className="img-fluid" alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Showcase = () => {
    return(
        <>
            <section className='section-global'>
                <div className="container container-2">
                    <div className="row gy-4 gx-0 gx-lg-5">
                        <div className="col-lg-6">
                            <img src={require('./assets/showcase1.png')} className="img-fluid" alt="feature1" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="section-tag mb-8">Communicate</div>
                            <h2 className='mb-16 display-2'>Communicate with other people in the same space</h2>
                            <p className='txt-1'>Cross-platform messaging allows people from iOS/Android to communicate with one another using a universal library of smiley faces, threads, and file sharing. Everyone wins!</p>
                        </div>
                    </div>
                    <div className="row gy-4 gx-0 gx-lg-5 feature-row-margin">
                        <div className="col-lg-6 order-1 order-lg-0 align-self-center">
                            <div className="section-tag mb-8">Spaces</div>
                            <h2 className='mb-16 display-2'>Create space and share it with your community and friends</h2>
                            <p className='txt-1'>Stact is a free gaming workspace app powered by the cloud - no matter on which platform you are playing or chatting with your friends, you will always have your own gaming space. </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={require('./assets/showcase2.png')} className="img-fluid" alt="feature1" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Stats = () => {

    const stats_data = [
        {
            head: '4.5 Stars',
            text: 'Overall ratings',
            icoUrl: 'assets/stats_icon1.svg'
        },
        {
            head: '554.5k Ratings',
            text: 'On all the platforms',
            icoUrl: 'assets/stats_icon2.svg'
        },
        {
            head: '5M+ Downloads',
            text: 'Across all platform',
            icoUrl: 'assets/stats_icon3.svg'
        }
    ]

    return(
        <>
            <section className="section-global dark">
                <div className="container container-2">
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-12">
                            <h4>We want to change the way you are gaming!</h4>
                        </div>
                        {stats_data.map((e,i)=> 
                            <div className="col-lg-3 col-md-4 col-sm-6 text-center" key={i}>
                                <img src={require(`./${e.icoUrl}`)} className="mb-8" height="30" alt="stats" />
                                <h4 className='mb-0'>{e.head}</h4>
                                <div className="txt-4">{e.text}</div>
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
            title: 'Communicate with team',
            text: 'Features include voice chat, text chat, leaderboards and private groups. Chat on any device and platform',
            icoUrl: 'assets/feature_ico1.svg'
        },
        {
            title: 'Multiplayer streaming',
            text: 'Communicate with people who have similar interests through real-time chatting, multiplayer streaming',
            icoUrl: 'assets/feature_ico2.svg'
        },
        {
            title: 'Connect with audience',
            text: 'Join group chats, start group screen-sharing, or connect to individual streamers for non-stop collaboration',
            icoUrl: 'assets/feature_ico3.svg'
        }
    ]

    return(
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2 text-center">
                            <div className="section-tag mb-8">Why Stact</div>
                            <h2>Extremely smooth workflow with cosistancy </h2>
                        </div>
                    </div>
                    <div className="row gy-4 gx-0 gx-lg-5">
                        <FeatureCards data={featurs_data} src='appLanding' center/>
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
            <section className='section-global bg-shade-1'>
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
                        <TestimonialCards data={testimonial_data} src="appLanding" />
                    </div>
                </div>
            </section>
        </>
    )
}

const EndCTA = () => {
    return(
        <>
            <section className='section-global end_cta'>
                <div className="container container-2">
                    <div className="row gy-4">
                        <div className="col-lg-6 align-self-center order-1 order-lg-0">
                            <h2 className='mb-16'><span className='txt-highlight'>10 million</span> people all around the world love it</h2>
                            <p className='txt-1 mb-20'>Stact is designed with e-sports in mind because that's where we come from.</p>
                            <a href='/'>
                                <img src={require('./assets/playstore_badge.svg').default} alt="playstore" />
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='/'>
                                <img src={require('./assets/appstore_badge.svg').default} alt="playstore" />
                            </a>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={require('./assets/end_banner.png')} className="img-fluid" alt="download" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppLanding