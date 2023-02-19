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
      spaceBetween={-600}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="square">

          <CircularProgressbarWithChildren value={66}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <Image src="/meds.png" width="200" height="200" className="card_image" />
            <div style={{ fontSize: 30, marginTop: -50}} class = "card_description">
              Take Medication
            </div>
          </CircularProgressbarWithChildren>;

        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="square">
          <Image src="/scope.png" width="200" height="200" className="card_image" />
          <h3>Physical Today</h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="square">
          <Image src="/walk.png" width="200" height="200" className="card_image" />
          <h3>30 Minute Walk</h3>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};