import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground,
    Button,
    Alert,
    TouchableOpacity,
    FlatList,
    ScrollView,
    SafeAreaView,
    Text
} from 'react-native';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon } from '../component';

const History = () => {
  
  const _renderItem = ({item, index}) => {
    return (
      <View marginVertical={10} marginHorizontal={15}>
        <TimeDate>
          <McText body3 style={{color: COLORS.gray, fontSize: 9}}>{item.date}{' '}{item.time}</McText>
        </TimeDate>
        <FirstRow style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <McText body3 style={{color: COLORS.black}}>{item.vehicleModel}{' - '}{item.vehicleRegistration}</McText>
          <McText body3 style={{color: COLORS.black}}>{item.vehicleType}{' - '}{item.serviceType}</McText>
        </FirstRow>
        <SecondRow style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <McText body3 style={{color: COLORS.black}}>{item.customerName}</McText>
          <McText h3 style={{color: '#0B6F83', fontWeight: 'bold'}}>R {item.price}</McText>
        </SecondRow>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SectionHeader>
        <ImageBackground
          resizeMode='cover'
          source={images.hero_bg}
          style = {{
            width: '100%',
            height: '100%',
          }}
          imageStyle= {{opacity:0.5}}
        >
        </ImageBackground>
      </SectionHeader> 
      <DetailBox >
        <McText style = {{ fontSize: 20, color: '#808080', marginLeft: 5 }}>
          June 2020
        </McText>
          <FlatList 
            keyExtractor={(item) => 'event_' + item.id}
            data={dummyData.HistoricalData}
            renderItem={_renderItem}
          />
      </DetailBox> 
    </View>
  );
};

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
    width: "100%",
    height: height / 6.8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  inputContainer: {
    height: 50,
    borderRadius:20,
    //borderColor: '#064451',
    //borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"white",
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});

export default History;
