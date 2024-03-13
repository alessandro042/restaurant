import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useEffect } from "react";
import { Avatar, Button } from "@rneui/base";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import PhotoProfile from "../components/PhotoProfile";
import ActionProfile from "../components/ActionProfile";

export default function Profile() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [userProfile, setUserProfile] = useState(null);
    useEffect(() => {
        if (user !== null) {
            user.providerData.forEach((profile) => {
                setUserProfile(profile);
            });
        }
    }, []);

    
    const handleLogout = async () => {
        try {
            Alert.alert(
                "Cerrar sesión",
                "¿Estás seguro de que quieres cerrar sesión?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel",
                    },
                    {
                        text: "Aceptar",
                        onPress: async () => {
                            const user = await signOut(auth);
                            navigation.navigate("Restaurants");
                        },
                    },
                ]
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            {userProfile && <PhotoProfile infoUser={userProfile} />  }
           {userProfile && <ActionProfile infoUser={userProfile}/>}
            <Button onPress={handleLogout}>Cerrar sesión</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 16,
    },
    label: {
        color: "#88c040",
        fontSize: 16,
        marginBottom: 8,
    },
    row: {
        flexDirection: "row",
        marginBottom: 16,
        padding: 16,
    },
    column: {
        flexDirection: "column",
        marginBottom: 16,
    },
});