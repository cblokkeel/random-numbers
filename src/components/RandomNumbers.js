import React from 'react'
import './randomsNumbers.css'

const RandomNumbers = ({ handleChangeMinNumber, handleChangeMaxNumber, generatedNumber, getRandomInt }) => {
    return (
        <div className='randoms-numbers-containers'>
            <h3 className='random-title'>Random number : {generatedNumber}</h3>
            <form className='generate-form' onSubmit={e => e.preventDefault()}>
                <label htmlFor="min-number">Min number</label>
                <input type='number' id='min-number' className='input' onChange={handleChangeMinNumber}/>
                <label htmlFor="max-number">Max number</label>
                <input type='number' id='max-number' className='input' onChange={handleChangeMaxNumber}/>
                <button className="submit-button" onClick={getRandomInt}>Génerer</button>
            </form>
        </div>
    );
};

export default RandomNumbers;