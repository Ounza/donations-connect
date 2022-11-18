import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import donateImage from '../assets/jpg/donate.jpg'
import ngoImage from '../assets/jpg/ngo.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Gracious Giving</p>
      </header>

      <main>
        <Slider />

        <p className='exploreCategoryHeading'>Donate To A Cause</p>
        <div className='exploreCategories'>
          <Link to='/category/ngo'>
            <img
              src={ngoImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Popular NGOs</p>
          </Link>
          <Link to='/category/donate'>
            <img
              src={donateImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Donate</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
