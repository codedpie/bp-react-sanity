import './css/testimonialCards.scss'

const TestimonialCards = ({ data, src }) => {
    return (
        <>
            {data.map((e, i) =>
                <div className="col-xl-4 col-lg-6 col-md-6 gy-4" key={i}>
                    <div className="testimonial-card d-flex flex-column">
                        <div className="tesimonial-brand-image">
                            <img src={require(`../pages/${src}/${e.brandImgUrl}`)} className="img-fluid mb-20" alt="review" height="36" />
                        </div>
                        <div className='txt-1 color-1 fw-700 mb-20'>“{e.text}”</div>
                        <div className="testimonial-user d-flex mt-auto">
                            <img src={require(`../pages/${src}/${e.userImgUrl}`)} className="img-fluid" alt="review" height="40" />
                            <div className='ms-3'>
                                <div className='txt-3 color-1 fw-500'>{e.userName}</div>
                                <div className="txt-3">{e.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TestimonialCards