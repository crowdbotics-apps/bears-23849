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
        style={styles.ImageBackground_7_2458}
      />
      <View style={styles.View_7_2459}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fed/a8bc/102157f6c7d16a0fd81f423cf643b4d8"
          }}
          style={styles.ImageBackground_7_2460}
        />
        <View style={styles.View_7_2461} />
        <View style={styles.View_8_21}>
          <View style={styles.View_7_2462} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f43/a786/676d3ac4219bc15172341a8c407ed7cb"
          }}
          style={styles.ImageBackground_7_2464}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bec/eb73/bd55e0e53f289adf6bae404c9c8b0cf5"
          }}
          style={styles.ImageBackground_7_2465}
        />
        <View style={styles.View_7_2466}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1f/8c13/084b07cc68d2c0f62be3cedabd5f1aac"
            }}
            style={styles.ImageBackground_7_2467}
          />
          <View style={styles.View_7_2468}>
            <View style={styles.View_7_2469}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34bf/ca20/c6a4d79f7369dbcee516a83f1452a136"
                }}
                style={styles.ImageBackground_7_2470}
              />
              <View style={styles.View_7_2471} />
              <View style={styles.View_7_2472} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/6ba9/3f05af42afe32c8a27381414da280f0a"
          }}
          style={styles.ImageBackground_7_2473}
        />
      </View>
      <View style={styles.View_7_2474}>
        <View style={styles.View_7_2475}>
          <Text style={styles.Text_7_2475}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4a1/a0f6/6892d95e8f30c328de1f28c26cac58eb"
          }}
          style={styles.ImageBackground_7_2476}
        />
      </View>
      <View style={styles.View_7_2477}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb82/385e/eb6f64bf03169136908730bea60a2761"
          }}
          style={styles.ImageBackground_7_2478}
        />
        <View style={styles.View_7_2479}>
          <Text style={styles.Text_7_2479}>Progress</Text>
        </View>
      </View>
      <View style={styles.View_7_2480}>
        <View style={styles.View_7_2481}>
          <Text style={styles.Text_7_2481}>Messages</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2839/52b2/a12ccd6a164aa8f8f3a3c956f8340c40"
          }}
          style={styles.ImageBackground_7_2482}
        />
      </View>
      <View style={styles.View_7_2483}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8449/7e95/c09f3430d4a2053780cc57e34c862389"
          }}
          style={styles.ImageBackground_7_2484}
        />
        <View style={styles.View_7_2485}>
          <Text style={styles.Text_7_2485}>Appointments</Text>
        </View>
      </View>
      <View style={styles.View_7_2486}>
        <View style={styles.View_7_2487}>
          <View style={styles.View_7_2488}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f78b/ce17/880e8eceebe21ea6132a7ffd2f810431"
              }}
              style={styles.ImageBackground_7_2489}
            />
            <View style={styles.View_7_2490} />
            <View style={styles.View_7_2491} />
          </View>
        </View>
        <View style={styles.View_7_2492}>
          <Text style={styles.Text_7_2492}>More</Text>
        </View>
      </View>
      <View style={styles.View_7_2667}>
        <View style={styles.View_7_2668}>
          <View style={styles.View_7_2669} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
            }}
            style={styles.ImageBackground_7_2670}
          />
          <View style={styles.View_7_2671}>
            <Text style={styles.Text_7_2671}>Notes regarding patient</Text>
          </View>
          <View style={styles.View_7_2672} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5caa/92c3/2cf2b797fbbb4d79f974dc53e37bbaf1"
            }}
            style={styles.ImageBackground_7_2673}
          />
          <View style={styles.View_7_2674}>
            <Text style={styles.Text_7_2674}>Notes</Text>
          </View>
        </View>
        <View style={styles.View_7_2803}>
          <View style={styles.View_7_2804} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
            }}
            style={styles.ImageBackground_7_2805}
          />
          <View style={styles.View_7_2806}>
            <Text style={styles.Text_7_2806}>Lorem ipsum dolor</Text>
          </View>
          <View style={styles.View_7_2807} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5caa/92c3/2cf2b797fbbb4d79f974dc53e37bbaf1"
            }}
            style={styles.ImageBackground_7_2808}
          />
          <View style={styles.View_7_2809}>
            <Text style={styles.Text_7_2809}>RPM Daily Plan</Text>
          </View>
        </View>
        <View style={styles.View_7_2810}>
          <View style={styles.View_7_2811} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
            }}
            style={styles.ImageBackground_7_2812}
          />
          <View style={styles.View_7_2813}>
            <Text style={styles.Text_7_2813}>Lorem ipsum dolor</Text>
          </View>
          <View style={styles.View_7_2814} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5caa/92c3/2cf2b797fbbb4d79f974dc53e37bbaf1"
            }}
            style={styles.ImageBackground_7_2815}
          />
          <View style={styles.View_7_2816}>
            <Text style={styles.Text_7_2816}>RPM Goals / Thresholds</Text>
          </View>
        </View>
        <View style={styles.View_7_2675}>
          <View style={styles.View_7_2676} />
          <View style={styles.View_7_2855}>
            <View style={styles.View_7_2856} />
            <View style={styles.View_7_2857}>
              <Text style={styles.Text_7_2857}>1</Text>
            </View>
          </View>
          <View style={styles.View_7_2858}>
            <View style={styles.View_7_2859} />
            <View style={styles.View_7_2860}>
              <Text style={styles.Text_7_2860}>2</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
            }}
            style={styles.ImageBackground_7_2677}
          />
          <View style={styles.View_7_2678}>
            <Text style={styles.Text_7_2678}>Vital Alerts</Text>
          </View>
          <View style={styles.View_7_2679} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8355/7c28/cd4c8c809fa616f0a8e7a894a1d13873"
            }}
            style={styles.ImageBackground_7_2680}
          />
          <View style={styles.View_7_2681}>
            <Text style={styles.Text_7_2681}>Alerts</Text>
          </View>
        </View>
        <View style={styles.View_7_2682}>
          <View style={styles.View_7_2683} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
            }}
            style={styles.ImageBackground_7_2684}
          />
          <View style={styles.View_7_2685}>
            <Text style={styles.Text_7_2685}>View patient vitals</Text>
          </View>
          <View style={styles.View_7_2686} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84c9/6a17/18150900ac0097a682d11418b83bbe5a"
            }}
            style={styles.ImageBackground_7_2687}
          />
          <View style={styles.View_7_2692}>
            <Text style={styles.Text_7_2692}>Vitals</Text>
          </View>
        </View>
        <View style={styles.View_7_2693}>
          <View style={styles.View_7_2694} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/992b/c743/5cc1e9fe63978c823c48e34e04cf779f"
            }}
            style={styles.ImageBackground_7_2695}
          />
          <View style={styles.View_7_2696}>
            <Text style={styles.Text_7_2696}>Direct messages</Text>
          </View>
          <View style={styles.View_7_2861}>
            <View style={styles.View_7_2862} />
            <View style={styles.View_7_2863}>
              <Text style={styles.Text_7_2863}>1</Text>
            </View>
          </View>
          <View style={styles.View_7_2697} />
          <View style={styles.View_7_2698}>
            <Text style={styles.Text_7_2698}>Messages</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ca1/2576/d705d2f46bd445e7f1cb988468fbed6a"
            }}
            style={styles.ImageBackground_7_2699}
          />
        </View>
      </View>
      <View style={styles.View_7_2824}>
        <View style={styles.View_7_2825} />
        <View style={styles.View_7_2836}>
          <View style={styles.View_7_2837} />
          <View style={styles.View_7_2838}>
            <Text style={styles.Text_7_2838}>#1518916816468</Text>
          </View>
        </View>
        <View style={styles.View_7_2839}>
          <View style={styles.View_7_2840} />
          <View style={styles.View_7_2841}>
            <Text style={styles.Text_7_2841}>Aug 28, 1982</Text>
          </View>
        </View>
        <View style={styles.View_7_2830}>
          <View style={styles.View_7_2831}>
            <Text style={styles.Text_7_2831}>James Sawyer</Text>
          </View>
          <View style={styles.View_7_2832}>
            <Text style={styles.Text_7_2832}>Monitoring Oct - 14m 8s</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/755d/df10/a38393607b6eb5b42798a5bb88c7f70b"
          }}
          style={styles.ImageBackground_7_2835}
        />
      </View>
      <View style={styles.View_7_2854}>
        <View style={styles.View_7_2850}>
          <Text style={styles.Text_7_2850}>Patient details</Text>
        </View>
        <View style={styles.View_7_2851}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b357/a31b/40117c88e124bf242b30e1a81bce5f41"
            }}
            style={styles.ImageBackground_7_2852}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_7_2458: {
    width: 444,
    height: 920,
    top: -11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15
  },
  View_7_2459: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.42529296875,
    top: 2.125
  },
  ImageBackground_7_2460: {
    width: 413.1776428222656,
    height: 893.6680297851562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_7_2461: {
    width: 413.1776428222656,
    minWidth: 413.1776428222656,
    height: 893.6680297851562,
    minHeight: 893.6680297851562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 231, 238, 1)"
  },
  View_8_21: {
    width: 414,
    minWidth: 414,
    height: 909,
    minHeight: 909,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.42529296875,
    top: -2.125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_2462: {
    flexGrow: 1,
    width: 414,
    height: 909,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2464: {
    width: 879.253173828125,
    minWidth: 879.253173828125,
    height: 879.253173828125,
    minHeight: 879.253173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -367.80059814453125,
    top: -531.378173828125
  },
  ImageBackground_7_2465: {
    width: 128,
    minWidth: 128,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.57470703125,
    top: 55.875,
    resizeMode: "cover"
  },
  View_7_2466: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.57470703125,
    top: 58.875
  },
  ImageBackground_7_2467: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2468: {
    width: 19.940507888793945,
    minWidth: 19.940507888793945,
    height: 15.7278470993042,
    minHeight: 15.7278470993042,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.66668701171875,
    top: 17.5
  },
  View_7_2469: {
    width: 19.940507888793945,
    minWidth: 19.940507888793945,
    height: 15.7278470993042,
    minHeight: 15.7278470993042,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_7_2470: {
    width: 9.626453399658203,
    minWidth: 9.626453399658203,
    height: 3.525056838989258,
    minHeight: 3.525056838989258,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2471: {
    width: 19.940507888793945,
    minWidth: 19.940507888793945,
    height: 3.350980281829834,
    minHeight: 3.350980281829834,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.2755126953125,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2472: {
    width: 12.37686824798584,
    minWidth: 12.37686824798584,
    height: 3.350980281829834,
    minHeight: 3.350980281829834,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 12.3768310546875,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_7_2473: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 333.57470703125,
    top: 58.875
  },
  View_7_2474: {
    width: 37,
    minWidth: 37,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 827
  },
  View_7_2475: {
    width: 37,
    minWidth: 37,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_7_2475: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2476: {
    width: 26,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5
  },
  View_7_2477: {
    width: 54,
    minWidth: 54,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 826
  },
  ImageBackground_7_2478: {
    width: 24,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_7_2479: {
    width: 54,
    minWidth: 54,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2479: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2480: {
    width: 63,
    minWidth: 63,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162,
    top: 826
  },
  View_7_2481: {
    width: 63,
    minWidth: 63,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2481: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2482: {
    width: 24,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_7_2483: {
    width: 86,
    minWidth: 86,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 242,
    top: 826
  },
  ImageBackground_7_2484: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_7_2485: {
    width: 86,
    minWidth: 86,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_7_2485: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2486: {
    width: 32,
    minWidth: 32,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 350,
    top: 829
  },
  View_7_2487: {
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
  View_7_2488: {
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
  ImageBackground_7_2489: {
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
  View_7_2490: {
    width: 21.392915725708008,
    minWidth: 21.392915725708008,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.7325439453125,
    backgroundColor: "rgba(63, 64, 66, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2491: {
    width: 13.278362274169922,
    minWidth: 13.278362274169922,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 13.2783203125,
    backgroundColor: "rgba(63, 64, 66, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_7_2492: {
    width: 32,
    minWidth: 32,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_7_2492: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2667: {
    width: 394,
    minWidth: 394,
    height: 470,
    minHeight: 470,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 332
  },
  View_7_2668: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 240
  },
  View_7_2669: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_2670: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_2671: {
    width: 118,
    minWidth: 118,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 40
  },
  Text_7_2671: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2672: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_2673: {
    width: 24,
    height: 22,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_7_2674: {
    width: 42,
    minWidth: 42,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_2674: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2803: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 320
  },
  View_7_2804: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_2805: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_2806: {
    width: 93,
    minWidth: 93,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 40
  },
  Text_7_2806: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2807: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_2808: {
    width: 24,
    height: 22,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_7_2809: {
    width: 104,
    minWidth: 104,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_2809: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2810: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 400
  },
  View_7_2811: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_2812: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_2813: {
    width: 93,
    minWidth: 93,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 40
  },
  Text_7_2813: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2814: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_2815: {
    width: 24,
    height: 22,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_7_2816: {
    width: 166,
    minWidth: 166,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_2816: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2675: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  View_7_2676: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_2855: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 18
  },
  View_7_2856: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(245, 72, 92, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_2857: {
    width: 6,
    minWidth: 6,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 7
  },
  Text_7_2857: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2858: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319,
    top: 18
  },
  View_7_2859: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(252, 204, 162, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_2860: {
    width: 9,
    minWidth: 9,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 7
  },
  Text_7_2860: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2677: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_2678: {
    width: 54,
    minWidth: 54,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 40
  },
  Text_7_2678: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2679: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_2680: {
    width: 24,
    height: 22,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23
  },
  View_7_2681: {
    width: 41,
    minWidth: 41,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_2681: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2682: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 80
  },
  View_7_2683: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_2684: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_2685: {
    width: 91,
    minWidth: 91,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 40
  },
  Text_7_2685: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2686: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  ImageBackground_7_2687: {
    width: 21,
    height: 21,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  View_7_2692: {
    width: 39,
    minWidth: 39,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_2692: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2693: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_7_2694: {
    width: 394,
    minWidth: 394,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_7_2695: {
    width: 6.74868631362915,
    height: 9,
    top: 32.001220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 363
  },
  View_7_2696: {
    width: 84,
    minWidth: 84,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 39
  },
  Text_7_2696: {
    color: "rgba(174, 174, 174, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2861: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319,
    top: 18
  },
  View_7_2862: {
    width: 34,
    minWidth: 34,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(107, 125, 140, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_2863: {
    width: 6,
    minWidth: 6,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 7
  },
  Text_7_2863: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2697: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_7_2698: {
    width: 71,
    minWidth: 71,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77,
    top: 16
  },
  Text_7_2698: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2699: {
    width: 22,
    height: 22,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  View_7_2824: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 187
  },
  View_7_2825: {
    width: 394,
    minWidth: 394,
    height: 125,
    minHeight: 125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_2836: {
    width: 104,
    minWidth: 104,
    height: 20.000011444091797,
    minHeight: 20.000011444091797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 75
  },
  View_7_2837: {
    width: 104,
    minWidth: 104,
    height: 20.000011444091797,
    minHeight: 20.000011444091797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_2838: {
    width: 82,
    minWidth: 82,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 3
  },
  Text_7_2838: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2839: {
    width: 86,
    minWidth: 86,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 241,
    top: 75
  },
  View_7_2840: {
    width: 86,
    minWidth: 86,
    height: 20.00000762939453,
    minHeight: 20.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_2841: {
    width: 65,
    minWidth: 65,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 3
  },
  Text_7_2841: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2830: {
    width: 172,
    minWidth: 172,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 22
  },
  View_7_2831: {
    width: 101,
    minWidth: 101,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_7_2831: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2832: {
    width: 172,
    minWidth: 172,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 24
  },
  Text_7_2832: {
    color: "rgba(63, 64, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_2835: {
    width: 80,
    minWidth: 80,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 23,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_7_2854: {
    width: 154,
    minWidth: 154,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 142
  },
  View_7_2850: {
    width: 109,
    minWidth: 109,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 1
  },
  Text_7_2850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_2851: {
    width: 25,
    height: 25,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_7_2852: {
    width: 25,
    height: 25,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
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
