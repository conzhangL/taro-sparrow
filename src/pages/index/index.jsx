import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

import { connect } from "@tarojs/redux";

class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "user/getUser",
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
    const { userInfo } = this.props;
    return (
      <View className="index">
        <Text>Hello world! {userInfo.name}</Text>
      </View>
    );
  }
}

export default connect(({ user }) => ({
  userInfo: user.userInfo,
}))(Index);
