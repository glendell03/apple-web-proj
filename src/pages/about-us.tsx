import Hero1 from "@/assets/images/about-us-hero.png";
import Hero2 from "@/assets/images/about-us-hero-2.png";
import Doctor from "@/assets/images/doctor.png";
import { Container, Row } from "react-bootstrap";

const doctors = [
  {
    name: "Dr. Doctor",
    field: "Psychiatrist",
    photo: Doctor,
  },
  {
    name: "Dr. Doctor",
    field: "Psychiatrist",
    photo: Doctor,
  },
  {
    name: "Dr. Doctor",
    field: "Psychiatrist",
    photo: Doctor,
  },
  {
    name: "Dr. Doctor",
    field: "Psychiatrist",
    photo: Doctor,
  },
];

export default function AboutUs () {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${Hero1})`,
          flex: "1 1 0%",
          width: "100%",
          height: "50rem",
          objectFit: "cover",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100%" }}
        >
          <h1 className="text-center" style={{ color: "#FFFF00" }}>
            ABOUT SYNERGY
            <br />
            HOMECARE
          </h1>
        </div>
      </section>

      <Container className="px-5 my-5">
        <h1 className="text-center font-bold mb-2">ABOUT US</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis
          nunc sed id semper risus in hendrerit gravida. Ornare lectus sit amet
          est placerat in egestas. Dolor morbi non arcu risus quis. Proin sed
          libero enim sed faucibus. Mi ipsum faucibus vitae aliquet nec
          ullamcorper sit amet. Rutrum quisque non tellus orci ac auctor augue
          mauris augue. Pulvinar pellentesque habitant morbi tristique senectus
          et netus et malesuada.
        </p>
        <div className="m-5" />

        <h1 className="text-center font-bold mb-2">Mission</h1>
        <p className="text-center">
          To provide a holistic and compassionate approach of the mentally
          challenged individual and other clients.
        </p>
        <div className="m-5" />

        <h1 className="text-center font-bold mb-2">Vission</h1>
        <p className="text-center">
          To become the leading psychiatric nursing homecare center, that will
          provide holistic care, treatment and rehabilitation of a mentally
          challenged individual and other clients.
        </p>
      </Container>

      <section
        style={{
          backgroundImage: `url(${Hero2})`,
          flex: "1 1 0%",
          width: "100%",
          height: "50rem",
          objectFit: "cover",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100%" }}
        >
          <h1 className="text-center" style={{ color: "#FFFF00" }}>
            OUR DOCTORS &
            <br />
            NURSES
          </h1>
        </div>
      </section>

      <section>
        {doctors.map((d, i) => (
          <Row
            className="justify-content-center align-items-center p-3"
            style={{ backgroundColor: (i + 1) % 2 === 0 ? "#7E7E7E" : "white" }}
          >
            <img
              src={d.photo}
              alt={d.name}
              style={{ height: "18rem", width: "20rem" }}
            />
            <h1 className="text-center">{d.name}</h1>
            <p className="text-center">{d.field}</p>
          </Row>
        ))}
      </section>
    </div>
  );
};

