
import Card from 'react-bootstrap/Card';
import img from './photo1707047716.png'
import './App.css'


function App() {



  return (
    <div className="App">
      <div className="container">
          <div className="col-12 text-center row">
            <h1> books </h1>
          </div>

        <div className="row gy-3">

          <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }} >
              <img className="card-img-top" src={img} alt="image"></img>
              <div className="card-body ">
                <h5 className="card-title">books</h5>
                <p className="card-text">books books books books booksbooks booksbooks books books books books</p>
                <button className="btn btn-primary  custom-width-btn"  href="#">show</button>
                <button className="btn btn-primary  custom-width-btn"  href="#">delet</button>
                <button className="btn btn-primary  custom-width-btn"  href="#">edit</button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
