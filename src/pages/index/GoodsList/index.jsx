import Taro, { useState, useEffect } from "@tarojs/taro";
import { Image, Swiper, SwiperItem, View } from "@tarojs/components";
import "./index.scss";

const GoodsList = (props) => {
  const { goodsList } = props;

  const gotoDetail = () =>{
    Taro.navigateTo({
      url: `/pages/detail/index`,
    });
  }

  return (
    <View className="goods-list">
      {goodsList.map((v, k) => (
        <View className="goods-item" onClick={()=>gotoDetail()}>
          <Image
            className="img-container"
            src={
              v.cover_image
                ? `${v.cover_image}!w750`
                : "http://static-r.msparis.com/uploads/d/1/d1ca37e902e5550ad2c82c721bc216ce.png"
            }
            alt=""
          />
          <View className="tag-container">
            {v.type_id == 2 && v.mode_id == 1 && (
              <View className="vip-tag">VIP</View>
            )}
            {v.limit_tag && v.limit_tag != "" && (
              <View className="limit_tag">{v.limit_tag}</View>
            )}
            {v.market_price / 100 > 500 && (
              <View className="price-tag">
                参考价¥
                {v.market_price / 100}
              </View>
            )}
          </View>
          <Text className="dark">{v.brand}</Text>
          <Text>{v.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default GoodsList;
