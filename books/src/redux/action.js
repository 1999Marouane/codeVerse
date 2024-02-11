import axios from "axios";


export const fetshData = (data) => {
    return {
        type: 'fetshdata',
        payload: data
    }
}


const fetshApiData = async () => {

    try {
    const DataUrl = 'http://localhost:3001/books' ;
      const response = await axios.get(DataUrl);
      const data = response.json;
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

