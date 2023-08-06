import React, { useReducer , useRef , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import CrimeTable from './crime/CrimeTable'
export default function CrimeStatusBody() {

  const effectRan = useRef(false)
    const navigate = useNavigate()
    const userOrOfficer = localStorage.getItem("usertype");
    
    const callAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/complaintauth?authToken=${localStorage.getItem('authToken')}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      if(!data.success || userOrOfficer === 'user'){
        navigate("/")
      }
    } catch (error) {
      console.log('There was an error in authenticating user');
      navigate('/login');
    }
  };

    useEffect(() => {
      if(effectRan.current === false){
          callAuthentication()
          effectRan.current = true
      }
  }, [])


  return (
    <>
      <CrimeTable/>
    </>
  )
}
