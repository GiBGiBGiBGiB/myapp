import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PersonList() {
  const [state,setState] = useState({Items:[]})

  useEffect(()=>{
    axios.get(`https://c4m0e7vhf4.execute-api.ap-southeast-1.amazonaws.com/items`)
    .then(res => {
      // console.log(res.data);
      const items = res.data.Items;
      setState( items );
      console.log(state)
    })
    .catch((err)=>{console.error(err)})
    },[]) 

    return (
      <ul>test
        {
          state.map(item =>(
              <li>{item.ID};{item.LatestGreetingTime}</li>
            ))
        }
      </ul>
    );
  }
