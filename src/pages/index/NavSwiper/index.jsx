import Taro, { useState, useEffect } from "@tarojs/taro";
import { Image, Swiper, SwiperItem } from "@tarojs/components";
import { getNavImgList } from "@/services/index";
import "./index.scss";

const NavSwiper = (props) => {
  

  const { home ,imgList = []} = props;
  return (
    <Swiper
      className={!home ? "swiper-container" : "swiper"}
      iindicatorColor="#999"
      indicatorActiveColor="#bf708f"
      circular
      indicatorDots
      autoplay={false}
    >
      {imgList.map((v, k) => (
        <SwiperItem>
          <Image mode="widthFix" src={`${v.url}!w750`} />
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export default NavSwiper;
