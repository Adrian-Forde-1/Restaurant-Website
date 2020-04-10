import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Reservation = () => {
  const [selectedDate, changeSelectedDate] = useState(null);
  window.navActive = false;
  window.scrollTo(0, 0);

  useEffect(() => {
    isInPast();
  }, [selectedDate]);

  const setDate = (e) => {
    changeSelectedDate(e.target.valueAsDate);
  };

  const isInPast = () => {
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    if (selectedDate < now) document.getElementById('date').value = null;
  };
  return (
    <div>
      <div className="reservation">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="mt-5 w-80 h-80 form-container">
            <h4 className="mb-4">Table Reservation</h4>
            <form action="">
              <div className="form-group">
                <select
                  name="Number Of Persons"
                  className="form-control"
                  required
                >
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5">5 Persons</option>
                  <option value="6">6 Persons</option>
                </select>
              </div>

              <div className="form-group">
                <input
                  id="date"
                  type="date"
                  className="form-control"
                  required
                  onChange={setDate}
                />
              </div>

              <div className="form-group">
                <select name="Time" id="" className="form-control" required>
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="1:00">1:00</option>
                  <option value="1:30">1:30</option>
                  <option value="2:00">2:00</option>
                  <option value="2:30">2:30</option>
                  <option value="3:00">3:00</option>
                  <option value="3:30">3:30</option>
                  <option value="4:00">4:00</option>
                  <option value="4:30">4:30</option>
                  <option value="5:00">5:00</option>
                  <option value="5:30">5:30</option>
                  <option value="6:00">6:00</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="Extra Info"
                  id=""
                  cols="30"
                  rows="5"
                  className="form-control"
                  maxLength="150"
                  placeholder="Enter some extra infromation"
                ></textarea>
              </div>

              <div className="form-group">
                <button className="btn btn-sm btn-danger mt-1">
                  Make Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer
        id="contact"
        className="d-flex flex-column align-items-center contact"
      >
        <div className="container d-flex justify-content-center">
          <h3 className="text-center pt-3 w-auto">Contact</h3>
        </div>
        <div className="container mt-2 mb-4">
          <div className="d-flex justify-content-around">
            <i className="fab fa-facebook-f red-color"></i>
            <i className="fab fa-twitter red-color"></i>
            <i className="fab fa-instagram red-color"></i>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-start artist">
          <div>
            Recipe Icon made by
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Timer Icon made by
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Fruits and Vegitable Icon made by
            <a
              href="https://www.flaticon.com/authors/nhor-phai"
              title="Nhor Phai"
            >
              Nhor Phai
            </a>
            from
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Reservation;
