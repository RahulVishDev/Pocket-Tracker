import {Slot} from "expo-router";
import {ClerkProvider} from "@clerk/clerk-expo"
import {tokenCache} from "@clerk/clerk-expo/token-cache"
import SafeScreen from "@/components/SafeScreen.jsx"
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';

const { clerkPublishableKey } = Constants.expoConfig.extra;
export default function RootLayout(){
  return(
    <ClerkProvider tokenCache={tokenCache}
    publishableKey={clerkPublishableKey}
    >
      <SafeScreen>
        <Slot/>
      </SafeScreen>
      <StatusBar style = "dark"/>
    </ClerkProvider>
    
  );
}