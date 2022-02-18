import React, {useState, useEffect, Fragment} from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon } from '../component';
import { 
  ScrollView,
  SafeAreaView
} from 'react-native';

export default function HistoryScreen({ navigation }) {
  return (
    <SafeAreaView>
        <View style={styles.container}>
          <SectionHeader>
            <ImageBackground
              resizeMode='cover'
              source={images.hero_bg}
              style = {{
                width: '100%',
                //height: SIZES.height < 700 ? SIZES.height * 0.4:SIZES.height * 0.5,
                height: '100%',
              }}
              imageStyle= {{opacity:0.5}}
            >
              {/* <McIcon source={icons.back_arrow} size={24} color='#fff' top={25} marginLeft={20}/>
              <McText h1 style={{left: '35%' }}>History</McText> */}
            </ImageBackground> 
          </SectionHeader>
          <DetailBox>
            <McText style = {{ fontSize: 20, fontWeight: 'bold', color: '#808080', marginLeft: 5 }}>
              June 2020
            </McText>
            <HistoricalData/>
          </DetailBox>
        </View>
    </SafeAreaView>
  );
}

const HistoricalData = () => {
  return (
    <>
      <View marginVertical={5} marginHorizontal={15}>
        <TimeDate>
          <McText body3 style={{color: COLORS.gray, fontSize: 9}}>{'13:30 '} {' 11 June'}</McText>
        </TimeDate>
        <FirstRow style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <McText body3 style={{color: COLORS.black}}>{'BMW '}-{' WWE 123 GP'}</McText>
          <McText body3 style={{color: COLORS.black}}>{'Car '}-{' Full Wash'}</McText>
        </FirstRow>
        <SecondRow style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <McText body3 style={{color: COLORS.black}}>{'Kutlono Ramonti'}</McText>
          <McText h3 style={{color: '#0B6F83'}}>R {120.00}</McText>
        </SecondRow>
      </View>

      <View marginVertical={5} marginHorizontal={15}>
        <TimeDate>
          <McText body3 style={{color: COLORS.gray, fontSize: 9}}>{'13:30 '} {' 11 June'}</McText>
        </TimeDate>
        <FirstRow style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <McText body3 style={{color: COLORS.black}}>{'BMW '}-{' WWE 123 GP'}</McText>
          <McText body3 style={{color: COLORS.black}}>{'Car '}-{' Full Wash'}</McText>
        </FirstRow>
        <SecondRow style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <McText body3 style={{color: COLORS.black}}>{'Kutlono Ramonti'}</McText>
          <McText h3 style={{color: '#0B6F83'}}>R {120.00}</McText>
        </SecondRow>
      </View>
    </>

    
  );
}

const TimeDate = styled.View`
`;

const FirstRow = styled.View`
`;

const SecondRow = styled.View`
`;

const SectionHeader = styled.View`
  width: 100%;
  height: 220px;
  background-color: ${COLORS.black}
  flex-direction: row;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const DetailBox = styled.View`
  width: 90%;
  height: 550px;
  border-radius: ${SIZES.radius};
  background-color: ${COLORS.white};
  elevation: 12;
  top: -80;
  left: 20;
  padding: 10px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey
  },
  overlay: {
    backgroundColor:'transparent',
    opacity: 0.6
  },
});