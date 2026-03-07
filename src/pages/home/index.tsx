import React, { useState } from "react";
import {
Text,
View,
} from 'react-native';
import {style} from './styles';
import Menu from '../../components/menu/Menu';
export default function handleHome(){
return (
<View style={style.container}>
<Text>Home</Text>
<Menu/>
</View>
)};