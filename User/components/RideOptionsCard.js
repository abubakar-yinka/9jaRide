import {
    FlatList,
    Image,
    Platform,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  
  import { Icon } from "react-native-elements";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { selectTravelTimeInformation } from "../slices/navSlice";
  import tw from "tailwind-react-native-classnames";
  import { useNavigation } from "@react-navigation/native";
  import { useSelector } from "react-redux";
import NewOrderPopup from "./NewOrderPopup";
  
  const data = [
    {
      id: "Uber-X-123",
      title: "Uber X",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
  ];

  //If we have SURGE pricing, this goes up
  const SURGE_CHARGE_RATE = 1.5

  const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
  
    return (
      <SafeAreaView style={tw`bg-white flex-1`}>
        <View style={tw``}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`absolute top-1 left-0 px-5 rounded-full`}
          >
            <Icon
              name={Platform.OS === "ios" ? "ios-chevron-back" : "md-arrow-back"}
              type="ionicon"
            />
          </TouchableOpacity>
          <Text style={tw`text-center mb-5 text-lg`}>
            Select a Ride - {travelTimeInformation?.distance?.text}
          </Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item: { id, title, multiplier, image }, item }) => (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={tw.style(
                `flex-row justify-between items-center px-6`,
                id === selected?.id && "bg-gray-200"
              )}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
                source={{
                  uri: image,
                }}
              />
              <View style={tw`-ml-8`}>
                <Text style={tw`text-lg font-semibold`}>{title}</Text>
                <Text>{travelTimeInformation?.duration?.text} - Travel Time</Text>
              </View>
              <Text style={tw`text-lg`}>
                {new Intl.NumberFormat("ee-ng", {
                  currency: "NGN",
                  style: "currency",
                }).format(
                  ((travelTimeInformation?.duration?.value || 0) *
                    SURGE_CHARGE_RATE *
                    multiplier) * 100 /
                    100
                )}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={tw`mt-auto border-t border-gray-200`}>
          <TouchableOpacity
            disabled={!selected}
            style={tw.style(
              `bg-black py-3 m-3`,
              !selected && "bg-gray-300"
            )}
            onPress={() => {
                <NewOrderPopup
                    newOrder={newOrders[0]}
                    duration={2}
                    distance={0.5}
                    onDecline={onDecline}
                    onAccept={() => onAccept(newOrders[0])}
                />
            }}
          >
            <Text style={tw`text-center text-white text-lg`}>
              Choose {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
    
  export default RideOptionsCard;
  