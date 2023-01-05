import { Link } from 'react-router-dom'
import './css/contactSection.scss'
import BGP1 from './assets/bg_1.svg'
import BGP2 from './assets/bg_2.svg'
import scribble from './assets/scribble.svg'

const ContactSection = ({contact_data, saasVarient, bg}) => {
    if(saasVarient){
        return(
            <>
                <section className={'section-global contact-section '+(bg?bg:'')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 py-5 px-lg-5 col-cont text-center">
                                <h2>{contact_data.title_before} <span className='txt-highlight'>{contact_data.title_highlight}</span> {contact_data.title_after}</h2>
                                <p className='txt-1 mb-16'>{contact_data.text}</p>
                                <Link to={contact_data.cta_1_link} className='btn btn-primary btn-lg'>Try for free</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to={contact_data.cta_2_link} className='btn btn-outline-primary btn-lg'>Contact sales</Link>
                            </div>
                        </div>
                    </div>
                    <img src={BGP1} alt="bg_1" className='bg_1' />
                    <img src={BGP2} alt="bg_1" className='bg_2' />
                </section>
            </>
        )
    }
    else
    {
        return(
            <>  
                <section className={'section-global contact-section '+(bg?bg:'')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 py-5 px-lg-5 text-center col-cont">
                                <h2>{contact_data.title} <span className='txt-highlight'>{contact_data.title_highlight}<img src={scribble} alt="bg_1" className='scribble' /></span></h2>
                                <p className='txt-1 mb-16'>{contact_data.text}</p>
                                <Link to={contact_data.link} className='btn btn-primary btn-lg'>Get in touch</Link>
                            </div>
                        </div>
                    </div>
                    <img src={BGP1} alt="bg_1" className='bg_1' />
                    <img src={BGP2} alt="bg_1" className='bg_2' />
                </section>
            </>
        )
    }
}

export default ContactSection