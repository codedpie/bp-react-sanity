import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const BlogCardSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#e7cdbf" highlightColor="#fff">
            <BlogCards />
            <BlogCards />
            <BlogCards />
        </SkeletonTheme>
    )
}


const BlogCards = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 gy-4">
                <div className="blog_link">
                    <div className="blog-card">
                        <div className="thumb">
                            {<Skeleton height={200} />}
                        </div>
                        <div className="body">
                            <div className='mb-8'>
                                <span className='text-uppercase txt-4 fw-500 color-primary'>{<Skeleton />}
                                </span>
                                <span className='txt-4'>
                                    <Skeleton />
                                </span>
                            </div>
                            <h4 className="title">{<Skeleton />}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCardSkeleton