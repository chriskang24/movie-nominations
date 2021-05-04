import React from "react";
import Nomination from './Nomination'
import MovieDetails from "./MovieDetails";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

export default function Nominations({ nominations, setNominations }) {
  return (
    <MDBContainer>
      <MDBListGroup style={{ width: "100%" }}>
        {nominations.length > 0 ?
          nominations.map(movie => (
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              <MovieDetails key={movie.imdbId} {...movie} />
              <Nomination nominations={nominations} setNominations={setNominations} movie={movie} />
            </MDBListGroupItem>
          ))
          : <MDBListGroupItem className="d-flex justify-content-between align-items-center">
            <span>No Nominations!</span>
          </MDBListGroupItem>
        }
      </MDBListGroup>
    </MDBContainer>
  )
}
