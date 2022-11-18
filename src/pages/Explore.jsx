import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import donateImage from '../assets/jpg/donate.jpg'
import donateImageSmall from '../assets/jpg/donate_small.jpg'
import ngoImage from '../assets/jpg/ngo.jpg'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Gracious Giving</p>
      </header>

      <main>
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
            <SwiperSlide>
                <div
                style={{
                  background: `url(${donateImage}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='swiperSlideDiv'
              >
                <p className='swiperSlideText'>About Us</p>
                <p className='swiperSlidePrice'>
                <b>Generous Giving 💰</b> is a charity donation platform that seeks to connect the donor and recipient. We provide you with the most convenient and easy way to donate items and cash to those in need in Kenya.
                We also connect you to causes of your choice such as NGOs where you can directly contact them and donate.
                Get Rewards 🎁🎁 the more you donate. Our brand partners provide our donors <b>gifts</b> as a <b>gesture of thanks</b> for making a difference. Be ready to get surprised 😊!
                </p>
              </div>
            </SwiperSlide>
        </Swiper>
       

        <p className='pageHeader'>Donate</p>
        <div className='exploreCategories'>
          <Link to='/category/ngo'>
            <img
              src={ngoImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>NGOs</p>
          </Link>
          <Link to='/category/donate'>
            <img
              src={donateImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Direct Donation</p>
          </Link>
        </div>

        <Slider/>
      </main>
    </div>
  )
}

export default Explore
