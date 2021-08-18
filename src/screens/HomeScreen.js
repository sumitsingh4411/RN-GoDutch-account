import React from 'react'
import { View, Text, TextInput, Button, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Card } from 'react-native-paper'

export default function HomeScreen({ navigation }) {

    let width = Dimensions.get('window').width;
    width -= 20;
    const [mobile, setmobile] = React.useState('');
    const [error, seterror] = React.useState(null);
    const [valid, setvalid] = React.useState(null);
    React.useEffect(() => {
        if (mobile.length >= 1)
            seterror(null);
        if (mobile.length === 10)
            setvalid(null);
    }, [mobile])
    return (

        <KeyboardAvoidingView>
            <Card style={{
                marginLeft: 10,
                marginRight: 10,
                height: 500,
                marginTop: 180,
                width: width,

            }}>
                <View style={{ flexDirection: 'row', marginTop: 35, marginLeft: 87 }}>
                    <View>
                        <Image source={require('../assets/image/Logo.png')}
                            style={{
                                width: 37,
                                height: 37
                            }} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Image source={require('../assets/image/LogoName.png')}
                            style={{
                                width: 140,
                                height: 35
                            }} />
                    </View>
                </View>
                <View style={{ marginTop: 100, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>Mobile number </Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>* </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            onChangeText={e => setmobile(e)}
                            placeholder='Enter Mobile No.'
                            keyboardType='numeric'
                            style={{
                                width: 340,
                                height: 52,
                                borderRadius: 5,
                                backgroundColor: '#F1F1F1',
                                fontSize: 18,
                                padding: 5,

                            }}
                        />
                    </View>
                    {
                        error ? <Text style={{ marginTop: 10, padding: 2, color: 'red' }}>{error}</Text> :
                            <Text style={{ marginTop: 10, padding: 2, color: 'red' }}>{valid}</Text>
                    }
                </View>
                <View>

                    <Card
                        onPress={() => {
                            if (mobile.length < 1) {
                                seterror('Mandatory Field * should not be empty')
                            }
                            else if (mobile.length !== 10) {
                                setvalid('Mobile number should be 10 characters')
                            }
                            else {
                                seterror(null);
                                setvalid(null);
                                navigation.navigate('ContactScreen', {
                                    mobile: mobile,
                                })
                            }
                        }}
                        style={{
                            marginLeft: 60,
                            marginTop: 60,
                            height: 52,
                            width: 250,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#5A67F2',
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                            padding: 10
                        }}>Continue</Text>
                    </Card>
                </View>
            </Card>
        </KeyboardAvoidingView>

    )
}
