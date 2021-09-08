import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItems: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,

    },
    icon: {
        color: "white",
    },
    menuText: {
        textTransform:"uppercase",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15
    },
    menuRow: {
        marginBottom: 15,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    menuTextbox: {
        flexGrow: 1,
    },
    arrowIcon: {
        color: "#4D4D4E"
    },
    subTitle:{
        color:"grey",
        fontSize:14,
        marginLeft:15,
        
    }
});

export default styles;