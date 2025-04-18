import { type HeroBenefit } from "../../utils/contentTypes";

interface HeroBenefitProps {
  benefit: HeroBenefit;
}

export default function HeroBenefit({ benefit }: HeroBenefitProps) {
  return (
    <li key={benefit.id} className="flex items-center gap-x-10">
      <div className="bg-primary-100 flex size-24 shrink-0 items-center justify-center rounded-full">
        <benefit.Icon className="fill-primary-700" />
      </div>
      <div>
        <p className="tracking-6 text-[1.7rem]/10.5 font-medium whitespace-nowrap text-gray-600">
          {benefit.heading}
        </p>
        <p className="tracking-6 text-[.82rem]/7">{benefit.description}</p>
      </div>
    </li>
  );
}
