import React from "react";
import { View, ImageBackground, Dimensions } from "react-native";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const showImage = (props) => {
    return (
        <View>
            <ImageBackground source={props.route.params.url} style={{}} />
        </View>
    )
}

export default showImage