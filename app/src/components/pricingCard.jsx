import { Link } from 'react-router-dom'
import './css/pricingCard.scss'


const PricingCard = ({data}) => {
    return(
        <>
            <div className={"pricing-card "+(data.featured?'bg-shade-blue':'bg-shade-1')}>
                <h3 className='mb-0'>{data.title}</h3>
                <p className='txt-3 mb-20'>{data.text}</p>
                <div className='mb-20'><span className='h2 font-primary fw-700'>{data.price}/</span><span className='txt-2'>{data.period}</span></div>
                {data.included.map((e,i)=>
                    <div key={i} className="mb-8">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#0FA958"/>
                            <path d="M6.66663 12L10.6666 16L17.3333 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>&nbsp;&nbsp;
                        {e}
                    </div>
                )}
                {data.not_included && data.not_included.map((e,i)=>
                    <div key={i} className="mb-8">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#E94057"/>
                            <path d="M8.75 8.75L15.25 15.25M15.25 8.75L8.75 15.25L15.25 8.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>&nbsp;&nbsp;
                        {e}
                    </div>
                )}
                <div className='d-flex flex-column mt-20'><Link to='/' className={'btn ' +(data.featured?'btn-primary':'btn-outline-primary')}>{data.buttonLabel?data.buttonLabel:'Try for free'}</Link></div>
            </div>
        </>
    )
}

export default PricingCard