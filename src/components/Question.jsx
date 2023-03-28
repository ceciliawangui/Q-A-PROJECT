import React from 'react'
import Navbar from '../components/Navbar'
import './Question.css'

function Question (){
  return (
    <>
    <Navbar />
    <div className='qaq'>
        
        <div className='qa-h'>
          <div>Home</div>
          <div>User Profile</div>
          <div>Help</div>
        </div>

        <div className='qa-x'>
          <h2> Question</h2><br /><br />
          <p>Describe your problem in more detail</p>

          <label>Question Title</label>
          <input type="text" placeholder='Enter QA Titlte...' />

          <label>Category</label>
          <input type="text" placeholder='What category best describes your QA!'/>

          <label>QUESTION</label>
          <input type="text" placeholder="Write what best descRIbes your QUESTION" />
          
        </div>

        <div className='qa-h'>
          <button className='qn'>Ask A Question</button>

          <div className='data'>
            <div>Q&A 21</div>
            <div>Answ 71</div>
            <div>Best Answ</div>
            <div>User 12</div>
          </div>

        </div>
        
    </div>
    </>
  )
}

export default Question;