import { LuBrain } from "react-icons/lu";
import { FaToggleOff } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoShieldOutline } from "react-icons/io5";

const data = [
  {
    icon: <LuBrain size={26} color="blue" />,
    tittle: "Stay Focused",
    para: "Remove distracting sidebar recommendations and maintain your attention on the content you chose to watch.",
  },
  {
    icon: <FaToggleOff size={26} color="blue" />,
    tittle: "Simple Toggle",
    para: "Easy one-click toggle to enable or disable the extension whenever you need recommendations back.",
  },
  {
    icon: <AiOutlineThunderbolt size={26} color="blue" />,
    tittle: "Instant Results",
    para: "Works immediately after installation. No setup required, no complex configurations.",
  },
  {
    icon: <IoShieldOutline size={26} color="blue" />,
    tittle: "Privacy First",
    para: "No data collection, no tracking. Your viewing habits stay completely private.",
  },
];

export default data;
