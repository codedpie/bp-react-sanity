import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const PostSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#e7cdbf" highlightColor="#fff">
            <Hero />
            <CaseStudy />
        </SkeletonTheme>
    )
}


const Hero = () => {
    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">{<Skeleton />}</div>
                            <h1 className='display-1'>{<Skeleton />}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const CaseStudy = () => {
    return (
        <>
            <section className='section-global case-study'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 text-center mb-20">
                            {<Skeleton height={400} />}
                        </div>
                        <div className="col-12">
                            <div className="case-study-section">
                                {<Skeleton count={10} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default PostSkeleton