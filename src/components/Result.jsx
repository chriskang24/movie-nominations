import React, { useEffect, useState } from 'react';
import { MDBBtn } from "mdbreact";

/*
  1. Determine the "function" of the component
    a) Pass the value of "movie" to setNominations (add movie to nominations)

  2. Determine state requirements of the component
    a) disabled if the movie is nominated
      - movie is in nominations

  3. How state affects the function of the component
    a) if disabled, do not do 1a

  4. Determine what values must be passed in as props
    a) nominatations
    b) setNominations
    c) movie

  5. Determine what values must be computed within the component
    a) checkIsNominated (boolean of determining if disabled)
*/

const Result = ({ nominations, setNominations, movie }) => {
  const [disabled, setDisabled] = useState(true);

  const checkIsNominated = () => {
    return !!nominations.find(nomination => nomination.imdbID === movie.imdbID)
  }

  const checkIfMaxNominations = () => nominations.length >= 5

  useEffect(() => {
    const isDisabled = checkIsNominated() || checkIfMaxNominations()
    setDisabled(isDisabled)
  }, [nominations])

  const onBtnClick = () => {
    setNominations([...nominations, movie])
  }

  return (
    <MDBBtn
      active color="primary"
      disabled={disabled}
      onClick={() => {
        if (!disabled) onBtnClick();
      }}
    >
      Nominate
    </MDBBtn>
  )
}

export default Result;