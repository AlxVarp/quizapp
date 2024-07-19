import React from 'react'
import  './Card.css'
import Button from './Button'

function Card(){

    return (
        <>
          <div className="card">
            <div>
              the question
            </div>
            <div>
              <Button />
              <Button />
            </div>
          
          </div>
        </>
      )

}

export default Card