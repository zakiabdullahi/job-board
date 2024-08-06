import { relativeDate } from "@/lib/utils";
import { Job } from "@prisma/client";
import {
  Banknote,
  Briefcase,
  Clock,
  MapPin,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const {
    title,
    description,
    companyName,
    salary,
    currency,
    location,
    type,
    createdAt,
  } = job;

  const currencySign = currency === "USD" ? "$" : "₹";

  return (
    <Link
      href={`/jobs/${job.id}`}
      className="h-fit w-5/6 flex items-start gap-4 border border-gray-200 hover:border-gray-300 transition-all shadow-sm rounded-md px-4 py-3"
    >
      <div className="logo-area p-2">
        <div className="h-20 w-20 bg-gray-100 border border-gray-300 rounded-full"></div>
      </div>
      <div className="p-2 h-full flex-grow flex flex-col gap-1">
        <div className="flex justify-between text-muted-foreground">
          <h3 className="text-lg tracking-tight font-semibold text-gray-700">
            {title}
          </h3>

          <p className="flex items-center gap-1.5 ">
            <Briefcase size={16} className="shrink-0" />
            {type}
          </p>
        </div>
        <h4 className="text-sm tracking-tight font-semibold text-gray-500">
          {companyName}
        </h4>
        <span className="flex items-end gap-2 text-gray-500">
          <Banknote className="text-gray-700" />
          <h4 className="text-sm tracking-tight font-medium">
            <span className="font-semibold">{currencySign}</span> {salary}
          </h4>
        </span>

        <div className="w-full flex justify-between">
          <span className="flex items-end gap-2 text-gray-500">
            <MapPin className="text-gray-700" />
            <h4 className="text-sm tracking-tight font-medium">{location}</h4>
          </span>

          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock size={16} />
            {relativeDate(createdAt)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
