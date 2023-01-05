import { Link } from 'react-router-dom'
import './css/serviceCards.scss'

const ServiceCards = ({data,src}) => {
    return(
        <>
            <div className="service">
                <div className="service-icon mb-8">
                    <img src={require(`../pages/${src}/${data.icoUrl}`)} className="mb-8" alt={data.name}/>
                </div>
                <h3>{data.name}</h3>
                <p className="txt-4 mb-8">
                    <li>{data.info[0]}</li>
                    <li>{data.info[1]}</li>
                    <li>{data.info[2]}</li>
                </p>
                {
                    data.link&&<Link to={data.link} className="service-link">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </Link>
                }
            </div>
        </>
    )
}

export default ServiceCards