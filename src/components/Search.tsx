import { render } from "@testing-library/react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

let tab = [];

async function Search(event) {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie/",
      {
        params: {
          api_key: "3643f43590e967bbf76b9685960457d8",
          language: "fr-FR",
          query: event,
          adult: true,
        },
      }
    );

    tab = response.data.results;

    console.log(tab);
    render(
      <div className="d-flex flex-wrap" style={{ marginLeft: '5rem'}}>
        {tab.map((element) => {
          return (
            <div>
              <Container fluid="md">
                <Card style={{ width: "18rem", height: '460px', margin:'1rem' }}>
                  <Card.Img
                    variant="top"
                    style={{height: '300px'}}
                    src={
                      element.poster_path
                        ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${element.poster_path}`
                        : "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg"
                    }
                  />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>
                      {new Date(element.release_date).toLocaleDateString()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Container>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
export default Search;
