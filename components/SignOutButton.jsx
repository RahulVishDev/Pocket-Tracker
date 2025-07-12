import { styles } from '@/assets/styles/auth.styles'
import { COLORS } from '@/constants/colors'
import { useClerk } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import * as Linking from 'expo-linking'
import { Text, TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'
import { useRouter } from 'expo-router';

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()
  const router = useRouter();
  const handleSignOut = async () => {
    Alert.alert ("Logout", "Are you sure you want to logout?",[
      {text: "Cancel", style: "cancel"},
      {text: "Logout",
        style: "destructive",
        onPress: async()=>{
          await signOut();
          router.replace('/sign-in');
        }
      },
    ]);
  };
  return (
    <TouchableOpacity style = {styles.logoutButton} onPress={handleSignOut}>

     <Ionicons name = "log-out-outline" size={22} color={COLORS.text}/>
    </TouchableOpacity>
  )
}