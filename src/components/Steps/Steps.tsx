import { steps } from "../../utils/content";
import swimmingDudes from "../../../public/swimmingDudes.webp";
import Rating from "./Rating";

export default function Steps() {
  return (
    <section className="px-24 py-36">
      <div className="m-auto max-w-432 px-21.5">
        <div className="mt-4 text-center">
          <h2 className="tracking-6 mb-5 text-[3.25rem] font-semibold">
            Travel to make sweet memories
          </h2>
          <p className="tracking-6 text-[1.75rem] font-light text-gray-700">
            Find the perfect vaccation gateway
          </p>
        </div>

        <div className="flex items-start justify-between gap-x-44 pt-26">
          <div className="max-w-min shrink-5">
            <ul>
              {steps.map((step) => (
                <li key={step.id}>
                  <span>{step.id}</span>
                  <h3>{step.heading}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <figure>
            <img src={swimmingDudes} alt="A photo of swimming dudes" />
            <Rating />
            <Rating />
          </figure>
        </div>
      </div>
    </section>
  );
}
