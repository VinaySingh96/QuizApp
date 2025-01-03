# Boilerplate App

A robust React Native boilerplate for building modern applications. This boilerplate includes a variety of features and pre-built components to streamline development.

## Features
- **Authentication**: 
  - Login Screen
  - Signup Screen
  - OTP Verification Screen
- **Payment System**: 
  - Integrated payment screen for seamless transactions.
- **Navigation**:
  - Multi-screen navigation with React Navigation.
- **State Management**: 
  - Context API for global state management.
- **Theming**:
  - Light and dark mode support.
- **Utilities and Helpers**: 
  - Input validation, reusable styles, and helper functions.

## Project Structure
```plaintext
src
├── api
│   ├── auth.js
│   ├── index.js
│   └── user.js
├── assets
│   ├── otp.jpg
│   ├── payment.jpg
│   |...
├── components
│   ├── Avatar.js
│   ├── Button.js
│   |...
├── constants
│   ├── AppInfo.js
│   ├── Colour.js
│   |...
├── context
│   ├── DimensionContext.js
│   └── ThemeContext.js
├── helper
├── screens
│   ├── home
│   │   └── Home.js
|   |...
├── utils
│   |...
└── App.js
```

## Screens
### 1. Login Screen
- Allows users to log in to the application.

### 2. Signup Screen
- Enables user registration with fields for name and exam selection.

### 3. OTP Screen
- Auto-fills OTP from SMS and verifies the user.

### 4. Payment Screen
- Displays total amount and collects billing information.

### 5. Home Screen
- The main dashboard of the application.

### 6. Settings Screen
- Allows users to customize their preferences.

### 7. Splash Screen
- A splash screen for loading the app.

## Components
- **Button**: Reusable button component with customizable labels and icons.
- **CustomInput**: Input field with animated placeholder functionality.
- **Modal**: Customizable modal component.
- **Divider**: Reusable divider for UI consistency.

## Constants
- **AppInfo.js**: Contains app metadata and configuration.
- **Colour.js**: Defines theme colors.
- **Exams.js**: Lists common exams in India (e.g., SSC, UPSC).
- **Font.js**: Defines font sizes and styles.

## Utils
- **Validator.js**: Includes email and input validation functions.
- **DefaultStyle.js**: Contains reusable style definitions.

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run android
   # or
   npm run ios
   ```

## Usage
- Modify constants and components according to your application's requirements.
- Extend screens and features as needed.

## License
This project is licensed under the MIT License.
