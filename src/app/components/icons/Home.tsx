import { ICON_SIZE } from "@/utils/constants";
import { IconProps } from "@/utils/types";

const Home = ({ className, ...props }: IconProps) => (
  <svg
    width={22}
    height={21}
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className={`${ICON_SIZE} ${className}`}
  >
    <path
      d="M21.1834 10.336L12.1271 1.28443L11.5201 0.677403C11.3818 0.540004 11.1948 0.462891 10.9998 0.462891C10.8048 0.462891 10.6178 0.540004 10.4795 0.677403L0.81621 10.336C0.674486 10.4772 0.56248 10.6453 0.486801 10.8305C0.411123 11.0156 0.373307 11.2141 0.375585 11.4141C0.38496 12.2391 1.07168 12.8977 1.89668 12.8977H2.89277V20.5313H19.1068V12.8977H20.124C20.5248 12.8977 20.9021 12.7407 21.1857 12.4571C21.3254 12.3179 21.436 12.1524 21.5113 11.9701C21.5865 11.7879 21.6248 11.5925 21.624 11.3954C21.624 10.9969 21.467 10.6196 21.1834 10.336ZM12.3123 18.8438H9.6873V14.0626H12.3123V18.8438ZM17.4193 11.2102V18.8438H13.8123V13.5001C13.8123 12.9821 13.3928 12.5626 12.8748 12.5626H9.1248C8.60683 12.5626 8.1873 12.9821 8.1873 13.5001V18.8438H4.58027V11.2102H2.33027L11.0021 2.54537L11.5436 3.08678L19.6717 11.2102H17.4193Z"
      fill="#92C2A3"
    />
  </svg>
);
export default Home;
