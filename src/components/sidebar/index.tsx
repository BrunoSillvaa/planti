import logo from '../../assets/logo.png'
import { IoIosTimer } from 'react-icons/io'
import { Container } from './styles'

import { RiEBike2Line } from 'react-icons/ri'
import { MdOutlineExplore } from 'react-icons/md'
import { AiOutlineTrophy } from 'react-icons/ai'
import { IoIosTrendingUp } from 'react-icons/io'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsCreditCard2Front } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'

export default function Sidebar() {
  return (
    <Container>
      <div className='logo-wrapper'>
        <img src={logo} alt='Logo Image' className='img' />
        <h2 className='text'>Planti.</h2>
      </div>

      <div className='menu-wrapper'>
        <h3 className='menu-title'>Quick Menu</h3>
        <div className='itens-wrapper'>
          <div className='item'>
            <IoIosTimer className='item-icon' />
            <h4 className='item-title'>Dashboard</h4>
          </div>
          <div className='item'>
            <RiEBike2Line className='item-icon' />
            <h4 className='item-title'>My Orders</h4>
          </div>
          <div className='item'>
            <MdOutlineExplore className='item-icon' />
            <h4 className='item-title'>Explore</h4>
          </div>
          <div className='item'>
            <AiOutlineTrophy className='item-icon' />
            <h4 className='item-title'>Products</h4>
          </div>
        </div>
      </div>

      <div className='menu-wrapper'>
        <h3 className='menu-title'>Settings</h3>
        <div className='itens-wrapper'>
          <div className='item'>
            <AiOutlinePieChart className='item-icon' />
            <h4 className='item-title'>Charts</h4>
          </div>
          <div className='item'>
            <IoIosTrendingUp className='item-icon' />
            <h4 className='item-title'>Trends</h4>
          </div>
          <div className='item'>
            <MdOutlinePermContactCalendar className='item-icon' />
            <h4 className='item-title'>Contact</h4>
          </div>
          <div className='item'>
            <BsCreditCard2Front className='item-icon' />
            <h4 className='item-title'>Billing</h4>
          </div>
        </div>
      </div>

      <div className='help'>
        <span>?</span>
        <h3>Help Center</h3>
        <p>
          Having trouble in Planti, please contact us from for more questions.
        </p>
        <button>Go to help center</button>
      </div>
    </Container>
  )
}
