import { useEffect,useState } from 'react';
import './App.css';
import faceIO from "@faceio/fiojs";



function App() {
 const [faceio, setFaceio] = useState(null);

 useEffect(() => {
   setFaceio(new faceIO(import.meta.env.VITE_FACEIO_APP_ID));
 }, []);

 const handleSignIn = async () => {
   try {
     let response = await faceio.enroll({
       locale: "auto",
       payload: {
         email: "example@gmail.com",
         pin: "12345",
       },
     });

     console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
   } catch (error) {
     console.log(error);
   }
 };

const handleLogIn = async () => {
  try {
    let response = await faceio.authenticate({
      locale: "auto",
    });

    console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <>
      <section>
        <h1>Face Authentication by FaceIO</h1>
        <p>Make sure you give the camera permission</p>
        <button onClick={handleLogIn}>Log-in</button>
        <button onClick={handleSignIn}>Sign-Up</button>
      </section>
    </>
  );
}

export default App
