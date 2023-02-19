import React from 'react'
import Image from 'next/image';


export default function SliderPage() {

    return (

        <div className="container swiper">
            <div className="slide-container">
                <div className="card-wrapper swiper-wrapper">
                    <div className="card swiper-slide">
                        <div className="image-box">
                            <Image src="/images/fullDev.jpg" alt="coin" width="18" height="18" />
                        </div>
                        <div className="profile-details">
                            <Image src="/images/profile1.jpg" alt="coin" width="18" height="18" />
                            <div className="name-job">
                                <h3 className="name">David Cardlos</h3>
                                <h4 className="job">Full Stack Developer</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-box">
                            <Image src="/images/photographer.jpg" alt="coin" width="18" height="18" />
                        </div>
                        <div className="profile-details">
                            <Image src="/images/profile2.jpg" alt="coin" width="18" height="18" />
                            <div className="name-job">
                                <h3 className="name">Siliana Ramis</h3>
                                <h4 className="job">Photographer</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-box">
                            <Image src="/images/dataAna.jpg" alt="coin" width="18" height="18" />
                        </div>
                        <div className="profile-details">
                            <Image src="/images/profile3.jpg" alt="coin" width="18" height="18" />
                            <div className="name-job">
                                <h3 className="name">Richard Bond</h3>
                                <h4 className="job">Data Analyst</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-box">
                            <Image src="/images/appDev.jpg" alt="coin" width="18" height="18" />
                        </div>
                        <div className="profile-details">
                            <Image src="/images/profile1.jpg" alt="coin" width="18" height="18" />
                            <div className="name-job">
                                <h3 className="name">Priase</h3>
                                <h4 className="job">App Developer</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-box">
                            <Image src="/images/blogger.jpg" alt="coin" width="18" height="18" />
                        </div>
                        <div className="profile-details">
                            <Image src="/images/profile5.jpg" alt="coin" width="18" height="18" />
                            <div className="name-job">
                                <h3 className="name">James Laze</h3>
                                <h4 className="job">Blogger</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-button-next swiper-navBtn"></div>
            <div className="swiper-button-prev swiper-navBtn"></div>
            <div className="swiper-pagination"></div>
        </div>
    )
}

