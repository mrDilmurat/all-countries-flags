import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5'
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import { Info } from '../components/ForInfo';


const Details = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState(null)


  useEffect(()=> {
    axios.get(searchByCountry(params.name)).then(
    ({data}) => setCountry(data[0])
    );
  }, [params.name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack/> Go Back
      </Button>
      {country && <Info navigate={navigate} {...country} />}
    </div>
  )
}

export default Details
