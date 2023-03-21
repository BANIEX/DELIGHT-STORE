import React from 'react'
import axios from 'axios'

const LoadFromDbToProduct = async () => {

  try {
    const data = await axios.get("/data"); 

    console.log(data.data.data);
     


    return data.data.data
  } catch (error) {
    console.log(error);
  }




  
}

export default LoadFromDbToProduct