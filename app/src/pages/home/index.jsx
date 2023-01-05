import { Link } from "react-router-dom"
import './style.scss'
import { Accordion } from 'react-bootstrap'
import NavBar from "../../components/navbar"
import BGP1 from './assets/bg_1.svg'
import BGP2 from './assets/bg_2.svg'

const Home = () => {
    const navBarData = [
        {
            dropDown: false,
            title: 'Demos',
            links: [
                {title: 'Landing 1', href: '/landing-1'},
                {title: 'Landing 2', href: '/landing-2'},
                {title: 'Landing 3', href: '/landing-3'},
                {title: 'App landing', href: '/app-landing'},
                {title: 'Saas landing', href: '/saas-landing'},
                {title: 'Personal portfolio', href: '/personal-portfolio'},
                {title: 'Consulting', href: '/consulting'},
            ]
        },
        {
            dropDown: true,
            title: 'Pages',
            links: [
                {title: 'About', href: '/about'},
                {title: 'Contact', href: '/contact'},
                {title: 'Pricing', href: '/pricing'},
                {title: 'FAQs', href: '/faqs'},
                {title: 'Projects', href: '/projects'},
                {title: 'Project detail', href: '/project-detail'},
                {title: 'Blog', href: '/blog'},
                {title: 'Blog article', href: '/blog-article'},
                {title: 'Services', href: '/services'},
                {title: '404', href: '/not-found'},
                
            ]
        },
        {
            anchor: true,
            title:'FAQs',
            href:'#FAQs'
        },
        {
            anchor: true,
            title:'Changelogs',
            href:'#changelogs'
        },
        {
            anchor: true,
            title:'Support',
            href:'https://themeforest.net/item/stact-react-multipurpose-landing-page-template/37452814/support'
        }
    ]

    return(
        <>
            <NavBar data={navBarData}/>
            <div className="home-showcase-container">
                <Hero/>
                <LandingShowcase/>
                <InnerShowcase/>
                <Features />
                <ChangeLogs/>
                <FAQs />
                <Footer/>
            </div>
        </>
    )
}

