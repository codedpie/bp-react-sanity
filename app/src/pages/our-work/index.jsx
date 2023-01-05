import Helmet from 'react-helmet'
import Footer from '../../components/footer'
import './style.scss'
import NavBar from "../../components/navbar"
import ContactSection from '../../components/contactSection'

const OurWork = () => {
    return(
        <>
            <Helmet>
                <title>Our Work</title>
            </Helmet>
            <NavBar/>
            <div className="about-container">
                <Hero />
                <Contact />
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
                            <div className="section-tag mb-8">About Stact</div>
                            <h1 className='display-1'>We provide digital solutions for your business</h1>
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
            <ContactSection contact_data={contact_data}/>
        </>
    )
}

export default OurWork