import { Dimensions, Stylesheet} from "react-native";

export const style = Stylesheet.create({
    container:{
        flex:1,
        width: "100%",
        paddingTop:50,
        justifyContent:"center",
        backgroundColor: "#a4c639",
    },

    boxTop:{
        alignItems: "center",
        items: 'center',            
        justifyContent: "center",
        height:Dimensions.get("window").height/3,
        width: "100%"
    },

    boxMid: {
        height: Dimensions.get("window").height/3,
        width: "100%",
        marginleft: 20,
    },
    boxBottom:{
        alignItems: "center",
        height: Dimensions.get("window").height/3,
        width: "100%"
    },
    boxInput:{
        backgroundColor: "#ffffff",
        marginRight: 40,
    }
})