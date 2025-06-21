import workexperiences from "../data/workexperiences";

export const WorkExperience = () => {
  return (
    <div className="p-8 py-20">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold">EDUCATION & EXPERIENCE</div>
      <p className="mb-7">
        I completed all my degrees through apprenticeship programs, which allowed me to split my time equally between working in a company and studying at school. This unique approach enabled me to gain substantial professional experience while simultaneously developing strong academic skills.
      </p>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8">
        {workexperiences.map((workexperience, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-neutral-content"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? "timeline-start md:text-end"
                  : "timeline-end md:text-start"
              } mb-10`}
            >
              <time className="font-mono italic">
                {workexperience.startDate} - {workexperience.endDate}
              </time>
              <div
                className={`flex gap-2 h-15 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div>
                  <img src={workexperience.icon} alt="orange" width={50} />
                </div>
                <div>
                  <div className="text-xl font-extrabold">
                    {workexperience.title}
                  </div>
                  <p className="font-light">
                    {workexperience.employer} | {workexperience.location}
                  </p>
                </div>
              </div>
              {workexperience.description}
              {workexperience.apprenticeship === true && (
              <a
                href={workexperience.diplomaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`w-full mt-2 flex border border-base-300 rounded-md p-2 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}>
                  <div>
                    <img
                      src={workexperience.schoolIcon}
                      alt="epitech"
                      width={50}
                    />
                  </div>
                  <div className="mx-2">
                    <h2 className="font-bold">{workexperience.diploma}</h2>
                    <p className="font-light">
                      {workexperience.school} | {workexperience.schoolLocation}
                    </p>
                  </div>
                </div>
              </a>
              )}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
