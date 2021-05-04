import React from 'react';
import { MDBBtn } from "mdbreact";

const Nomination = ({ nominations, setNominations, movie }) => {
  const onBtnClick = () => {
    const filteredNominations = nominations.filter(nomination => nomination.imdbID !== movie.imdbID)
    setNominations(filteredNominations)
  }

  return (
    <MDBBtn
      active color="primary"
      onClick={() => onBtnClick()}
    >
      Remove
    </MDBBtn>
  )
}

export default Nomination;