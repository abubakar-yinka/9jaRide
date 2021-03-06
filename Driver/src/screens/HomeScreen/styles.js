import {Dimensions} from "react-native";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    roundButton: {
        position: 'absolute',
        backgroundColor: "white",
        padding: 13,
        borderRadius: 30,

    },
    roundButton1: {
        position: 'absolute',
        backgroundColor: "white",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 30,

    },
    roundButton2: {
        position: 'absolute',
        backgroundColor: "#276EF1",
        width: 90,
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        bottom: 110,
    },
    roundButton3: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        top: 50,
    },
    bottomContainer: {
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        padding: 15
    },
    bottomText: {
        fontSize: 22,
        // color: '#222'
    }
});

export default styles;
