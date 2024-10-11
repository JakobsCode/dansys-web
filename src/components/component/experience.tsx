import { CiCalendar } from "react-icons/ci";
import { CiDatabase } from "react-icons/ci";
import { HiCodeBracket } from "react-icons/hi2";
import { CiCloudRainbow } from "react-icons/ci";
import { PiNetworkLight } from "react-icons/pi";
import { CiPower } from "react-icons/ci";

const TiltedExperienceScroll = () => {
  const experiences = [
    {
      description: "Webentwicklung",
      icon: CiCalendar,
    },
    {
      description: "Datenbankadministration",
      icon: CiDatabase,
    },
    {
      description: "Softwareentwicklung",
      icon: HiCodeBracket,
    },
    {
      description: "Cloud-Lösungen",
      icon: CiCloudRainbow,
    },
    {
      description: "Netzwerktechnik",
      icon: PiNetworkLight,
    },
    {
      description: "Kundenservice",
      icon: CiPower,
    },
  ];

  return (
    <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-4 justify-center mx-auto">
      {experiences.map((experience) => (
        <div
          className="bg-background flex items-center max-h-min max-w-xs p-4 rounded-2xl gap-4"
          key={experience.description}
        >
          <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
            <experience.icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{experience.description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TiltedExperienceScroll;