const Hero = () => {
    return(
        <>
            <section className="section-global bg-shade-1 showcase-hero hero">
                <div className="container py-5">
                    <div className="row gy-5 gx-lg-5 py-lg-4">
                        <div className="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1 text-center align-self-center pb-2 hero-col">
                            <h1 className="mb-16">Simple yet elegant <span className="txt-highlight">React</span> template</h1>
                            <p className="txt-1 mx-auto mb-20" style={{maxWidth: '680px'}}>Highly customizable and mobile-friendly landing pages for professional use and looks stunning on any type of modern device. </p>
                            <a href='https://themeforest.net/item/stact-react-multipurpose-landing-page-template/37452814' target="_blank" rel="noreferrer" className='btn btn-primary btn-lg'>Purchase now</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href='#showcase' className='btn btn-outline-primary btn-lg'>View demos</a>
                        </div>
                        {/* <div className="col-lg-6 text-center align-self-center">
                            <div className="hero-img-container">
                                <img src={HeroImg} alt='Stact' className="img-fluid" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <img src={BGP1} alt="bg_1" className='bg_1' />
                <img src={BGP2} alt="bg_1" className='bg_2' />
            </section>
        </>
    )
}

const LandingShowcase = () => {
    const landing_showcase = [
        {
            title: 'Consulting',
            imgUrl: './assets/consulting.png',
            link: '/consulting',
            new: true
        },
        {
            title: "Landing 1",
            imgUrl: './assets/landing1.png',
            link: '/landing-1'
        },
        {
            title: "Landing 2",
            imgUrl: './assets/landing2.png',
            link: '/landing-2'
        },
        {
            title: "Landing 3",
            imgUrl: './assets/landing3.png',
            link: '/landing-3'
        },
        {
            title: "App landing",
            imgUrl: './assets/app_landing.png',
            link: '/app-landing'
        },
        {
            title: "Saas landing",
            imgUrl: './assets/saas_landing.png',
            link: '/saas-landing'
        },
        {
            title: "Personal portfolio",
            imgUrl: './assets/personal_portfolio.png',
            link: '/personal-portfolio'
        },
        {
            title: "Coming Soon...",
            imgUrl: './assets/coming_soon.png'
        }
    ]
    return(
        <>
            <section className="section-global" id="showcase">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">Landing pages</div>
                            <h2 className="mx-auto" style={{maxWidth: '500px'}}>Collection of stunning landing pages</h2>
                        </div>
                    </div>                    
                    <div className="row gy-5">
                        {landing_showcase.map((e,i)=>
                            {
                                if(e.link){
                                    return(
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                                            <Link to={e.link} className="showcase-card-link">
                                                <div className="showcase-card">
                                                    <div className="showcase-card-thumb mb-16 bg-2"><img src={require(`${e.imgUrl}`)} alt="landing1" className="img-fluid" /></div>
                                                    <h4 className="mb-0 text-center">{e.title}</h4>
                                                </div>
                                                {e.new && <div className="new-tag">New</div>}
                                            </Link>
                                        </div>
                                    )
                                }else{
                                    return(
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                                            <div className="showcase-card not-link">
                                                <div className="showcase-card-thumb mb-16 bg-2"><img src={require(`${e.imgUrl}`)} alt="landing1" className="img-fluid" /></div>
                                                <h4 className="mb-0 text-center">{e.title}</h4>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

const InnerShowcase = () => {

    const inner_showcase = [
        {
            title: "About",
            imgUrl: './assets/about.png',
            link: '/about'
        },
        {
            title: "Contact",
            imgUrl: './assets/contact.png',
            link: '/contact'
        },
        {
            title: "Pricing",
            imgUrl: './assets/pricing.png',
            link: '/pricing'
        },
        {
            title: "FAQs",
            imgUrl: './assets/FAQs.png',
            link: '/faqs'
        },
        {
            title: "Projects",
            imgUrl: './assets/projects.png',
            link: '/projects'
        },
        {
            title: "Project details",
            imgUrl: './assets/project_detail.png',
            link: '/project-detail'
        },
        {
            title: "Blog",
            imgUrl: './assets/blog.png',
            link: '/blog'
        },
        {
            title: "Blog article",
            imgUrl: './assets/blog_article.png',
            link: '/blog-article'
        },
        {
            title: "404",
            imgUrl: './assets/404.png',
            link: '/notfound'
        },
        {
            title: "Service detail",
            imgUrl: './assets/coming_soon.png'
        },
        {
            title: "Testimonials",
            imgUrl: './assets/coming_soon.png'
        }
    ]

    return(
        <>
            <div className="container inner-break"></div>
            <section className="section-global">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">Inner pages</div>
                            <h2 className="mx-auto" style={{maxWidth: '500px'}}>Inner pages that complete your website</h2>
                        </div>
                    </div>
                    <div className="row gy-5">
                        {inner_showcase.map((e,i)=>
                            {
                                if(e.link){
                                    return(
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                                            <Link to={e.link} className="showcase-card-link">
                                                <div className="showcase-card">
                                                    <div className="showcase-card-thumb mb-16 bg-2"><img src={require(`${e.imgUrl}`)} alt="landing1" className="img-fluid" /></div>
                                                    <h4 className="mb-0 text-center">{e.title}</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }else{
                                    return(
                                        <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                                            <div className="showcase-card not-link">
                                                <div className="showcase-card-thumb mb-16 bg-2"><img src={require(`${e.imgUrl}`)} alt="landing1" className="img-fluid" /></div>
                                                <h4 className="mb-0 text-center">{e.title}</h4>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

const Features = () => {

    const Features_data = [
        {
            title: 'Built with React V18.00',
            text: 'Stact uses latest version of React, which makes it faster and more stable.',
            icon: 'assets/feature_1.svg'
        },
        {
            title: 'Modular Responsive Design',
            text: "Simple, clean and easy to navigate user interface that is mobile friendly",
            icon: 'assets/feature_2.svg'
        },
        {
            title: 'Well Documented',
            text: "You'll always have access to step-by-step instructions about using Stact.",
            icon: 'assets/feature_3.svg'
        },
        {
            title: 'Easy to deploy',
            text: 'Deploy Stact within minutes from your computer (no coding required)',
            icon: 'assets/feature_4.svg'
        },
        {
            title: 'Regular Updates',
            text: 'Stact is constantly being updated to improve usability and features',
            icon: 'assets/feature_5.svg'
        },
        {
            title: 'Faster Customer Support',
            text: "We're committed to responding within 24 hours (or less) for your complaints",
            icon: 'assets/feature_6.svg'
        }
    ]

    return(
        <>
            <section className="section-global bg-shade-blue">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">Why Stact</div>
                            <h2>Great template comes with outstanding features</h2>
                        </div>
                    </div>
                    <div className="row gy-4">                        
                        {Features_data.map((e,i)=>
                            <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                                <div className="feature d-flex">
                                    <div className="feature-ico me-3">
                                        <img src={require(`/${e.icon}`)} height="70" alt={i} />
                                    </div>
                                    <div className="feature-body">
                                        <h4>{e.title}</h4>
                                        <p className="txt-3">{e.text}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

const ChangeLogs = () => {

    const changelogData = [
        {
            version: 'v2.1.0',
            date: 'June 1, 2022',
            logs:['Added Consulting landing page']
        },
        {
            version: 'v2.0.0',
            date: 'May 15, 2022',
            logs:['Updated with a new and stunning appearance.']
        },
        {
            version: 'v1.2.0',
            date: 'May 09, 2022',
            logs: [
                'Added Personal Portfolio landing page',
                "Updated Navbar - You can now customize the Navbar links for each page.",
                "Updated Navbar - The navbar is now scroll responsive for a better experience."
            ]
        },
        {
            version: 'v1.0.0',
            date: 'April 26, 2022',
            logs: ['Initial release with 15+ pages']
        }
    ]

    return(
        <>
            <section className="section-global" id="changelogs">
                <div className="container container-2">
                    <div className="row mb-40">
                        <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2 text-center">
                            <div className="section-tag mb-8">Changelogs</div>
                            <h2>See what's new in this version</h2>
                        </div>
                    </div>
                    {changelogData.map((e,i)=>
                        <div className="row mb-16" key={i}>
                            <div className="col-md-2 offset-lg-1">
                                <h4 className="mb-0">{e.version}</h4>
                                <div className="txt-4">{e.date}</div>
                            </div>
                            <div className="col-md-8">
                                {e.logs.map((l,j)=>                                
                                    <div key={j}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.3284 4.4663C14.4052 4.38796 14.4968 4.32573 14.5979 4.28324C14.6991 4.24076 14.8077 4.21887 14.9173 4.21887C15.027 4.21887 15.1356 4.24076 15.2367 4.28324C15.3379 4.32573 15.4295 4.38796 15.5063 4.4663C15.828 4.79142 15.8325 5.3168 15.5175 5.64755L8.8654 13.5113C8.78988 13.5942 8.69823 13.6609 8.59606 13.7072C8.49388 13.7535 8.38334 13.7784 8.27119 13.7806C8.15904 13.7827 8.04763 13.7619 7.94379 13.7194C7.83996 13.677 7.74587 13.6138 7.66728 13.5338L3.61953 9.43205C3.46342 9.27284 3.37598 9.05877 3.37598 8.8358C3.37598 8.61283 3.46342 8.39875 3.61953 8.23955C3.69631 8.16121 3.78794 8.09898 3.88907 8.05649C3.99019 8.014 4.09878 7.99212 4.20847 7.99212C4.31816 7.99212 4.42674 8.014 4.52787 8.05649C4.62899 8.09898 4.72063 8.16121 4.7974 8.23955L8.2309 11.7192L14.3059 4.49105C14.3129 4.48235 14.3204 4.47409 14.3284 4.4663Z" fill="#00AA45"/>
                                        </svg>
                                        <span className="txt-3 ms-2">{l}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

const FAQs = () => {

    const FAQ_data = [
        {
            title: 'How do I setup and run stact locally?',
            text: "Running Stact on your local machine is easy. You must first install NodeJS and npm on your computer. Second, use the terminal to install node modules using the command 'npm install' in the stact directory. Finally, launch Stact using the 'npm start' command."
        },
        {
            title: 'How can I deploy Stact?',
            text: 'Stact can be installed on any cloud platform that supports the NodeJS runtime. Using platforms like Netlify and Vercel is the simplest method to deploy it.'
        },
        {
            title: 'How long will I receive updates?',
            text: 'Stact will be frequently updated. Stact aims to deliver excellent customer service and high-quality products. To meet client expectations, we want to provide more and more templates. Thus, you will receive regular, high-quality updates.'
        },
        {
            title: 'How to avail item support?',
            text: "You may contact us directly through email at codeonec.co@gmail.com or through the item support section provided on the themeforest's item page."
        },
        {
            title: 'How long will it take for item support to respond?',
            text: 'Item support will usually get back to you within 24 hours (or less). Sometimes, it may take longer due to unforeseen circumstances.'
        }
    ]

    return(
        <section className="section-global bg-shade-green" id="FAQs">
            <div className="container">
                <div className="row">
                    <div className="row mb-40">
                        <div className="col-xl-6 col-lg-6 offset-xl-3 offset-lg-3 text-center">
                            <div className="section-tag mb-8">FAQs</div>
                            <h2>Feel free to contact us with any queries you may have.</h2>
                        </div>
                    </div>
                </div>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12">
                            <Accordion alwaysOpen flush>
                                {FAQ_data.map((e,i)=> 
                                    <Accordion.Item eventKey={i} key={i}>
                                        <Accordion.Header>{e.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {e.text}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )}
                            </Accordion>
                            <div className="text-center mt-40">
                                <a href="https://themeforest.net/item/stact-react-multipurpose-landing-page-template/37452814/support" className="btn btn-outline btn-arrow btn-lg" target="_blank" rel="noreferrer">
                                    Ask a question
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 7.5C3 7.32953 3.06584 7.16605 3.18304 7.04551C3.30024 6.92498 3.45919 6.85726 3.62493 6.85726H10.8654L8.18192 4.09861C8.06458 3.97792 7.99865 3.81423 7.99865 3.64355C7.99865 3.47287 8.06458 3.30918 8.18192 3.18849C8.29927 3.0678 8.45842 3 8.62437 3C8.79032 3 8.94948 3.0678 9.06682 3.18849L12.8164 7.04494C12.8746 7.10464 12.9208 7.17557 12.9523 7.25366C12.9838 7.33175 13 7.41546 13 7.5C13 7.58454 12.9838 7.66825 12.9523 7.74634C12.9208 7.82443 12.8746 7.89536 12.8164 7.95506L9.06682 11.8115C8.94948 11.9322 8.79032 12 8.62437 12C8.45842 12 8.29927 11.9322 8.18192 11.8115C8.06458 11.6908 7.99865 11.5271 7.99865 11.3564C7.99865 11.1858 8.06458 11.0221 8.18192 10.9014L10.8654 8.14274H3.62493C3.45919 8.14274 3.30024 8.07502 3.18304 7.95449C3.06584 7.83395 3 7.67047 3 7.5Z" fill="black"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Footer = () => {

    return(
        <>
            <section className="section-global dark">
                <div className="container showcase-footer">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                            <h2 className="mb-16">Get Stact now</h2>
                            <p className="txt-1 mb-20">It's designed to give you unlimited possibilities to bring your vision to life.</p>
                            <a href="https://themeforest.net/item/stact-react-multipurpose-landing-page-template/37452814" target="_blank" rel="noreferrer" className='btn btn-primary btn-lg'>Purchase now</a>
                        </div>                    
                    </div>
                </div>
            </section>
            <section className="showcase-footer-bottom dark">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="bottom-line">©2022 <a href="https://codeonec.netlify.app" target="_blank" rel="noreferrer">Codeonec</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home