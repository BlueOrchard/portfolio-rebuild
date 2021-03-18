import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function PortfolioSkeleton(){
    return (
        <div className="post-loading">
            <SkeletonTheme>
                <div className="header-image">

                </div>
                <div className="inner-grid">
                    <div className="sidebar-information">
                        <Skeleton height={165} />
                        <div className="tags">
                            <Skeleton count={8} height={20} />
                        </div>
                        <Skeleton height={50} />
                    </div>
                    <div className="main-content">
                        <div className="header-single">
                            <h1><Skeleton /></h1>
                        </div>
                        <div className="tab-selector">
                            <Skeleton count={2} />
                        </div>
                        <div className="tab-content">
                            <h3>
                                <Skeleton />
                            </h3>
                            <p>
                                <Skeleton count={7} />
                            </p>
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default PortfolioSkeleton