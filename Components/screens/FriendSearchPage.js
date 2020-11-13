import React, { useEffect, useState, useRef } from "react";
import RestaurantList from "../common/RestaurantList";
import { GET_USERS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, Text, View } from "react-native";
import SearchFriendList from "../common/SearchFriendList";
import SearchBar from "../common/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import pizza from "../../assets/pizza.png";
import { Image } from "react-native";

export default function (props) {
  const [search, setSearch] = useState("");
  const { loading, error, data } = useQuery(GET_USERS);

  const [filteredUsers, setUsers] = useState([]);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const prevRef = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevSearch = prevRef(search);

  useEffect(() => {
    if (!loading) {
      const copyUsers = [...data.users];
      const newUsers = copyUsers.map((user) => {
        const copyUser = { ...user };
        return copyUser;
      });

      if (search !== prevSearch) {
        const filterUsers = newUsers.filter((user) => {
          return user.name.toLowerCase().includes(search.toLowerCase());
        });

        setUsers(filterUsers);
      }
    }
  });

  if (loading || filteredUsers.length === 0) {
    return (
      <SafeAreaView
        style={{
          backgroundColor: "#5C374C",
          height: "100%"
        }}
      >
        <SearchBar search={search} updateSearch={updateSearch} />

        <View
          style={{
            backgroundColor: "#5C374C",
            height: "100%",
            // width: '100%',
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={{
              width: 350,
              height: 340,
              marginRight: 25,
              marginLeft: 15
            }}
            source={pizza}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#5C374C" }}>
      <SearchBar search={search} updateSearch={updateSearch} />
      <SearchFriendList users={filteredUsers} friends={data.users[0].friends} />
    </SafeAreaView>
  );
}
