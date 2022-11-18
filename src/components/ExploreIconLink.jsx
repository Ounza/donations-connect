import {FaQuestion} from 'react-icons/fa';
import {Link} from 'react-router-dom'

function ExploreIconLink() {
  return (
    <div>
        <Link to='/explore'>
        <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default ExploreIconLink