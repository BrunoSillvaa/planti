import { Container } from './styles'

import User from '../../assets/user.png'
import User1 from '../../assets/user1.jpg'
import User2 from '../../assets/user2.jpg'
import User3 from '../../assets/user3.jpg'
import User4 from '../../assets/user4.jpg'
import User5 from '../../assets/user5.jpg'
import Video from '../../assets/video.mp4'

import Montera from '../../assets/plants/montera.png'
import Articial from '../../assets/plants/artificial.png'
import Plant from '../../assets/plants/plant.png'
import FicusElastica from '../../assets/plants/ficus-elastica.png'

import { BiSearch, BiBell } from 'react-icons/bi'
import { HiOutlineChat } from 'react-icons/hi'
import { RiArrowRightLine } from 'react-icons/ri'
import { AiOutlineHeart } from 'react-icons/ai'

export default function Main() {
  return (
    <Container>
      <header>
        <div className='welcome'>
          <h2>Welcome to Planti.</h2>
          <p>Hello Bruno, Welcome back!</p>
        </div>

        <nav className='search'>
          <input type='text' placeholder='Search Dashboard' />
          <BiSearch className='icon' />
        </nav>

        <div className='user'>
          <HiOutlineChat className='icon' />
          <BiBell className='icon' />
          <img src={User} alt='User Foto' className='user-ft' />
        </div>
      </header>

      <main>
        <div className='explore'>
          <div className='video-wrapper'>
            <video
              className='video'
              src={Video}
              autoPlay={true}
              loop={true}
              muted
            />
          </div>
          <h3>Create and sell extraordinary products</h3>
          <p>The world's fast growing industry are natural made products!</p>

          <div className='buttons-wrapper'>
            <button>Explore More</button>
            <button>Top Sellers</button>
          </div>
        </div>

        <div className='my-listings'>
          <div className='title-wrapper'>
            <h3>My listing</h3>
            <p>
              See All
              <RiArrowRightLine className='icon' />
            </p>
          </div>

          <div className='plants-wrapper'>
            <div className='plant'>
              <AiOutlineHeart className='icon' />
              <img src={Montera} className='plant-img' />
              <h4>Montera Deliciosa</h4>
            </div>

            <div className='plant'>
              <AiOutlineHeart className='icon' />
              <img src={Articial} className='plant-img' />
              <h4>Artificial Plant</h4>
            </div>

            <div className='plant'>
              <AiOutlineHeart className='icon' />
              <img src={Plant} className='plant-img' />
              <h4>Aloe Vera</h4>
            </div>

            <div className='plant'>
              <AiOutlineHeart className='icon' />
              <img src={FicusElastica} className='plant-img' />
              <h4>Ficus Elastica</h4>
            </div>
          </div>
        </div>

        <div className='sellers'>
          <div className='top-sellers'>
            <div className='title-wrapper'>
              <h3>Top Sellers</h3>
              <p>
                See All
                <RiArrowRightLine className='icon' />
              </p>
            </div>

            <div className='data'>
              <div className='users-wrapper'>
                <img src={User} alt='User Image' />
                <img src={User1} alt='User Image' />
                <img src={User2} alt='User Image' />
                <img src={User3} alt='User Image' />
              </div>

              <span />

              <div className='sales'>
                <p className='plants-sold'>14.556 Plants Sold</p>
                <p className='sellers'>21 Sellers</p>
                <p className='days'>7 Days</p>
              </div>
            </div>
          </div>

          <div className='featured-sellers'>
            <div className='title-wrapper'>
              <h3>Featured Sellers</h3>
              <p>
                See All
                <RiArrowRightLine className='icon' />
              </p>
            </div>

            <div className='data'>
              <div className='users-wrapper'>
                <img src={User2} alt='User Image' />
                <img src={User4} alt='User Image' />
                <img src={User3} alt='User Image' />
                <img src={User1} alt='User Image' />
              </div>

              <span />

              <div className='sales'>
                <p className='plants-sold'>28.327 Plants Sold</p>
                <p className='sellers'>26 Sellers</p>
                <p className='days'>31 Days</p>
              </div>
            </div>
          </div>
        </div>

        <div className='my-stat'>
          <h3>My Stats</h3>
          <div className='stats'>
            <p className='today-stat'>
              Today <strong>4 Orders</strong>
            </p>
            <p className='month-stat'>
              This Month <strong>175 Orders</strong>
            </p>
          </div>
          <button>
            Go to my order
            <RiArrowRightLine className='icon' />
          </button>
        </div>

        <div className='recent-activity'>
          <div className='title-wrapper'>
            <h3>Recent Activity</h3>
            <p>
              See All
              <RiArrowRightLine className='icon' />
            </p>
          </div>
          <div className='users-wrapper'>
            <div className='user'>
              <img src={User5} alt='User Foto' />
              <p className='user-name'>Robert Garcia</p>
              <p className='order'>Ordered a new plant</p>
              <p className='time'>2 min ago</p>
            </div>

            <div className='user'>
              <img src={User1} alt='User Foto' />
              <p className='user-name'>Amanda Silva</p>
              <p className='order'>Ordered a new plant</p>
              <p className='time'>2 min ago</p>
            </div>

            <div className='user'>
              <img src={User2} alt='User Foto' />
              <p className='user-name'>Henrique Santos</p>
              <p className='order'>Ordered a new plant</p>
              <p className='time'>2 min ago</p>
            </div>

            <div className='user'>
              <img src={User3} alt='User Foto' />
              <p className='user-name'>Gustavo Oliveira</p>
              <p className='order'>Ordered a new plant</p>
              <p className='time'>2 min ago</p>
            </div>

            <div className='user'>
              <img src={User4} alt='User Foto' />
              <p className='user-name'>Gabriela Souza</p>
              <p className='order'>Ordered a new plant</p>
              <p className='time'>2 min ago</p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}
