import Service from "./Service";
import { type Service as IService } from "../../utils/contentTypes";
import { services } from "../../utils/content";

const customizedPackag: IService = services[0]!;
const culinaryTour: IService = services[1]!;
const destinationExpress: IService = services[2]!;

export default function Services() {
  return (
    <section className="bg-primary-100 px-24 py-36">
      <ul className="border-grey-500/40 m-auto flex max-w-389 justify-between border-y-1 py-24">
        <Service service={customizedPackag} />
        <li className="bg-grey-500/40 block w-0.25 self-stretch" />
        <Service service={culinaryTour} />
        <li className="bg-grey-500/40 block w-0.25 self-stretch" />
        <Service service={destinationExpress} />
      </ul>
    </section>
  );
}
