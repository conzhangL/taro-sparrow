import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import NavSwiper from "./NavSwiper/index";
import GoodsList from "./GoodsList/index";
import "./index.scss";

class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "user/getUser",
      payload: {},
    });
    dispatch({
      type: "home/getBrands",
      payload: {},
    });
    dispatch({
      type: "home/getGoodsList",
      payload: {},
    });
    dispatch({
      type: "home/getNavImgList",
      payload: {},
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页",
  };

  

  render() {
    const { goodsList, brands,navImgList } = this.props;
    return (
      <View className="home-page">
        <NavSwiper home={true} imgList = {navImgList}/>
        <View className="nav-list">
          {brands.map((v) => (
            <View className="nav-item" key={v.id}>
              <Image mode="widthFix" className="item-img" src={v.image_src} />
            </View>
          ))}
        </View>
        <GoodsList goodsList={goodsList} />
      </View>
    );
  }
}

export default connect(({ user, home }) => ({
  userInfo: user.userInfo,
  brands: home.brands,
  goodsList: home.goodsList,
  navImgList:home.navImgList
}))(Index);
