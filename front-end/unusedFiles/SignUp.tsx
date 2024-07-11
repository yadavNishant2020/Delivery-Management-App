// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'; // Import KeyboardAvoidingView
// import tw from 'twrnc';
// import Input from '../components/Input';
// import CustomButton from '../components/Button';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const SignUp = ({ navigation }: any) => {
//   const route = useRoute();
//   const { selectedHeading }: any = route.params || {};

//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   const [competition, setCompetition] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const [errors, setErrors] = useState({
//     competition: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: ''
//   });

//   useEffect(() => {
//     if (selectedHeading) {
//       setCompetition(selectedHeading);
//     }
//   }, [selectedHeading]);

//   const validate = () => {
//     let valid = true;
//     let newErrors = {
//       competition: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       firstName: '',
//       lastName: ''
//     };

//     if (!competition) {
//       newErrors.competition = 'You must pick a competition to register';
//       valid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) {
//       newErrors.email = 'Email format is invalid';
//       valid = false;
//     }

//     if (password.length === 0) {
//       newErrors.password = 'Password is required';
//       valid = false;
//     } else if (password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters long';
//       valid = false;
//     } else {
//       const passwordRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-+=?]).{8,}$/;
//       if (!passwordRegex.test(password)) {
//         newErrors.password = 'Include at least 2 uppercase letters, lowercase letters, numbers, and special characters';
//         valid = false;
//       }
//     }

//     if (confirmPassword.length === 0) {
//       newErrors.confirmPassword = 'Password confirmation is required';
//       valid = false;
//     } else if (password !== confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//       valid = false;
//     }

//     if (!firstName) {
//       newErrors.firstName = 'First Name is required';
//       valid = false;
//     }

//     if (!lastName) {
//       newErrors.lastName = 'Last Name is required';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSignUp = () => {
//     if (validate()) {
//       navigation.navigate('Main');
//     }
//     // navigation.navigate('Main');
//   };

//   const handleReset = () => {
//     setCompetition('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     setFirstName('');
//     setLastName('');
//     setErrors({
//       competition: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       firstName: '',
//       lastName: ''
//     });
//   };

//   const handleCompetitionPress = () => {
//     navigation.navigate('Competition');
//   };

//   return (
//     <KeyboardAvoidingView
//       style={tw`flex-1 bg-white px-5`}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100} 
//     >
//       <ScrollView
//         contentContainerStyle={tw`flex-grow`}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled" // Allow taps to dismiss keyboard
//       >
//         <TouchableOpacity onPress={handleCompetitionPress}>
//           <Input
//             value={competition}
//             onChangeText={setCompetition}
//             placeholder="Competition to sign up *"
//             error={errors.competition}
//             containerStyle={tw`mb-4`}
//             icon={"chevron-right"}
//             readOnly={true}
//           />
//         </TouchableOpacity>

//         <Input
//           value={email}
//           onChangeText={setEmail}
//           placeholder="Enter your email *"
//           error={errors.email}
//           containerStyle={tw`mb-4`}
//         />

//         <Input
//           value={password}
//           onChangeText={setPassword}
//           placeholder="Password *"
//           secureTextEntry={!passwordVisible}
//           icon={passwordVisible ? "eye" : "eye-slash"}
//           onIconPress={() => setPasswordVisible(!passwordVisible)}
//           containerStyle={tw`mb-4`}
//           error={errors.password}
//         />

//         <Input
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           placeholder="Confirm Password *"
//           secureTextEntry={!confirmPasswordVisible}
//           error={errors.confirmPassword}
//           icon={confirmPasswordVisible ? "eye" : "eye-slash"}
//           onIconPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//           containerStyle={tw`mb-4`}
//         />
//         <Input
//           value={firstName}
//           onChangeText={setFirstName}
//           placeholder="First Name in English *"
//           error={errors.firstName}
//           containerStyle={tw`mb-4`}
//         />

//         <Input
//           value={lastName}
//           onChangeText={setLastName}
//           placeholder="Last Name in English *"
//           error={errors.lastName}
//           containerStyle={tw`mb-4`}
//         />

//         <Text style={tw`text-gray-600 mb-2`}>
//           By signing up, I agree to Cloit's <Text style={tw`text-blue-500`}>Terms & Conditions</Text> and <Text style={tw`text-blue-500`}>Privacy Policy</Text>.
//         </Text>

//         <CustomButton
//           onPress={handleSignUp}
//           text="Sign Up"
//           iconName="sign-in"
//           hideIcons={true}
//           className='bg-[#253BFF]'

//         />
//         <CustomButton
//           onPress={handleReset}
//           text="Reset Form"
//           iconName="undo"
//           hideIcons={true}
//           className='bg-[#1D2939]'
//         />
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default SignUp;
