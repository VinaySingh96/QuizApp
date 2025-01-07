# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# Keep rules for Google Play Services
-keep class com.google.android.gms.** { *; }
-dontwarn com.google.android.gms.**

# Keep rules for SMS Retriever
-keep class me.furtado.smsretriever.** { *; }
-dontwarn me.furtado.smsretriever.**

# Keep rules for Proguard annotations
-keep class proguard.annotation.** { *; }
-dontwarn proguard.annotation.**

# Keep rules for Razorpay
-keep class com.razorpay.** { *; }
-dontwarn com.razorpay.**

# General keep rules for React Native
-keep public class com.facebook.react.** { *; }
-dontwarn com.facebook.react.**
