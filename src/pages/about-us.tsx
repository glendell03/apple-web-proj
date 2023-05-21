import Hero1 from "@/assets/images/about-us-hero.png";
import Hero2 from "@/assets/images/about-us-hero-2.png";
import Doctor from "@/assets/images/doctor.png";

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

const AboutUs = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${Hero1})` }}
        className="flex-1 w-full object-cover"
      >
        <div className="backdrop-brightness-50 bg-gray-600/5 w-full h-[50rem] flex items-center justify-center">
          <h1 className="text-center text-5xl text-[#FFFF00]">
            ABOUT SYNERGY
            <br />
            HOMECARE
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-80 my-28">
        <h1 className="text-center text-2xl font-bold mb-2">ABOUT US</h1>
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
        <div className="m-10" />

        <h1 className="text-center text-2xl font-bold mb-2">Mission</h1>
        <p className="text-center">
          To provide a holistic and compassionate approach of the mentally
          challenged individual and other clients.
        </p>
        <div className="m-10" />

        <h1 className="text-center text-2xl font-bold mb-2">Vission</h1>
        <p className="text-center">
          To become the leading psychiatric nursing homecare center, that will
          provide holistic care, treatment and rehabilitation of a mentally
          challenged individual and other clients.
        </p>
      </section>

      <section
        style={{ backgroundImage: `url(${Hero2})` }}
        className="flex-1 w-full object-cover"
      >
        <div className="backdrop-brightness-50 bg-gray-600/5 w-full h-[50rem] flex items-center justify-center">
          <h1 className="text-center text-5xl text-[#FFFF00]">
            OUR DOCTORS &
            <br />
            NURSES
          </h1>
        </div>
      </section>

      <section>
        {doctors.map((d) => (
          <div className="flex flex-col gap-2 p-8 items-center justify-center odd:bg-white even:bg-[#7E7E7E]">
            <img src={d.photo} alt={d.name} className="h-40 w-40" />
            <h1 className="text-2xl">{d.name}</h1>
            <p>{d.field}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutUs;
