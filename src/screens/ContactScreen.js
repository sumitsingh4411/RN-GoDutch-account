import React from 'react'
import { View, Text, TextInput, Button, Image, Dimensions, KeyboardAvoidingView } from 'react-native'
import { Card } from 'react-native-paper'

export default function ContactScreen({ navigation, route }) {

    let width = Dimensions.get('window').width;
    width -= 20;
    const [student, setstudent] = React.useState(true);
    const [proffesional, setprofesional] = React.useState(false);
    const [errorname, seterrorname] = React.useState(null);
    const [errorupi, seterrorupi] = React.useState(null);
    const [name, setname] = React.useState('');
    const [upiid, setupiid] = React.useState('');
    const { mobile } = route.params;
    let mymobile = mobile;

    React.useEffect(() => {
        if (name.length >= 1)
            seterrorname(null);
        if (upiid.length >= 1)
            seterrorupi(null);
    }, [student, proffesional, errorname, errorupi])
    return (

        <KeyboardAvoidingView>
            <Text style={{ marginTop: 60, marginLeft: 15, fontSize: 18 }}>setUp your GoDutch account</Text>
            <Card style={{
                marginLeft: 10,
                marginRight: 10,
                height: 650,
                marginTop: 10,
                width: width,

            }}>
                <View style={{ flexDirection: 'column', marginTop: 70, margin: 20 }}>
                    <View>
                        <Text style={{ fontSize: 18 }}>Current Proffesion</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10
                    }}>
                        <Card
                            onPress={() => {
                                setprofesional(false);
                                setstudent(true);
                            }}
                            style={{
                                height: 52,
                                width: 150,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: student ? '#5A67F2' : 'black',
                                borderWidth: 1,
                            }}
                        >
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                padding: 10,
                                color: student ? '#5A67F2' : 'black'
                            }}>Student</Text>
                        </Card>
                        <Card
                            onPress={() => {
                                setprofesional(true);
                                setstudent(false);
                            }}
                            style={{
                                height: 52,
                                width: 150,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: proffesional ? '#5A67F2' : 'black',
                                borderWidth: 1,
                            }}
                        >
                            <Text style={{
                                color: proffesional ? '#5A67F2' : 'black',
                                fontSize: 18,
                                fontWeight: 'bold',
                                padding: 10
                            }}>Proffesional</Text>
                        </Card>
                    </View>
                </View>
                <View style={{ marginTop: 50, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>Full Name </Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>* </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            onChangeText={e => setname(e)}
                            placeholder='Enter Full Name'
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
                        <Text style={{ fontSize: 18 }}>UPI ID </Text>
                        <Text style={{ fontSize: 18, color: 'red' }}>* </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput
                            onChangeText={e => setupiid(e)}
                            placeholder='Enter UPI ID'
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
                <View>

                    <Card
                        onPress={() => {
                            if (name.length < 1)
                                seterrorname('Name is * mandatory filed')
                            if (upiid.length < 1)
                                seterrorupi('upi ID is * mandatory filed')
                            else {
                                navigation.navigate('ContactDetails', {
                                    mymobile: mymobile,
                                    myname: name,
                                    myupiid: upiid,
                                    myprofession: student ? 'Student' : 'Professional'
                                })
                            }
                        }}
                        style={{
                            marginLeft: 60,
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
            </Card>
        </KeyboardAvoidingView>

    )
}
