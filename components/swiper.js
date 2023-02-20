// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

// Import Swiper styles
import 'swiper/css';

const percentage = 66;

export default function SwiperPage() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={3}
      centerInsufficientSlides={true}
      centeredSlides={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{position: "flex"}}
    >
      <SwiperSlide>
        <div className="square">
          <div style={{ width: 200, height: 200 }} className = "inside_square">
            <CircularProgressbarWithChildren value={66} styles={buildStyles({ pathColor: `#534ab9` })}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <Image src="/meds.png" width="200" height="200" className="card_image" />
              <div style={{ fontSize: 27, marginTop: -50, transform: 'translate(0px, 75px)' }} class="card_description">
                Take Medication
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="square">
          <div style={{ width: 200, height: 200 }} className = "inside_square">
            <CircularProgressbarWithChildren value={33} styles={buildStyles({ pathColor: `#534ab9` })}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <Image src="/scope.png" width="200" height="200" className="card_image" />
              <div style={{ fontSize: 27, marginTop: -50, transform: 'translate(0px, 75px)' }} class="card_description">
                Physical Today
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="square">
          <div style={{ width: 200, height: 200 }} className = "inside_square">
            <CircularProgressbarWithChildren value={100} styles={buildStyles({ pathColor: `#534ab9` })}>
              {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
              <Image src="/walk.png" width="200" height="200" className="card_image" />
              <div style={{ fontSize: 27, marginTop: -50, transform: 'translate(0px, 75px)' }} class="card_description">
                30 Minute Walk
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};