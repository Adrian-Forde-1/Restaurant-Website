import React from 'react';

const Reservation = () => {
  return (
    <div className='reservation'>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='mt-5 w-80 h-80 form-container'>
          <h4 className='mb-4'>Table Reservation</h4>
          <form action=''>
            <div className='form-group'>
              <select
                name='Number Of Persons'
                className='form-control'
                required
              >
                <option value='2'>2 Persons</option>
                <option value='3'>3 Persons</option>
                <option value='4'>4 Persons</option>
                <option value='5'>5 Persons</option>
              </select>
            </div>

            <div className='form-group'>
              <input type='date' className='form-control' required />
            </div>

            <div className='form-group'>
              <select name='Time' id='' className='form-control' required>
                <option value='10:00'>10:00</option>
                <option value='10:30'>10:30</option>
                <option value='11:00'>11:00</option>
                <option value='11:30'>11:30</option>
                <option value='12:00'>12:00</option>
                <option value='12:30'>12:30</option>
                <option value='1:00'>1:00</option>
                <option value='1:30'>1:30</option>
                <option value='2:00'>2:00</option>
                <option value='2:30'>2:30</option>
                <option value='3:00'>3:00</option>
                <option value='3:30'>3:30</option>
                <option value='4:00'>4:00</option>
                <option value='4:30'>4:30</option>
                <option value='5:00'>5:00</option>
                <option value='5:30'>5:30</option>
                <option value='6:00'>6:00</option>
              </select>
            </div>

            <div className='form-group'>
              <textarea
                name='Extra Info'
                id=''
                cols='30'
                rows='5'
                className='form-control'
                maxLength='200'
                placeholder='Enter some extra infromation'
              ></textarea>
            </div>

            <div className='form-group'>
              <button className='btn btn-sm btn-danger mt-1'>
                Make Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
