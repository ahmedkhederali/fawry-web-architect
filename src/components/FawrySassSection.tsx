import AboutTimeLineSection from '@/pages/AboutUspage/AboutTimeLineSection';
import Firebase from '@/pages/Firebase';
import SaaSVideos from '@/pages/SaasVideos';
import { Timeline } from '@/pages/TimelineModal';
import {
  WalletCards,
  MailCheck,
  CalendarClock,
  Handshake,
} from 'lucide-react'; 
const padyDayaData=[
  {
    title: 'Payroll',
    description:
      'Streamline your payroll process with Fawry Business HR, ensuring accurate and timely salary disbursement for your employees.',
    icon: <WalletCards className="w-6 h-6 text-[#002c5f]" />,
  },
  {
    title: 'Requests',
    description:
      'Submit and review various employee requests on Fawry Business HR, and immerse yourself in a comprehensive digital experience.',
    icon: <MailCheck className="w-6 h-6 text-[#002c5f]" />,
  },
  {
    title: 'Attendance',
    description:
      'Easily manage employee attendance and overtime with our real-time, centralized reporting system...',
    icon: <CalendarClock className="w-6 h-6 text-[#002c5f]" />,
  },
  {
    title: 'Empower your team',
    description:
      'Empower your employees to clock in and out, request leaves, claim expenses, and more, using the Fawry Business HR app.',
    icon: <Handshake className="w-6 h-6 text-[#002c5f]" />,
  },
];
const FawrySassSection = () => {
  return (
    <div className="bg-white py-16 px-4  text-[#006b99]">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-2xl font-extrabold leading-relaxed">
          At <span className="text-[#ffd400]">Fawry Business HR</span>, we understand the needs of HR management,<br />
          and we're here to help you cover all your HR needs.
        </h2>
        <p className="text-[#003366] text-base mt-4 max-w-2xl mx-auto">
          Our smart solutions increase productivity and efficiency, providing you with the best tools to manage your workforce.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
        {padyDayaData.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between items-center bg-[#f9f9f9] rounded-lg p-6 shadow-sm h-full min-h-[250px] transition duration-300 hover:shadow-md"
          >
            <div className="bg-[#ffd400] w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              {item.icon}
            </div>
            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
            <p className="text-sm text-[#003366]">{item.description}</p>
          </div>
        ))}
      </div>
        <div className="mt-10">
        <Firebase />
        </div>
      <div className="mt-10">
      <Timeline/>
      {/* <AboutTimeLineSection/> */}
    </div>
<div className="mt-10">
      <SaaSVideos />
    </div>
    </div>

  );
};

export default FawrySassSection;