import {useState} from 'react'
import Loginform from '../components/Loginform';
import RegisterForm from '../components/RegisterForm';
function UserPage (){
  const [login,setLogin] = useState(false)
  const changeState = ()=>{
    setLogin(!login);
  }
  return(
    <div>
      {
        login? <Loginform changeState={changeState}/> :<RegisterForm changeState={changeState}/>
      }
    </div>
  )
}

export default UserPage;