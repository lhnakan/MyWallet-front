import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import axios from 'axios';

import HeaderContainer from './HeaderForms';
import UserContext from '../../context/UserContext';

export default function Header() {
  const { user, config } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
    
  function logout() {     
    if (loading) return;
    setLoading(true);

    axios.post('http://localhost:4000/api/users/sign-out', null, config)
      .then(() => {          
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <HeaderContainer>
      <h2>
        Ola,
        {user.username}
      </h2>
      <IoExitOutline size="26px" onClick={logout} />
    </HeaderContainer>
  );
}
