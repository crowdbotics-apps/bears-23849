import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0607/cba5/657a8af4ab4823cbf7f7ab1933580095"
        }}
        style={styles.ImageBackground_7_691}
      />
      <View style={styles.View_7_692}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fed/a8bc/102157f6c7d16a0fd81f423cf643b4d8"
          }}
          style={styles.ImageBackground_7_693}
        />
        <View style={styles.View_7_694} />
        <View style={styles.View_7_764} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2daf/8f46/2ccb4d85f893ee1a2d032062a6ea7260"
          }}
          style={styles.ImageBackground_7_765}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1522/4224/756f70c48c8c557f29f228db9546401a"
          }}
          style={styles.ImageBackground_7_766}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/1272/6c1d39ecc9a339fa37e698bb2e0fd6c6"
          }}
          style={styles.ImageBackground_7_767}
        />
        <View style={styles.View_7_768}>
          <View style={styles.View_7_769}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e9/0bda/ad10637ccb2842e4ebd64fdf776ce05a"
              }}
              style={styles.ImageBackground_7_770}
            />
            <View style={styles.View_7_771} />
            <View style={styles.View_7_772} />
          </View>
        </View>
        <View style={styles.View_7_773} />
        <View style={styles.View_7_774} />
        <View style={styles.View_7_775}>
          <View style={styles.View_7_776}>
            <View style={styles.View_7_777}>
              <Text style={styles.Text_7_777}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5825/1ec7/d684975b08bc608ced93a73df9c02f2b"
              }}
              style={styles.ImageBackground_7_778}
            />
          </View>
          <View style={styles.View_7_779}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d6/881f/8f42ef39f8a5acb50205802452acf77c"
              }}
              style={styles.ImageBackground_7_780}
            />
            <View style={styles.View_7_781}>
              <Text style={styles.Text_7_781}>Progress</Text>
            </View>
          </View>
          <View style={styles.View_7_782}>
            <View style={styles.View_7_783}>
              <Text style={styles.Text_7_783}>Messages</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aed/042a/fe1851f0f493290797b3346d7b6b5bf4"
              }}
              style={styles.ImageBackground_7_784}
            />
          </View>
          <View style={styles.View_7_785}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2052/99ed/148e331af92eeb1cf0642d8c4b0e07b6"
              }}
              style={styles.ImageBackground_7_786}
            />
            <View style={styles.View_7_787}>
              <Text style={styles.Text_7_787}>Appointments</Text>
            </View>
          </View>
          <View style={styles.View_7_788}>
            <View style={styles.View_7_789}>
              <View style={styles.View_7_790}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c04/e470/748a0e6abd8db00ed7034c133b395edc"
                  }}
                  style={styles.ImageBackground_7_791}
                />
                <View style={styles.View_7_792} />
                <View style={styles.View_7_793} />
              </View>
            </View>
            <View style={styles.View_7_794}>
              <Text style={styles.Text_7_794}>More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_848}>
        <View style={styles.View_7_849} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
          }}
          style={styles.ImageBackground_7_2864}
        />
        <View style={styles.View_7_903}>
          <View style={styles.View_7_901} />
          <View style={styles.View_7_902}>
            <Text style={styles.Text_7_902}>Cardiologist</Text>
          </View>
        </View>
        <View style={styles.View_7_898}>
          <Text style={styles.Text_7_898}>James Sawyer</Text>
        </View>
        <View style={styles.View_7_899}>
          <Text style={styles.Text_7_899}>9:00 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ce/d8e9/5d9f4812e39cefb093aa0896c21c82fb"
          }}
          style={styles.ImageBackground_7_900}
        />
        <View style={styles.View_7_904}>
          <View style={styles.View_7_888} />
          <View style={styles.View_7_889}>
            <View style={styles.View_7_890}>
              <Text style={styles.Text_7_890}>30</Text>
            </View>
            <View style={styles.View_7_891}>
              <Text style={styles.Text_7_891}>Sun</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_905}>
        <View style={styles.View_7_906} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ea2/6a12/efbe31b4d434a5f8b584c7fb42396916"
          }}
          style={styles.ImageBackground_7_2865}
        />
        <View style={styles.View_7_907}>
          <View style={styles.View_7_908} />
          <View style={styles.View_7_909}>
            <Text style={styles.Text_7_909}>Cardiologist</Text>
          </View>
        </View>
        <View style={styles.View_7_910}>
          <Text style={styles.Text_7_910}>James Sawyer</Text>
        </View>
        <View style={styles.View_7_911}>
          <Text style={styles.Text_7_911}>9:00 AM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0ce/d8e9/5d9f4812e39cefb093aa0896c21c82fb"
          }}
          style={styles.ImageBackground_7_912}
        />
        <View style={styles.View_7_913}>
          <View style={styles.View_7_914} />
          <View style={styles.View_7_915}>
            <View style={styles.View_7_916}>
              <Text style={styles.Text_7_916}>01</Text>
            </View>
            <View style={styles.View_7_917}>
              <Text style={styles.Text_7_917}>Mon</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_7_918}>
        <View style={styles.View_7_919} />
        <View style={styles.View_7_920}>
          <Text style={styles.Text_7_920}>create new appointment</Text>
        </View>
      </View>
      <View style={styles.View_7_885}>
        <Text style={styles.Text_7_885}>Appointments</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
        }}
        style={styles.ImageBackground_7_886}
      />
      <View style={styles.View_7_892}>
        <View style={styles.View_7_893} />
        <View style={styles.View_7_896} />
        <View style={styles.View_7_894}>
          <Text style={styles.Text_7_894}>scheduled</Text>
        </View>
        <View style={styles.View_7_897}>
          <Text style={styles.Text_7_897}>completed</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_7_691: {
    width: 444.0000305175781,
    height: 919.9999389648438,
    top: -11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15
  },
  View_7_692: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.4252662658691406,
    top: 2.125
  },
  ImageBackground_7_693: {
    width: 413.1776428222656,
    height: 893.6680297851562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_7_694: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_764: {
    width: 414,
    minWidth: 414,
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.42529296875,
    top: -2.125
  },
  ImageBackground_7_765: {
    width: 128,
    minWidth: 128,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.57470321655273,
    top: 55.874969482421875,
    resizeMode: "cover"
  },
  ImageBackground_7_766: {
    width: 60.000003814697266,
    minWidth: 60.000003814697266,
    height: 60.000003814697266,
    minHeight: 60.000003814697266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323.57470321655273,
    top: 33.875
  },
  ImageBackground_7_767: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.57470703125,
    top: 33.875
  },
  View_7_768: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 18.873416900634766,
    minHeight: 18.873416900634766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.574703216552734,
    top: 54.874969482421875
  },
  View_7_769: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 18.873416900634766,
    minHeight: 18.873416900634766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_770: {
    width: 11.551743507385254,
    minWidth: 11.551743507385254,
    height: 4.230068206787109,
    minHeight: 4.230068206787109,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_771: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 4.021176338195801,
    minHeight: 4.021176338195801,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.00000762939453125,
    top: 7.53057861328125,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_772: {
    width: 14.852241516113281,
    minWidth: 14.852241516113281,
    height: 4.021176338195801,
    minHeight: 4.021176338195801,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.00000762939453125,
    top: 14.85223388671875,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_773: {
    width: 414,
    minWidth: 414,
    height: 63,
    minHeight: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.42529296875,
    top: 132.87496948242188,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_7_774: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.425262451171875,
    top: 803.875,
    backgroundColor: "rgba(249, 251, 252, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_775: {
    width: 350,
    minWidth: 350,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30.574737548828125,
    top: 824.875
  },
  View_7_776: {
    width: 36,
    minWidth: 36,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  View_7_777: {
    width: 36,
    minWidth: 36,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_777: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_778: {
    width: 26,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.999996185302734
  },
  View_7_779: {
    width: 55,
    minWidth: 55,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.999996185302734,
    top: 0
  },
  ImageBackground_7_780: {
    width: 24,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_7_781: {
    width: 55,
    minWidth: 55,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_781: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_782: {
    width: 60,
    minWidth: 60,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130.99999618530273,
    top: 0
  },
  View_7_783: {
    width: 60,
    minWidth: 60,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_783: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_784: {
    width: 24,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_7_785: {
    width: 88,
    minWidth: 88,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 210.99999618530273,
    top: 0
  },
  ImageBackground_7_786: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_7_787: {
    width: 88,
    minWidth: 88,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_787: {
    color: "rgba(47, 43, 102, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_788: {
    width: 31,
    minWidth: 31,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 318.99999618530273,
    top: 3
  },
  View_7_789: {
    width: 21.392946243286133,
    minWidth: 21.392946243286133,
    height: 16.873435974121094,
    minHeight: 16.873435974121094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 0
  },
  View_7_790: {
    width: 21.392946243286133,
    minWidth: 21.392946243286133,
    height: 16.873435974121094,
    minHeight: 16.873435974121094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_791: {
    width: 10.327614784240723,
    minWidth: 10.327614784240723,
    height: 3.781811475753784,
    minHeight: 3.781811475753784,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_792: {
    width: 21.392915725708008,
    minWidth: 21.392915725708008,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000030517578125,
    top: 6.7325439453125,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_793: {
    width: 13.278362274169922,
    minWidth: 13.278362274169922,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000030517578125,
    top: 13.27838134765625,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_794: {
    width: 31,
    minWidth: 31,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_7_794: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_848: {
    width: 393,
    minWidth: 393,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 268
  },
  View_7_849: {
    width: 393,
    minWidth: 393,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_7_2864: {
    width: 10.000001907348633,
    height: 16,
    top: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_903: {
    width: 85,
    minWidth: 85,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 71
  },
  View_7_901: {
    width: 85,
    minWidth: 85,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_902: {
    width: 64,
    minWidth: 64,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 2
  },
  Text_7_902: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_898: {
    width: 101,
    minWidth: 101,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 42
  },
  Text_7_898: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_899: {
    width: 47,
    minWidth: 47,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 20
  },
  Text_7_899: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_900: {
    width: 75,
    minWidth: 75,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81,
    top: 20.000030517578125,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_904: {
    width: 51,
    minWidth: 51,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20.000030517578125
  },
  View_7_888: {
    width: 51,
    minWidth: 51,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_889: {
    width: 31,
    minWidth: 31,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10
  },
  View_7_890: {
    width: 20,
    minWidth: 20,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 32
  },
  Text_7_890: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_891: {
    width: 31,
    minWidth: 31,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_891: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_905: {
    width: 393,
    minWidth: 393,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 393
  },
  View_7_906: {
    width: 393,
    minWidth: 393,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_7_2865: {
    width: 10.000001907348633,
    height: 16,
    top: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_907: {
    width: 85,
    minWidth: 85,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 70.99999237060547
  },
  View_7_908: {
    width: 85,
    minWidth: 85,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_909: {
    width: 64,
    minWidth: 64,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 2.0000076293945312
  },
  Text_7_909: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_910: {
    width: 101,
    minWidth: 101,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 42
  },
  Text_7_910: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_911: {
    width: 47,
    minWidth: 47,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 20
  },
  Text_7_911: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_912: {
    width: 75,
    minWidth: 75,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81,
    top: 20.000030517578125,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_913: {
    width: 51,
    minWidth: 51,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20.000030517578125
  },
  View_7_914: {
    width: 51,
    minWidth: 51,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_915: {
    width: 33,
    minWidth: 33,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 10
  },
  View_7_916: {
    width: 17,
    minWidth: 17,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 32
  },
  Text_7_916: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_917: {
    width: 33,
    minWidth: 33,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_917: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_918: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 528
  },
  View_7_919: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_920: {
    width: 202,
    minWidth: 202,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 16
  },
  Text_7_920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_885: {
    width: 112,
    minWidth: 112,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 156
  },
  Text_7_885: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_886: {
    width: 25,
    height: 25,
    top: 155,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 359
  },
  View_7_892: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 198
  },
  View_7_893: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_896: {
    width: 194,
    minWidth: 194,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 8,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_894: {
    width: 88,
    minWidth: 88,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 15.5
  },
  Text_7_894: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_897: {
    width: 88,
    minWidth: 88,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 253.50003051757812,
    top: 15.5
  },
  Text_7_897: {
    color: "rgba(47, 43, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
