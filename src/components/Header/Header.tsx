import './Header.css'
import dioLogo from '../../assets/images/logo.svg'
export const Header  = () => {
  return(
    <div className='header'>
      <img src={dioLogo} alt="bank logo" />
      <h1>Banks</h1>
    </div>
  )
}
