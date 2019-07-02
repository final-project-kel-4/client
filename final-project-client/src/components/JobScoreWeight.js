import React, {useState, useEffect} from 'react'

export default function JobScoreWeight(props) {
  const { educationState, experienceState, aboutState, positionState} = props
  const sumbit = ()=>{
    console.log(educationState.educationScore)
  }
  const [scoreChangeValue, setScoreChangeValue] = useState()

  const handleChange = (field, value) => {
    props[field].set((prev)=>{

    })
    if(field === "educationState"){
      
    }
  }

  return (
    <>
      <form onSubmit={sumbit}>
        <div className="form-group">
          <label htmlFor="positionInput">Current Position:</label>
          <input type="range" className="form-control-range" id="positionInput" value={positionState.positionScore}
          onChange={e => handleChange('positionState', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experienceInput">Experience:</label>
          <input type="range" className="form-control-range" id="experienceInput" value={experienceState.experienceScore}
          onChange={e => handleChange('experienceState', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aboutInput">About Section:</label>
          <input type="range" className="form-control-range" id="aboutInput" value={aboutState.aboutScore}
          onChange={e => handleChange('aboutState', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="educationInput">Education:</label>
          <input type="range" className="form-control-range" id="educationInput" value={educationState.educationScore}
          onChange={e => handleChange('educationState', e.target.value)}
          />
        </div>
        <button type="submit">
          submit
        </button>
      </form>
    </>
  )
}
