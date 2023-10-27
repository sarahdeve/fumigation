import './App.css';
// import img2 from './images/img5.webp';
import img2 from "./images/img2.jpg";
import img3 from "./images/img6.webp"
function App() {
  return (
    <div className="App">
      <header className="App-background">
         <div>
          <img src={img2} alt='images' />
         </div>

        <div className='app-title'>
          <h1>PRINCE ALLBRIGHT & COMPANY</h1>
        </div>

        <div className='app-body'>
         <button className='btn'>CONTACT US FOR</button> 
         <h3>DISINFECTION, FUMIGATION <br></br>& PEST CONTROL SERVICES</h3>
        </div> 
        <div className='office'>
          <h1>Office</h1>
          <p>No 28, Oyo Road, Opp-Oando Filling Station. Ibadan</p>
          <p>Email: princeallbrightfumigations@gmail.com</p>
          <p className='fas fa phone'>Tel: 08065599885</p>
        </div>

        <div><p className='foot'>EFFECTIVE, SUSTAINABLE AND RELIABLE</p></div>

        <div className='img3'>
          <img src={img3} alt='images' />
         </div>
        
      </header> 
      <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
