import { Image } from "@nextui-org/image";
import Marquee from "react-fast-marquee";

const list = [
  {
    img: "https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/dten/2022/12/27/shwapno-1.jpeg",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMmfTmrTW3L1W7wORXCug46zliFR1vKF5OBxyiaXIaQ&s",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocaNsQqjG7ocMfIHZIgF6F39q_RhIgJ4jkMr3r-5NPA&s",
  },
  {
    title: "Lemon",
    img: "https://dubailocal.ae/assets/logo/1692418199_314e409574a846a0b518.png",
    price: "$5.30",
  },
];

const Partners = () => {
  return (
    <Marquee className="py-12 w-full">
      <div className="flex">
        {list.map((item, index) => (
          <div key={index} className="mx-5 sm:mx-8 md:mx-12  ">
            <Image
              alt={item.title}
              className="w-28 h-24 object-cover "
              src={item.img}
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Partners;
