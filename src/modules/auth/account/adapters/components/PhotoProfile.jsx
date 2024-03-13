import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from '@rneui/base'
import * as ImagePicker from 'expo-image-picker';
import { getAuth, updateProfile } from 'firebase/auth';
import * as MediaLibrary from 'expo-media-library';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import userPhoto from '../../../../../../assets/img/userdef.jpg'
import Loading from '../../../../../kernel/components/Loading';


export default function PhotoProfile(props) {
    const { infoUser: { uid, photoURL, displayName, email } } = props
    const [loading, setLoading] = useState(false);
    const uploadPhotoUrl = () => {
        const storage = getStorage();
        getDownloadURL(ref(storage, `avatar/${uid}`)).then((url) => {
            const auth = getAuth();
            updateProfile(auth.currentUser, {
                photoURL: url,
            })
        })
    };
    const uploadImage = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storage = getStorage();
        const storageRef = ref(storage, `avatar/${uid}`);
        return uploadBytes(storageRef, blob);
    };
    const changeAvatar = async () => {

        const resultPermission = await MediaLibrary.requestPermissionsAsync();
        if (resultPermission.status === "granted") {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,

            });
            if (!result.canceled) {
                setLoading(true);
                uploadImage(result.assets[0].uri).then(() => {
                    uploadPhotoUrl();
                }).catch((error) => {
                    alert("ERRROR FATAL");
                    console.log(error);
                })
                    .finally(() => {
                        setLoading(false)
                    })
            }
        } else {
            alert("Necesitas dar permisos para acceder a la galería");
        }
    }
    return (
        <View>
            <View style={styles.row}>
                <Avatar
                    size={64}
                    rounded
                    icon={{ name: "adb", type: "material" }}
                    source={photoURL ? { uri: photoURL } : userPhoto}
                >
                    <Avatar.Accessory size={24} onPress={changeAvatar} />
                </Avatar>
                <View style={styles.column}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>{displayName || "Anónimo"} </Text>
                    <Text style={{ fontSize: 16 }}>{email || ""}</Text>
                </View>
                <Loading isShow={loading} title={"cargando"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginBottom: 16,
        padding: 16,
    },
    column: {
        flexDirection: "column",
        marginBottom: 16,
    },
})