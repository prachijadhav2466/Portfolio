import React, { useState } from 'react';
import axios from 'axios';
import mongoose from 'mongoose';

export default function Feedback() {
  const [msg, setMsg] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      alert("submitted")
      await axios.post("http://localhost:5173/", {
        msg
      });
      setMsg('');  // Clear message after submission if needed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="Feedback" className='cont'>
      <form action='POST'>
        <textarea
          name='text'
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Enter Feedback, how was Portfolio?"
          cols="30"
          rows="10"
          value={msg}
        ></textarea>
        <input type='submit' onClick={submit} value="Submit" />
      </form>
    </div>
  );
}



