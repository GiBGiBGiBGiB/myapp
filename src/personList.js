import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PersonList() {
  const [state,setState] = useState({Items:[]})

  useEffect(async()=>{
    const result = await axios.get(`https://c4m0e7vhf4.execute-api.ap-southeast-1.amazonaws.com/items`)

      setState( result.data );
      console.log(result)

    },[]) 

    return (
      <ul>test
        {
          state.Items.map(item =>(
              <li>{item.ID};{item.LatestGreetingTime}</li>
            ))
        }
      </ul>
    );
  }
