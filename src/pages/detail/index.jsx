import Taro, { Component } from "@tarojs/taro";
import { Image, Text, Button, View } from "@tarojs/components";
import NavSwiper from "../index/NavSwiper/index";
import { connect } from "@tarojs/redux";
import "./index.scss";

const sizeData = [
  {
    id: "1",
    name: "XS号",
  },
  {
    id: "2",
    name: "S号",
  },
  {
    id: "3",
    name: "M号",
  },
  {
    id: "4",
    name: "L号",
  },
  {
    id: "5",
    name: "XL号",
  },
  {
    id: "6",
    name: "XXL号",
  },
];

class Detail extends Component {
  constructor() {
    this.state = {
      sizeSelectedId: null,
    };
  }

  config = {
    navigationBarTitleText: "",
    tabBar: null,
  };
  componentWillMount() {}

  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: "home/getGoodsDetail",
        payload: {},
      });
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  goToPage = (e) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: e.currentTarget.dataset.url,
      });
    } else {
      Taro.switchTab({
        url: e.currentTarget.dataset.url,
      });
    }
  };


  render() {
    const { goodsData = null } = this.props;
    const { sizeSelectedId } = this.state;
    return (
      <View className="detail-warp">
        <NavSwiper
          home={false}
          imgList={
            goodsData &&
            goodsData.image.map((v, k) => {
              return { id: k, url: v };
            })
          }
        />
        <View className="share-btn">
          <Button open-type="share" />
        </View>
        <View className="container">
          <View className="info-business-card">
            <Text className="name">{goodsData && goodsData.brand}</Text>
            <View className="model">
              参考价 ¥{goodsData && goodsData.market_price / 100}
            </View>
          </View>

          <View className="tag-list">
            <View className="vip-tag">VIP</View>
            <View className="limit_tag">
              {goodsData && goodsData.limit_tag}
            </View>
          </View>
          <View className="goodName">{goodsData && goodsData.name}</View>

          <View className="info-size">
            {sizeData.map((v) => (
              <View
                key={v.id}
                className={sizeSelectedId === v.id ? "size on" : "size"}
                onClick={() => {
                  this.setState({ sizeSelectedId: v.id });
                }}
              >
                {v.name}
              </View>
            ))}
          </View>

          {/* 优质评价 */}
          <View className="goods-info">
            <View className="chapter-head">
              优质评价（
              {goodsData.comments && goodsData.comments.total}）
            </View>
            {goodsData.comments && goodsData.comments.total == 0 && (
              <View className="text-center">———— 暂无优质评价 ————</View>
            )}
            {goodsData &&
              goodsData.comments &&
              goodsData.comments.rows &&
              goodsData.comments.rows.map((item, index) => (
                <View className="fj" key={index}>
                  <Image className="fj-img" alt="" src={item.user_pic} />
                  <View>
                    <View className="fj-name font26">{item.nickname}</View>
                    <View className="fj-tag">{item.fit_text}</View>
                    <View className="fj-info">{item.comment}</View>
                    <View className="comment-img">
                      {item.images &&
                        item.images.map((sub1, subIndex1) => (
                          <Image
                            key={subIndex1}
                            className="goods-img"
                            mode="widthFix"
                            src={sub1.image_url}
                          />
                        ))}
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </View>

        {/* 底部操作栏 */}
        <View className="detail-bottom-btns">
          <View
            className="nav"
            data-url="/pages/index/index"
            onClick={this.goToPage}
          >
            <Image
              className="nav-img"
              src={require("@/assets/images/tab/home.png")}
              alt=""
            />
            首页
          </View>
          <View className="nav">
            <Image
              className="nav-img"
              src={require("@/assets/images/icon/customerservice.png")}
              alt=""
            />
            客服
          </View>
          <View
            className="nav"
            data-url="/pages/cart/index"
            onClick={this.goToPage}
          >
            <Image
              className="nav-img"
              src={require("@/assets/images/tab/cart.png")}
              alt=""
            />
            衣袋
            {/* {1 > 0 && <View className="zan-badge__count">{20}</View>} */}
          </View>
          <View
            className={!sizeSelectedId ? "join join-disabled" : "join"}
            // onClick={this.join}
          >
            加入衣袋
          </View>
        </View>
      </View>
    );
  }
}

export default connect(({ home }) => ({
  goodsData: home.goodsData,
}))(Detail);
