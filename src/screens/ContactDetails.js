import React from 'react'
import { View, Text, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Card } from 'react-native-paper'


export default function ContactScreen({ navigation, route }) {

    let width = Dimensions.get('window').width;
    width -= 20;
    const { mymobile, myname, myupiid, myprofession } = route.params;

    const [student, setstudent] = React.useState(true);
    const [proffesional, setprofesional] = React.useState(false);
    const [errorname, seterrorname] = React.useState(null);
    const [mobile, setmobile] = React.useState(mymobile);
    const [error, seterror] = React.useState(null);
    const [valid, setvalid] = React.useState(null);
    const [errorupi, seterrorupi] = React.useState(null);
    const [name, setname] = React.useState(myname);
    const [upiid, setupiid] = React.useState(myupiid);
    const [profession, setprofession] = React.useState(myprofession === 'Student' ? 'Student' : 'Professional')
    React.useEffect(() => {
        if (name.length >= 1)
            seterrorname(null);
        if (upiid.length >= 1)
            seterrorupi(null);
        if (mobile.length >= 1)
            seterror(null);
        if (mobile.length === 10)
            setvalid(null);
    }, [student, proffesional, errorname, errorupi, mobile])
    return (

        <KeyboardAvoidingView>
            <Text style={{ marginTop: 60, marginLeft: 15, fontSize: 18 }}>Your Details</Text>
            <Card style={{
                marginLeft: 10,
                marginRight: 10,
                height: 550,
                marginTop: 10,
                width: width,

            }}>
                <View style={{ marginTop: 50, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>Full Name </Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>* </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            onChangeText={e => setname(e)}
                            placeholder='Enter Full Name'
                            value={name}
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
                        errorname && <Text style={{ marginTop: 10, padding: 2, color: 'red' }}>{errorname}</Text>
                    }
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={{ fontSize: 18 }}>Mobile number </Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>* </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            onChangeText={e => setmobile(e)}
                            placeholder='Enter Mobile No.'
                            keyboardType='numeric'
                            value={mobile}
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
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 18 }}>UPI ID </Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>* </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            onChangeText={e => setupiid(e)}
                            placeholder='Enter UPI ID'
                            value={upiid}
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
                        errorupi && <Text style={{ marginTop: 10, padding: 2, color: 'red' }}>{errorupi}</Text>
                    }
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={{ fontSize: 18 }}>Profession </Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>* </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            onChangeText={e => setupiid(e)}
                            placeholder='Enter Profession'
                            value={profession}
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
                        errorupi && <Text style={{ marginTop: 10, padding: 2, color: 'red' }}>{errorupi}</Text>
                    }
                </View>

            </Card>
            <View>
                <Card
                    onPress={() => {
                        if (name.length < 1)
                            seterrorname('Name is * mandatory filed')
                        if (mobile.length < 1)
                            seterror('mobile number is * mandatory filed')
                        else if (mobile.length !== 10)
                            setvalid('mobile number should be 10 characters')
                        if (upiid.length < 1)
                            seterrorupi('upi ID is * mandatory filed')
                        else {
                            navigation.navigate('Home')
                        }
                    }}
                    style={{
                        marginLeft: 80,
                        marginTop: 50,
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
        </KeyboardAvoidingView>

    )
}
