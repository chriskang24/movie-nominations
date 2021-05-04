import React from "react";
import Result from './Result'
import MovieDetails from "./MovieDetails";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import Typography from '@material-ui/core/Typography';

export default function Results({ results, nominations, setNominations }) {
  return (
    <MDBContainer>
      <MDBListGroup style={{ width: "100%" }}>
        {results.length > 0 ?
          results.map(movie => (
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              <Typography>
                <MovieDetails key={movie.imdbId} {...movie} />
              </Typography>
              <Typography>
                <Result nominations={nominations} setNominations={setNominations} movie={movie} />
              </Typography>
            </MDBListGroupItem>
          ))
          : <MDBListGroupItem className="d-flex justify-content-between align-items-center">
            <span>Movie Search Results Below:</span>
          </MDBListGroupItem>
        }
      </MDBListGroup>
    </MDBContainer>
  )
}
