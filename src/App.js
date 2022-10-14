import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import './App.css'
function App() {
  const [user, setUser] = useState([])
  useEffect(() =>{
      axios.get('https://jsonplaceholder.typicode.com/users')

          .then(result => {
              setUser(result.data)
          })
          .catch(error => console.log('error is ', error))}, [])

  return (
    <div>
<Carousel>

{
    user.map(el =>
        <Carousel.Item key={el.id}>
            <img
                className="go"
                src="https://images.unsplash.com/photo-1532446997697-0b92fdc456fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80"
                alt={el.name}
            />
            <Carousel.Caption className="home1">
                <div className="list__styling">
                    <p><span className="home">Name : </span>{el.name}</p>

                    <p><span className="home">Username : </span>{el.username}</p>
                    <p><span className="home">Email : </span>{el.email}</p>
                    <p><span className="home">Street : </span>{el.address.street}</p>
                    <p><span className="home">Suite : </span>{el.address.suite}</p>
                    <p><span className="home">City : </span>{el.address.city}</p>
                </div>

            </Carousel.Caption>

         </Carousel.Item>
        )
}

</Carousel>
   </div>
  );
}

export default App;
