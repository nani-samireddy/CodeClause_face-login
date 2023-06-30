# Face Login using FaceIO API

👤🔐👥 This project implements face login functionality using the FaceIO API. It is built with ReactJS using Vite as the bundler.

## Features

- 🚀 Face login using facial recognition.
- 🌟 User-friendly interface.
- 🔒 Secure authentication with face verification.
- ⚡ Real-time detection and matching of faces.
- 🌐 Cross-platform compatibility.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:nani-samireddy/face-login.git
   ```

2. Navigate to the project directory:

   ```bash
   cd face-login
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add the following environment variables:

   ```bash
   REACT_APP_FACEIO_API_KEY=your_faceio_api_key
   ```

   Replace `your_faceio_api_key` with your own API key obtained from the FaceIO website.

5. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the development server on `http://localhost:3000`.

## Usage

1. Access the face login application by opening `http://localhost:3000` in your browser.

2. Click on the "Register Face" button to capture your face image for authentication.

3. Follow the on-screen instructions to position your face properly within the frame.

4. Once the face is captured, it will be stored securely for future authentication.

5. To login using face recognition, click on the "Face Login" button.

6. Allow the application to access your camera for face detection.

7. Position your face within the frame for recognition.

8. The application will match your face with the registered face image and grant access if successful.

## Deployment

To deploy the project, follow these steps:

1. Sign up for an account on the FaceIO website at https://faceio.com/.

2. Obtain an API key for authentication.

3. Deploy the project on a hosting platform of your choice (e.g., Vercel, Netlify, etc.).

4. Set the API key as an environment variable on your hosting platform.

5. Build and deploy the project.

6. Access the deployed application to use face login functionality.

## Contributing

Contributions to the project are welcome and encouraged! If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

To contribute code, follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/my-feature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add my feature"
   ```

4. Push the changes to your fork:

   ```bash
   git push origin feature/my-feature
   ```

5. Open a pull request on the GitHub repository, describing your changes in detail.

## License

This project is licensed under the [MIT License](LICENSE).
