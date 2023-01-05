import { Link } from 'react-router-dom'
import './css/blogCards.scss'
import React from 'react'

const BlogCards = ({ data }) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return (
        <>
            {
                data.map((e, i) =>
                    <div className="col-lg-4 col-md-6 gy-4" key={i}>
                        <Link to={e.slug.current} className="blog_link">
                            <div className="blog-card">
                                <div className="thumb">
                                    <img src={e.mainImage.asset.url  !== '' ? e.mainImage.asset.url : '../../pages/blog/assets/np-thumb.png'} className="img-fluid" alt={e.title} />
                                </div>
                                <div className="body">
                                    <div className='mb-8'>
                                        <span className='text-uppercase txt-4 fw-500 color-primary'>{e.categories[0]}</span>&nbsp;•&nbsp;<span className='txt-4'>{`${month[new Date(e._createdAt).getMonth()]} ${new Date(e._createdAt).getDate()}, ${new Date(e._createdAt).getFullYear()}`}</span>
                                    </div>
                                    <h4 className="title">{e.title}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default BlogCards