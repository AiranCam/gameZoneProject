import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/pagination";
import Imagenes from "./Imagenes";

import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  const pagination = {
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={pagination}
        navigation={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="w-full h-[90vh] relative"
      >
        <SwiperSlide className="text-center text-lg bg-slate-50 flex justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/927e/811d/b6aed34a0e4696c5e6df23fc34e320bb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P5HjjsmiSEPNsJlGDpR~ThKABAPD0IyKWFDmBf0zTBuJpdXJy0b7KKvlKeU1PdUfyst77SXE8OpgEIt6c20vjJigfnOaUP-PMSLrFp2KvqgSmkygTAyBlE2RCcKA5wLX~-HhnUvVsOSn~bUrMp-nbjTfAvJqNEm6xjlyomR~t-XfS8tVB3B08iNK37yDODKFbVtL1BMmLZFT5OtrL9HRyQYx13PJ4OlgGZkBpnTTIaxtKobUL-kdlrs4Z--iATUF9OCBa8vn6O0Rvj0Jlb27iS39b0FOmO79padOpRvy4F770~q4X4K4zTYpyo5OQuwOFYgaoJPJVB2zKoifWBKBrQ__"
            alt=""
          />
          <div className="text-white absolute z-40 bg-black bg-opacity-45 w-full h-[90vh] grid items-center justify-start pl-36">
            <div className="justify-evenly flex flex-col items-start h-1/4">
              <h1 className="text-4xl font-bold">The Outlast Trials</h1>
              <span className="text-2xl font-semibold">$59.99</span>
              <button className=" rounded-3xl w-56 h-12 bg-gradient-to-r from-[#7a32ef] via-[#5b3cb4] to-[#ac98e5]">
                Comprar
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-slate-50 flex justify-center items-center">
          <img
            className="w-full h-full object-cover"
            src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg"
            alt=""
          />
          <div className="text-white absolute z-40 bg-black bg-opacity-45 w-full h-[90vh] grid items-center justify-start pl-36">
            <div className="justify-evenly flex flex-col items-start h-1/4">
              <h1 className="text-4xl font-bold">Minecraft</h1>
              <span className="text-2xl font-semibold">$59.99</span>
              <button className=" rounded-3xl w-56 h-12 bg-gradient-to-r from-[#7a32ef] via-[#5b3cb4] to-[#ac98e5]">
                Comprar
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Imagenes />
    </>
  );
}
