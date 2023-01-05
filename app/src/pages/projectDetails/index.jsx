import Helmet from 'react-helmet'
import ContactSection from '../../components/contactSection'
import Footer from '../../components/footer'
import NavBar from "../../components/navbar"
import './style.scss'

const ProjectDetails = () => {
    return(
        <>
            <Helmet>
                <title>Stact - Case Study</title>
            </Helmet>
            <NavBar/>
            <div className="project-detail-container">
                <Hero/>
                <CaseStudy/>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}

const Hero = () => {
    return(
        <>  
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">Case study</div>
                            <h1 className='display-1'>How Deko manages to scale using Stact platforms</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const CaseStudy = () => {
    return(
        <>
            <section className='section-global case-study'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 text-center mb-20">
                            <img src={require('./assets/case_study_cover.png')} className="img-fluid mb-20" alt="CaseStudy" />
                        </div>
                        <div className="col-12">
                            <div className="case-study-section">                            
                                <h2 className='display-2'>1. What is Deko?</h2>
                                <p className='txt-1'>Why risk it all with cheap outsourcing? Most businesses either go for high end agencies that are a bit boring or low end agencies that don't deliver. We offer a new way, called Stack.</p>
                                <h2 className="display-2">2. What were the majore challnges?</h2>
                                <p className="txt-1">We work at the intersection of media, marketing and creativity. We help big brands navigate digital disruption and harness new technologies to evolve their businesses. What sets Stack apart are our end-to-end capabilities, team-based approach and deep expertise in strategy, creative production, data science and app development.</p>
                                <h2 className="display-2">3. The solution we provided</h2>
                                <p className="txt-1">Our team of strategists, creatives and technologists are passionate about helping brands succeed. We work with customers to develop their unique approach to digital communications, defining the objectives and how to achieve them through the delivery of high impact digital campaigns.
                                <br/><br/>We've crafted Stack so that you can easily stand out with digital brand experiences. Whether it's ecommerce, content marketing or digital strategy services, our team at Stack will help you grow your brand, your way.</p>
                                <br/>
                                <img src={require('./assets/img1.jpg')} alt="case-study" className='img-fluid' />
                            </div>
                        </div>
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
            <ContactSection bg="bg-shade-blue" contact_data={contact_data}/>
        </>
    )
}


export default ProjectDetails
