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
        style={styles.ImageBackground_2_369}
      />
      <View style={styles.View_2_370}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fed/a8bc/102157f6c7d16a0fd81f423cf643b4d8"
          }}
          style={styles.ImageBackground_2_371}
        />
        <View style={styles.View_1_4} />
        <View style={styles.View_2_9} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2daf/8f46/2ccb4d85f893ee1a2d032062a6ea7260"
          }}
          style={styles.ImageBackground_2_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1522/4224/756f70c48c8c557f29f228db9546401a"
          }}
          style={styles.ImageBackground_2_451}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/1272/6c1d39ecc9a339fa37e698bb2e0fd6c6"
          }}
          style={styles.ImageBackground_2_10}
        />
        <View style={styles.View_2_11}>
          <View style={styles.View_2_12}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8e9/0bda/ad10637ccb2842e4ebd64fdf776ce05a"
              }}
              style={styles.ImageBackground_2_16}
            />
            <View style={styles.View_2_14} />
            <View style={styles.View_2_15} />
          </View>
        </View>
        <View style={styles.View_2_535} />
        <View style={styles.View_2_581}>
          <View style={styles.View_2_17} />
          <View style={styles.View_2_559} />
          <View style={styles.View_2_467}>
            <View style={styles.View_2_465} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
              }}
              style={styles.ImageBackground_2_565}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
              }}
              style={styles.ImageBackground_2_525}
            />
            <View style={styles.View_2_454}>
              <Text style={styles.Text_2_454}>Take Vitals</Text>
            </View>
          </View>
          <View style={styles.View_2_471}>
            <View style={styles.View_2_521}>
              <View style={styles.View_2_472} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
                }}
                style={styles.ImageBackground_2_530}
              />
              <View style={styles.View_2_473}>
                <Text style={styles.Text_2_473}>James Sawyer</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_2_520}>
            <View style={styles.View_2_468} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a4/9f9a/f904f65432d05faae2e747d2391933c7"
              }}
              style={styles.ImageBackground_2_567}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c00b/95dd/855ea5597ab062a14551c06f7ca9daed"
              }}
              style={styles.ImageBackground_2_526}
            />
            <View style={styles.View_2_455}>
              <Text style={styles.Text_2_455}>Medication</Text>
            </View>
          </View>
          <View style={styles.View_2_461}>
            <Text style={styles.Text_2_461}>9:00 AM</Text>
          </View>
          <View style={styles.View_2_462}>
            <Text style={styles.Text_2_462}>10:00 AM</Text>
          </View>
          <View style={styles.View_2_464}>
            <Text style={styles.Text_2_464}>11:00 AM</Text>
          </View>
          <View style={styles.View_2_501} />
          <View style={styles.View_2_502} />
          <View style={styles.View_2_503} />
          <View style={styles.View_2_561} />
          <View style={styles.View_2_534} />
        </View>
        <View style={styles.View_2_569}>
          <Text style={styles.Text_2_569}>All Services</Text>
        </View>
        <View style={styles.View_2_580}>
          <Text style={styles.Text_2_580}>Today’s Progress</Text>
        </View>
        <View style={styles.View_2_585}>
          <View style={styles.View_2_586}>
            <View style={styles.View_2_587} />
            <View style={styles.View_2_588} />
            <View style={styles.View_2_589} />
          </View>
        </View>
      </View>
      <View style={styles.View_7_452}>
        <View style={styles.View_2_579} />
        <View style={styles.View_2_717}>
          <Text style={styles.Text_2_717}>98</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/197e/6076/ad76023f05c13b6c561f252fad066002"
          }}
          style={styles.ImageBackground_2_724}
        />
        <View style={styles.View_2_690}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7410/0793/0cef7579bf480fdfe55cde52fc885645"
            }}
            style={styles.ImageBackground_2_691}
          />
          <View style={styles.View_2_700}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4836/bfbc/97fee081151da251bda49bdf187e0362"
              }}
              style={styles.ImageBackground_2_701}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8a5/37dd/5894da93134402405530aafa64efc8bd"
              }}
              style={styles.ImageBackground_2_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4289/b189/723b51b97e5549f3c7db350a3131519e"
              }}
              style={styles.ImageBackground_2_703}
            />
            <View style={styles.View_2_704}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d06/9d92/92cc0c91d13bb793db3785c3fe4cec94"
                }}
                style={styles.ImageBackground_2_705}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2932/5dd4/7ce21c2be9cf8edc2c860b2e4354ffc8"
                }}
                style={styles.ImageBackground_2_710}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5341/e82f/c91b371f1fafca1bb177c790756ed259"
                }}
                style={styles.ImageBackground_2_711}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ad/30e6/80430256a628655fb636a9b5b0339b21"
              }}
              style={styles.ImageBackground_2_712}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e39c/ef3f/b09fb6d4be1ee0cb20e1ca224d544faa"
              }}
              style={styles.ImageBackground_2_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b9f/f733/c68bffd72bdd151c1a724b246765d6da"
              }}
              style={styles.ImageBackground_2_714}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9a/2df3/977f988073885a3f8ea3735bcd2d3482"
              }}
              style={styles.ImageBackground_2_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1381/56ee/1121b45866454425cb80ad4877c7bea9"
              }}
              style={styles.ImageBackground_2_716}
            />
          </View>
        </View>
        <View style={styles.View_2_552}>
          <Text style={styles.Text_2_552}>Oxygen level</Text>
        </View>
        <View style={styles.View_2_745}>
          <View style={styles.View_2_746} />
          <View style={styles.View_2_747} />
          <View style={styles.View_2_748} />
          <View style={styles.View_2_749} />
          <View style={styles.View_2_750} />
          <View style={styles.View_2_751} />
        </View>
      </View>
      <View style={styles.View_2_492}>
        <Text style={styles.Text_2_492}>Your daily plan</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
        }}
        style={styles.ImageBackground_2_542}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0831/2929/05bc77edba7c65a26765d0ac180bf4f4"
        }}
        style={styles.ImageBackground_7_422}
      />
      <View style={styles.View_2_756}>
        <View style={styles.View_2_752} />
        <View style={styles.View_2_725}>
          <Text style={styles.Text_2_725}>Contact provider</Text>
        </View>
      </View>
      <View style={styles.View_2_757}>
        <View style={styles.View_2_753} />
        <View style={styles.View_2_726}>
          <Text style={styles.Text_2_726}>Daily plan</Text>
        </View>
      </View>
      <View style={styles.View_2_758}>
        <View style={styles.View_2_754} />
        <View style={styles.View_2_727}>
          <Text style={styles.Text_2_727}>Messages</Text>
        </View>
      </View>
      <View style={styles.View_7_6}>
        <View style={styles.View_7_7} />
        <View style={styles.View_7_8}>
          <Text style={styles.Text_7_8}>Emergency</Text>
        </View>
      </View>
      <View style={styles.View_2_759}>
        <View style={styles.View_2_755} />
        <View style={styles.View_2_728}>
          <Text style={styles.Text_2_728}>Add a vital</Text>
        </View>
      </View>
      <View style={styles.View_7_9}>
        <View style={styles.View_2_729}>
          <Text style={styles.Text_2_729}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5bb/75ba/76b9f1c21957193ce99e5488e3485f6e"
          }}
          style={styles.ImageBackground_2_767}
        />
      </View>
      <View style={styles.View_7_10}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d6/881f/8f42ef39f8a5acb50205802452acf77c"
          }}
          style={styles.ImageBackground_2_770}
        />
        <View style={styles.View_2_730}>
          <Text style={styles.Text_2_730}>Progress</Text>
        </View>
      </View>
      <View style={styles.View_7_11}>
        <View style={styles.View_2_731}>
          <Text style={styles.Text_2_731}>Messages</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aed/042a/fe1851f0f493290797b3346d7b6b5bf4"
          }}
          style={styles.ImageBackground_2_773}
        />
      </View>
      <View style={styles.View_7_12}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f6/58a2/ecc020eb6ddae17ce595147ff2867c16"
          }}
          style={styles.ImageBackground_2_778}
        />
        <View style={styles.View_2_732}>
          <Text style={styles.Text_2_732}>Appointments</Text>
        </View>
      </View>
      <View style={styles.View_7_14}>
        <View style={styles.View_2_779}>
          <View style={styles.View_2_780}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c04/e470/748a0e6abd8db00ed7034c133b395edc"
              }}
              style={styles.ImageBackground_2_781}
            />
            <View style={styles.View_2_782} />
            <View style={styles.View_2_783} />
          </View>
        </View>
        <View style={styles.View_2_733}>
          <Text style={styles.Text_2_733}>More</Text>
        </View>
      </View>
      <View style={styles.View_7_451}>
        <View style={styles.View_2_577} />
        <View style={styles.View_2_598}>
          <View style={styles.View_2_599}>
            <View style={styles.View_2_600}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46b1/a8e3/c229c85f9aae1d7442eed83e856b89ad"
                }}
                style={styles.ImageBackground_2_601}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc0/f15b/34d5b4b7eb2678cb7dee19e8985556c2"
                }}
                style={styles.ImageBackground_2_602}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/436b/b098/064b4be42bfce1b85cb36375746ddb32"
                }}
                style={styles.ImageBackground_2_603}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a754/28ad/ee43f390f34aebcedf725fc7b53d6606"
                }}
                style={styles.ImageBackground_2_604}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2080/d370/71fa45b6a73a8cdf1fe8aa6aa458964d"
                }}
                style={styles.ImageBackground_2_605}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b27/76a9/45ad2fac42cfb8e39e8979cd60323a66"
                }}
                style={styles.ImageBackground_2_606}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb3c/49a7/e926de31da9a102fbcceede46f8bd848"
                }}
                style={styles.ImageBackground_2_607}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a65/a0dc/7892c890ce624b9a0a6b433f2d6154c9"
                }}
                style={styles.ImageBackground_2_608}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/976c/69ab/646000ebd11f6fc4be7d79aab090672d"
                }}
                style={styles.ImageBackground_2_609}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ad9/bbb6/06ed3a602348ed79307b44cb1f2f2f7f"
                }}
                style={styles.ImageBackground_2_613}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be32/c25b/165c3805d2b4f80505c4f2e92798f636"
                }}
                style={styles.ImageBackground_2_614}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7804/4b7b/72967f753880194c65b2cb37b73ac8e0"
                }}
                style={styles.ImageBackground_2_615}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8816/e0b7/55b9ba3640bfd9a94c9e7943ef529bd2"
                }}
                style={styles.ImageBackground_2_618}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/699d/7c8f/cec119f27842d69c2ad969abde2a94ca"
                }}
                style={styles.ImageBackground_2_619}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f681/b45a/effbe58bc422d799d9bcb61ecec020c0"
              }}
              style={styles.ImageBackground_2_620}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4c/a301/8eabb73b440e4573a2a0cc6d921c6658"
              }}
              style={styles.ImageBackground_2_621}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30fb/5e59/0e6dfbb04b3820510cfc696c1ae4f3c0"
              }}
              style={styles.ImageBackground_2_622}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4e9/d1fa/b87b349a98dedb315abef776bec38350"
              }}
              style={styles.ImageBackground_2_623}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/661a/b17d/ea79670e9c43cf0e188a5ec843321141"
              }}
              style={styles.ImageBackground_2_624}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fdc/5781/5758245a396e5656834f172d5e8fb5e1"
              }}
              style={styles.ImageBackground_2_625}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca4d/bd36/cd6ac68652ae274b31e373936e323ed5"
              }}
              style={styles.ImageBackground_2_626}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db88/c292/72aec0da58a0efda1b2456284f1da614"
              }}
              style={styles.ImageBackground_2_627}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ddd/0371/8465cccb2e3cbaa18c9f8f2c98549288"
              }}
              style={styles.ImageBackground_2_628}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46f4/b4df/bf2ec4e07439fb667429a7fc2136e037"
              }}
              style={styles.ImageBackground_2_629}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/880e/578c/149822bd6ecd0375cbb0cbd6e445a957"
              }}
              style={styles.ImageBackground_2_630}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c600/f22c/24e5ccef0c9c93c69a8c01b2f7489432"
              }}
              style={styles.ImageBackground_2_631}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b2a/e4af/c67279820c6e5f2f797c80cccbd8dbf2"
              }}
              style={styles.ImageBackground_2_632}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c423/483d/39700a9a12c357541b7a4558db4533e0"
              }}
              style={styles.ImageBackground_2_633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f19/5f4c/f1b2420e56eaca79977c4e047d0e5866"
              }}
              style={styles.ImageBackground_2_634}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f30/a9e3/97b5484b991085952a7ace58aad72f51"
              }}
              style={styles.ImageBackground_2_635}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d45/7723/231baf92b32dddfc17e2e1741cb38d02"
              }}
              style={styles.ImageBackground_2_636}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b43/c028/923961bc1f099a648ba761dd9c25bbf4"
              }}
              style={styles.ImageBackground_2_637}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10c3/33b4/7802d56399feefd3adffa70cf40854b4"
              }}
              style={styles.ImageBackground_2_638}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ece5/a4fd/650d16476d20c1e6064595c3fe8654d8"
              }}
              style={styles.ImageBackground_2_639}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6294/e945/0b66c0c3959f2e34a143eff89a46c8af"
              }}
              style={styles.ImageBackground_2_640}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a26a/fff6/76906147a3c5e6641a1bbf65ea269979"
              }}
              style={styles.ImageBackground_2_641}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea6e/8084/570ef649836a5b8797d5665f7885f60d"
              }}
              style={styles.ImageBackground_2_642}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03a7/b63e/6d44fac853c478543067f6eab1fd8f39"
              }}
              style={styles.ImageBackground_2_643}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9bd/ff5d/ff75c731893f9778dd57e7dcfbc70ab8"
              }}
              style={styles.ImageBackground_2_644}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d26b/b663/a3120c2d967b7aad58214bf4af2f42a4"
              }}
              style={styles.ImageBackground_2_645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/985b/01f5/8bd23c05abb284f1226e46e8e6f934a2"
              }}
              style={styles.ImageBackground_2_646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d115/f07d/2f2e5306565c25882973ba875eca172a"
              }}
              style={styles.ImageBackground_2_647}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0771/bcb6/f58e1d037cf23e584706c56fc2706f02"
              }}
              style={styles.ImageBackground_2_648}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0618/1623/1e5c01b1f6c01c7c93f168e64673a92d"
            }}
            style={styles.ImageBackground_2_649}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b84/8734/91689175c8a50bb2194dc599816f8c58"
            }}
            style={styles.ImageBackground_2_650}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/896a/a5ac/4b594f2b41cda953fe4e1b3a394f9df1"
            }}
            style={styles.ImageBackground_2_651}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b2/e9df/d6042d6da72345cea2b771100ae1b912"
            }}
            style={styles.ImageBackground_2_652}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a03c/b768/3673636de366f9665561fa20f6df8e41"
            }}
            style={styles.ImageBackground_2_653}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/859a/f2ed/52bac41d56422cfaa69d4ed9b2a39d0e"
            }}
            style={styles.ImageBackground_2_654}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f454/aa12/f65ba9b07fb45e77d85f9724031ea617"
            }}
            style={styles.ImageBackground_2_655}
          />
        </View>
        <View style={styles.View_2_551}>
          <Text style={styles.Text_2_551}>Heart rate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e41b/4ceb/7af8db0037bf0c970dd030bc61e09ff8"
          }}
          style={styles.ImageBackground_2_743}
        />
        <View style={styles.View_2_656}>
          <Text style={styles.Text_2_656}>102</Text>
        </View>
        <View style={styles.View_2_744}>
          <View style={styles.View_2_734} />
          <View style={styles.View_2_736} />
          <View style={styles.View_2_739} />
          <View style={styles.View_2_740} />
          <View style={styles.View_2_741} />
          <View style={styles.View_2_742} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_2_369: {
    width: 444,
    height: 920,
    top: -11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15
  },
  View_2_370: {
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
  ImageBackground_2_371: {
    width: 413.1776428222656,
    height: 893.6680297851562,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_4: {
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
  View_2_9: {
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
  ImageBackground_2_7: {
    width: 128,
    minWidth: 128,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.57470703125,
    top: 55.874969482421875,
    resizeMode: "cover"
  },
  ImageBackground_2_451: {
    width: 60.000003814697266,
    minWidth: 60.000003814697266,
    height: 60.000003814697266,
    minHeight: 60.000003814697266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323.57470703125,
    top: 33.875
  },
  ImageBackground_2_10: {
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
  View_2_11: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 18.873416900634766,
    minHeight: 18.873416900634766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.57470703125,
    top: 54.874969482421875
  },
  View_2_12: {
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
  ImageBackground_2_16: {
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
  View_2_14: {
    width: 23.92860984802246,
    minWidth: 23.92860984802246,
    height: 4.021176338195801,
    minHeight: 4.021176338195801,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 7.53057861328125,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_15: {
    width: 14.852241516113281,
    minWidth: 14.852241516113281,
    height: 4.021176338195801,
    minHeight: 4.021176338195801,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 14.85223388671875,
    backgroundColor: "rgba(47, 43, 102, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_535: {
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
  View_2_581: {
    width: 393,
    minWidth: 393,
    height: 220,
    minHeight: 220,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.57470703125,
    top: 195.875
  },
  View_2_17: {
    width: 393,
    minWidth: 393,
    height: 220,
    minHeight: 220,
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
  View_2_559: {
    width: 1.0000174045562744,
    minWidth: 1.0000174045562744,
    height: 200,
    minHeight: 200,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 20,
    backgroundColor: "rgba(198, 211, 222, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_2_467: {
    width: 278,
    minWidth: 278,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 31
  },
  View_2_465: {
    width: 278,
    minWidth: 278,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(238, 242, 244, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_2_565: {
    width: 16,
    height: 16,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 210
  },
  ImageBackground_2_525: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239,
    top: 17
  },
  View_2_454: {
    width: 76,
    minWidth: 76,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 9
  },
  Text_2_454: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_471: {
    width: 278,
    minWidth: 278,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 151
  },
  View_2_521: {
    width: 278,
    minWidth: 278,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_472: {
    width: 278,
    minWidth: 278,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(238, 242, 244, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_2_530: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239,
    top: 17
  },
  View_2_473: {
    width: 101,
    minWidth: 101,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  Text_2_473: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_520: {
    width: 278,
    minWidth: 278,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 90
  },
  View_2_468: {
    width: 278,
    minWidth: 278,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(238, 242, 244, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_2_567: {
    width: 16,
    height: 16,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 210
  },
  ImageBackground_2_526: {
    width: 19,
    minWidth: 19,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239,
    top: 18
  },
  View_2_455: {
    width: 77,
    minWidth: 77,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  Text_2_455: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_461: {
    width: 29,
    minWidth: 29,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 36
  },
  Text_2_461: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_462: {
    width: 34,
    minWidth: 34,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 95
  },
  Text_2_462: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_464: {
    width: 31,
    minWidth: 31,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 156
  },
  Text_2_464: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_501: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 43,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(249, 131, 112, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_2_502: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 103,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 157, 194, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_2_503: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 163,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(81, 195, 153, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_2_561: {
    width: 11,
    minWidth: 11,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 19,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(198, 211, 222, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_2_534: {
    width: 11,
    minWidth: 11,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 133,
    backgroundColor: "rgba(43, 46, 53, 1)",
    borderColor: "rgba(234, 238, 241, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  View_2_569: {
    width: 92,
    minWidth: 92,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.57470703125,
    top: 598.875
  },
  Text_2_569: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_580: {
    width: 133,
    minWidth: 133,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.57470703125,
    top: 435.875
  },
  Text_2_580: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_585: {
    width: 42,
    minWidth: 42,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 181.57470703125,
    top: 444.875
  },
  View_2_586: {
    width: 42,
    minWidth: 42,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_587: {
    width: 12,
    minWidth: 12,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_2_588: {
    width: 12,
    minWidth: 12,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_2_589: {
    width: 12,
    minWidth: 12,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_452: {
    width: 194,
    minWidth: 194,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 209,
    top: 479.9999694824219
  },
  View_2_579: {
    width: 194,
    minWidth: 194,
    height: 100,
    minHeight: 100,
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
  View_2_717: {
    width: 37,
    minWidth: 37,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 42.000030517578125
  },
  Text_2_717: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_724: {
    width: 15,
    height: 15,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 116
  },
  View_2_690: {
    width: 45.000431060791016,
    height: 61.99174118041992,
    top: 19.004669189453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131.99920654296875
  },
  ImageBackground_2_691: {
    width: 26.427024841308594,
    height: 36.57891082763672,
    top: 13.744239807128906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.57342529296875
  },
  View_2_700: {
    width: 31.157243728637695,
    height: 61.99174118041992,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_2_701: {
    width: 25.60869789123535,
    height: 18.392494201660156,
    top: 43.599266052246094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_2_702: {
    width: 24.08666229248047,
    height: 15.386974334716797,
    top: 46.60477066040039,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.00531005859375
  },
  ImageBackground_2_703: {
    width: 13.481243133544922,
    height: 15.130197525024414,
    top: 18.07001495361328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.684814453125
  },
  View_2_704: {
    width: 13.640764236450195,
    height: 27.89781379699707,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.5164794921875
  },
  ImageBackground_2_705: {
    width: 13.640764236450195,
    height: 26.92555809020996,
    top: 0.9722557067871094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_2_710: {
    width: 3.3772716522216797,
    height: 1.955190658569336,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.4122314453125
  },
  ImageBackground_2_711: {
    width: 2.3448715209960938,
    height: 1.361328125,
    top: 0.2942657470703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.92578125
  },
  ImageBackground_2_712: {
    width: 24.733055114746094,
    height: 30.769866943359375,
    top: 18.926788330078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.8489990234375
  },
  ImageBackground_2_713: {
    width: 24.72764778137207,
    height: 8.979244232177734,
    top: 41.208984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.85968017578125
  },
  ImageBackground_2_714: {
    width: 24.732824325561523,
    height: 8.981063842773438,
    top: 40.71603775024414,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.8492431640625
  },
  ImageBackground_2_715: {
    width: 14.212121963500977,
    height: 29.227649688720703,
    top: 18.46080780029297,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.85430908203125
  },
  ImageBackground_2_716: {
    width: 9.852630615234375,
    height: 11.444356918334961,
    top: 18.738304138183594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.7152099609375
  },
  View_2_552: {
    width: 86,
    minWidth: 86,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 15
  },
  Text_2_552: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_745: {
    width: 30.073171615600586,
    minWidth: 30.073171615600586,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66,
    top: 56.000030517578125
  },
  View_2_746: {
    width: 3,
    minWidth: 3,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_747: {
    width: 3,
    minWidth: 3,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.92681884765625,
    top: 4,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_748: {
    width: 3,
    minWidth: 3,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.46343994140625,
    top: 12,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_749: {
    width: 3,
    minWidth: 3,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.3902587890625,
    top: 6,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_750: {
    width: 3,
    minWidth: 3,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.95123291015625,
    top: 8,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_751: {
    width: 3,
    minWidth: 3,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.07318115234375,
    top: 0,
    backgroundColor: "rgba(54, 182, 33, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_492: {
    width: 113,
    minWidth: 113,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 156
  },
  Text_2_492: {
    color: "rgba(41, 43, 47, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_542: {
    width: 25,
    height: 25,
    top: 155,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 359
  },
  ImageBackground_7_422: {
    width: 25,
    height: 25,
    top: 437,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 359
  },
  View_2_756: {
    width: 194,
    minWidth: 194,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 642
  },
  View_2_752: {
    width: 194,
    minWidth: 194,
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
  View_2_725: {
    width: 143,
    minWidth: 143,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.5,
    top: 15.5
  },
  Text_2_725: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_757: {
    width: 194,
    minWidth: 194,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 209,
    top: 642
  },
  View_2_753: {
    width: 194,
    minWidth: 194,
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
  View_2_726: {
    width: 85,
    minWidth: 85,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.5,
    top: 15.5
  },
  Text_2_726: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_758: {
    width: 194,
    minWidth: 194,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 697
  },
  View_2_754: {
    width: 194,
    minWidth: 194,
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
  View_2_727: {
    width: 79,
    minWidth: 79,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57.5,
    top: 15.5
  },
  Text_2_727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_6: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 752
  },
  View_7_7: {
    width: 393,
    minWidth: 393,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(66, 218, 180, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_8: {
    width: 90,
    minWidth: 90,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 151,
    top: 16
  },
  Text_7_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2_759: {
    width: 194,
    minWidth: 194,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 209,
    top: 697
  },
  View_2_755: {
    width: 194,
    minWidth: 194,
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
  View_2_728: {
    width: 88,
    minWidth: 88,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53.5,
    top: 15.5
  },
  Text_2_728: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_7_9: {
    width: 36,
    minWidth: 36,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 827
  },
  View_2_729: {
    width: 36,
    minWidth: 36,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30
  },
  Text_2_729: {
    color: "rgba(47, 43, 102, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_767: {
    width: 26,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5
  },
  View_7_10: {
    width: 55,
    minWidth: 55,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 826
  },
  ImageBackground_2_770: {
    width: 24,
    height: 23,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_2_730: {
    width: 55,
    minWidth: 55,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_2_730: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_11: {
    width: 60,
    minWidth: 60,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162,
    top: 826
  },
  View_2_731: {
    width: 60,
    minWidth: 60,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_2_731: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_773: {
    width: 24,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18
  },
  View_7_12: {
    width: 88,
    minWidth: 88,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 242,
    top: 826
  },
  ImageBackground_2_778: {
    width: 20,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34
  },
  View_2_732: {
    width: 88,
    minWidth: 88,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 31
  },
  Text_2_732: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_14: {
    width: 31,
    minWidth: 31,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 350,
    top: 829
  },
  View_2_779: {
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
  View_2_780: {
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
  ImageBackground_2_781: {
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
  View_2_782: {
    width: 21.392915725708008,
    minWidth: 21.392915725708008,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.7325439453125,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_783: {
    width: 13.278362274169922,
    minWidth: 13.278362274169922,
    height: 3.59505558013916,
    minHeight: 3.59505558013916,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 13.27838134765625,
    backgroundColor: "rgba(151, 164, 176, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_733: {
    width: 31,
    minWidth: 31,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 28
  },
  Text_2_733: {
    color: "rgba(151, 164, 176, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_451: {
    width: 194,
    minWidth: 194,
    height: 100,
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 479.9999694824219
  },
  View_2_577: {
    width: 194,
    minWidth: 194,
    height: 100,
    minHeight: 100,
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
  View_2_598: {
    width: 35.99852752685547,
    height: 58.99846267700195,
    top: 19.00031280517578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138.999267578125
  },
  View_2_599: {
    width: 35.99851989746094,
    height: 58.990081787109375,
    top: 0.00836944580078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_2_600: {
    width: 35.99851989746094,
    height: 58.990081787109375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_2_601: {
    width: 26.018075942993164,
    height: 27.080810546875,
    top: 15.608016967773438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.30206298828125
  },
  ImageBackground_2_602: {
    width: 33.048404693603516,
    height: 35.70845413208008,
    top: 23.28162384033203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_2_603: {
    width: 24.97345733642578,
    height: 30.5682430267334,
    top: 18.827693939208984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.65057373046875
  },
  ImageBackground_2_604: {
    width: 32.947486877441406,
    height: 37.7140998840332,
    top: 19.707427978515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.84869384765625
  },
  ImageBackground_2_605: {
    width: 28.438396453857422,
    height: 36.211669921875,
    top: 20.39690399169922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.740966796875
  },
  ImageBackground_2_606: {
    width: 18.545135498046875,
    height: 13.714313507080078,
    top: 28.38306427001953,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.2999267578125
  },
  ImageBackground_2_607: {
    width: 19.92002296447754,
    height: 10.580635070800781,
    top: 17.713417053222656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.79425048828125
  },
  ImageBackground_2_608: {
    width: 10.630375862121582,
    height: 14.901554107666016,
    top: 5.135101318359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.18328857421875
  },
  ImageBackground_2_609: {
    width: 10.632356643676758,
    height: 14.88052749633789,
    top: 5.145038604736328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.17254638671875
  },
  ImageBackground_2_613: {
    width: 14.348342895507812,
    height: 14.69317626953125,
    top: 12.81753158569336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.650146484375
  },
  ImageBackground_2_614: {
    width: 20.804519653320312,
    height: 21.547473907470703,
    top: 2.9607467651367188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.49951171875
  },
  ImageBackground_2_615: {
    width: 20.794673919677734,
    height: 21.026203155517578,
    top: 3.478973388671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.5048828125
  },
  ImageBackground_2_618: {
    width: 4.898031234741211,
    height: 5.0214996337890625,
    top: 3.042613983154297,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.659423828125
  },
  ImageBackground_2_619: {
    width: 4.352991104125977,
    height: 4.728588104248047,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.82098388671875
  },
  ImageBackground_2_620: {
    width: 14.353736877441406,
    height: 14.922004699707031,
    top: 35.03676223754883,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.53948974609375
  },
  ImageBackground_2_621: {
    width: 8.517980575561523,
    height: 5.0208282470703125,
    top: 37.975677490234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.54815673828125
  },
  ImageBackground_2_622: {
    width: 1.6672935485839844,
    height: 7.671794891357422,
    top: 41.721866607666016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.85015869140625
  },
  ImageBackground_2_623: {
    width: 3.125762939453125,
    height: 6.927833557128906,
    top: 48.68136215209961,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.2269287109375
  },
  ImageBackground_2_624: {
    width: 5.015359878540039,
    height: 16.298606872558594,
    top: 23.30744171142578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.682373046875
  },
  ImageBackground_2_625: {
    width: 1.0329604148864746,
    height: 5.756477355957031,
    top: 33.427467346191406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.779052734375
  },
  ImageBackground_2_626: {
    width: 9.208879470825195,
    height: 6.044092178344727,
    top: 25.085575103759766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.322998046875
  },
  ImageBackground_2_627: {
    width: 4.70475959777832,
    height: 3.572080612182617,
    top: 27.882034301757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.0308837890625
  },
  ImageBackground_2_628: {
    width: 3.3603649139404297,
    height: 3.519317626953125,
    top: 27.61821746826172,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.92633056640625
  },
  ImageBackground_2_629: {
    width: 2.9652633666992188,
    height: 1.8308906555175781,
    top: 23.951156616210938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.03076171875
  },
  ImageBackground_2_630: {
    width: 4.397443771362305,
    height: 3.487659454345703,
    top: 22.60041046142578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.87109375
  },
  ImageBackground_2_631: {
    width: 0.6968669891357422,
    height: 1.8045063018798828,
    top: 23.613479614257812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.934814453125
  },
  ImageBackground_2_632: {
    width: 0.6793098449707031,
    height: 2.0313892364501953,
    top: 24.937835693359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.62109375
  },
  ImageBackground_2_633: {
    width: 3.454000473022461,
    height: 5.434625625610352,
    top: 18.31603240966797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.85198974609375
  },
  ImageBackground_2_634: {
    width: 0.9888896942138672,
    height: 2.311037063598633,
    top: 19.735366821289062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.23077392578125
  },
  ImageBackground_2_635: {
    width: 2.8010330200195312,
    height: 14.430782318115234,
    top: 25.5340576171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.0115966796875
  },
  ImageBackground_2_636: {
    width: 2.0569915771484375,
    height: 2.4851608276367188,
    top: 33.70183563232422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.0682373046875
  },
  ImageBackground_2_637: {
    width: 5.135290145874023,
    height: 9.808710098266602,
    top: 23.39714813232422,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.85205078125
  },
  ImageBackground_2_638: {
    width: 0.7528457641601562,
    height: 2.717315673828125,
    top: 31.517431259155273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.975341796875
  },
  ImageBackground_2_639: {
    width: 4.100066184997559,
    height: 12.694866180419922,
    top: 21.719268798828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.8914794921875
  },
  ImageBackground_2_640: {
    width: 1.5834836959838867,
    height: 5.265777587890625,
    top: 30.878992080688477,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.3995361328125
  },
  ImageBackground_2_641: {
    width: 1.4140777587890625,
    height: 5.782865524291992,
    top: 24.66345977783203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.977294921875
  },
  ImageBackground_2_642: {
    width: 1.7641899585723877,
    height: 8.457969665527344,
    top: 25.95616912841797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.69000244140625
  },
  ImageBackground_2_643: {
    width: 1.5861225128173828,
    height: 3.5826339721679688,
    top: 18.74341583251953,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.17535400390625
  },
  ImageBackground_2_644: {
    width: 4.216596603393555,
    height: 7.560993194580078,
    top: 26.151397705078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.95648193359375
  },
  ImageBackground_2_645: {
    width: 4.242565155029297,
    height: 9.333839416503906,
    top: 25.9825439453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.18963623046875
  },
  ImageBackground_2_646: {
    width: 2.9485301971435547,
    height: 0.8530349731445312,
    top: 27.965652465820312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.013427734375
  },
  ImageBackground_2_647: {
    width: 2.707599639892578,
    height: 3.1552505493164062,
    top: 24.35216522216797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28.168701171875
  },
  ImageBackground_2_648: {
    width: 2.8303756713867188,
    height: 1.1027565002441406,
    top: 28.59961700439453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.75
  },
  ImageBackground_2_649: {
    width: 11.055809020996094,
    height: 13.238336563110352,
    top: 13.16986083984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.46002197265625
  },
  ImageBackground_2_650: {
    width: 5.781839370727539,
    height: 2.8784193992614746,
    top: 5.143470764160156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.03179931640625
  },
  ImageBackground_2_651: {
    width: 4.334644317626953,
    height: 2.154858112335205,
    top: 5.503742218017578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.7547607421875
  },
  ImageBackground_2_652: {
    width: 3.6175479888916016,
    height: 2.707695484161377,
    top: 2.9728965759277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.60247802734375
  },
  ImageBackground_2_653: {
    width: 2.416208267211914,
    height: 1.8091015815734863,
    top: 3.421955108642578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.20166015625
  },
  ImageBackground_2_654: {
    width: 4.050325393676758,
    height: 1.7578710317611694,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.8148193359375
  },
  ImageBackground_2_655: {
    width: 2.7484970092773438,
    height: 1.1932108402252197,
    top: 0.2839393615722656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23.466796875
  },
  View_2_551: {
    width: 71,
    minWidth: 71,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 15
  },
  Text_2_551: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_743: {
    width: 15,
    height: 15,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101
  },
  View_2_656: {
    width: 52,
    minWidth: 52,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 42.000030517578125
  },
  Text_2_656: {
    color: "rgba(83, 91, 106, 1)",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_744: {
    width: 30.073171615600586,
    minWidth: 30.073171615600586,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81,
    top: 56.000030517578125
  },
  View_2_734: {
    width: 3,
    minWidth: 3,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_736: {
    width: 3,
    minWidth: 3,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.92681884765625,
    top: 4,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_739: {
    width: 3,
    minWidth: 3,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.46343994140625,
    top: 12,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_740: {
    width: 3,
    minWidth: 3,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.3902587890625,
    top: 6,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_741: {
    width: 3,
    minWidth: 3,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.95123291015625,
    top: 8,
    backgroundColor: "rgba(178, 192, 204, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_2_742: {
    width: 3,
    minWidth: 3,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.07318115234375,
    top: 0,
    backgroundColor: "rgba(244, 61, 80, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
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
