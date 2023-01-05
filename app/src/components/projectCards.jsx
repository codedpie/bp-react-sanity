import { Link } from 'react-router-dom'
import './css/projectCards.scss'

const ProjectCards = ({ data, src }) => {
    return (
        <>
            {
                data.map((e, i) =>
                    <div className="col-xl-4 col-lg-6 col-md-6 gy-4" key={i}>
                        <Link to={e.link} className="project-link">
                            <div className='project-card d-flex flex-column' style={{ background: `${e.color}1a` }}>
                                <div className='tag fw-500' style={{ color: `${e.color}` }}>{e.category}</div>
                                <div className='text txt-2 color-1 mb-16 fw-700'>{e.text}</div>
                                <div className='project-thumb mt-auto'>
                                    <img src={require(`../pages/${src}/${e.imgUrl}`)} className="img-fluid" alt={e.category} />
                                    <div className="project-link-overlay">
                                        View case study
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default ProjectCards