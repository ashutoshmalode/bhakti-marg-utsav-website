import { Container } from "react-bootstrap";
import { sponsors } from "../data/sponsors";

export const Sponsors = () => {
  return (
    <Container className="py-5">
      <h1>Sponsors</h1>

      <div className="mt-5">
        <h2 className="text-center text-secondary">Financial Sponsors</h2>
        <div className="d-flex justify-content-center gap-5 my-4">
          {sponsors.financial.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                style={{ height: "300px" }}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center text-secondary">Management Sponsors</h2>
        <div className="d-flex justify-content-center gap-5 my-4">
          {sponsors.management.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                style={{ height: "300px" }}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center text-secondary">Public Sponsors</h2>
        <div className="d-flex justify-content-center gap-5 my-4">
          {sponsors.public.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={sponsor.img}
                alt={sponsor.name}
                style={{ height: "300px" }}
              />
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};
