import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import { useNavigate } from 'react-router-dom';

const AddBooking = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    user: '',
    room: '',
    checkInDate: '',
    checkOutDate: '',
    status: 'confirmed',
    totalAmount: '',
    paymentStatus: 'unpaid',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRoomsAndUsers = async () => {
      try {
        const roomsRes = await axios.get('/api/room');
        const usersRes = await axios.get('/api/useraccount');
        
        // Filter rooms and users based on the criteria
        const filteredRooms = roomsRes.data.filter(room => room.status === 'available');
        const filteredUsers = usersRes.data.filter(user => user.userRole !== 'guest');
        
        setRooms(filteredRooms);
        setUsers(filteredUsers);
      } catch (error) {
        setErrorMessage('Error fetching rooms and users');
      }
    };
    fetchRoomsAndUsers();
  }, []);

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/booking', bookingData);
      setSuccessMessage('Booking added successfully!');
      setTimeout(() => {
        navigate('/Booking');
      }, 2000);
    } catch (error) {
      setErrorMessage('Error adding booking');
    }
  };


  const today = new Date().toISOString().split('T')[0];


  return (
    <div>
      <Header />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title mt-5">Add Booking</h3>
              </div>
            </div>
          </div>

          {successMessage && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              {successMessage}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setSuccessMessage('')}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {errorMessage}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setErrorMessage('')}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit}>
                <div className="row formtype">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>User</label>
                      <select
                        name="user"
                        className="form-control"
                        onChange={handleInputChange}
                        value={bookingData.user}
                        required
                      >
                        <option value="">Select User</option>
                        {users.map(user => (
                          <option key={user._id} value={user._id}>{user.userName}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Room</label>
                      <select
                        name="room"
                        className="form-control"
                        onChange={handleInputChange}
                        value={bookingData.room}
                        required
                      >
                        <option value="">Select Room</option>
                        {rooms.map(room => (
                          <option key={room._id} value={room._id}>{room.roomNumber}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Check-In Date</label>
                      <input
                        type="date"
                        name="checkInDate"
                        className="form-control"
                        onChange={handleInputChange}
                        value={bookingData.checkInDate} min={today} 
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Check-Out Date</label>
                      <input
                        type="date"
                        name="checkOutDate"
                        className="form-control"
                        onChange={handleInputChange}
                        value={bookingData.checkOutDate}
                        min={today} 
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Total Amount</label>
                      <input
                        type="number"
                        name="totalAmount"
                        className="form-control"
                        onChange={handleInputChange}
                        value={bookingData.totalAmount}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Payment Status</label>
                      <select
                        name="paymentStatus"
                        className="form-control"
                        onChange={handleInputChange}
                        value={bookingData.paymentStatus}
                        required
                      >
                        <option value="unpaid">Unpaid</option>
                        <option value="paid">Paid</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add Booking</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooking;
