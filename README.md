# Browser-Based Text Editor

This is a browser-based text editor application that meets the Progressive Web App (PWA) criteria. It features multiple data persistence techniques, ensuring that your content is stored and accessible, even when offline. The application utilizes IndexedDB as its primary data storage mechanism and employs a service worker to cache static assets, making it accessible even without an internet connection.

## Motivation

The primary motivation for this project was to gain an understanding of working with an existing application and implementing various methods for getting and storing data to an IndexedDB database. This text editor serves as a practical example of data persistence in web applications. It provides redundancy in case one data storage option is not supported by the browser and enables offline access to previously created content.

## Installation

To run this text editor application on your local machine, follow these steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine.

   ```bash
   git clone https://github.com/k-pineda/Text_Editor.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm.

   ```bash
   cd Text-Editor
   npm install
   ```

3. **Start the Application**: To start the application, run:

   ```bash
   npm start
   ```

4. **Access the Text Editor**: After running the command, a `dist` folder will be created under the `client` directory. You can right-click on the `index.html` file in the `dist` folder and open it in your preferred web browser.

## Usage

Here are the steps to use the text editor, both online and offline:

1. Open the text editor application using your preferred web browser.

2. Upon opening, the application will automatically create an IndexedDB database for storage.

3. Enter your desired content in the text editor.

4. Click outside the DOM window to trigger the automatic content saving to IndexedDB. This ensures that your content is persistently stored.

5. Even if you close the editor and reopen it, your content will be retrieved from IndexedDB, ensuring data persistence.

6. Click on the "Install" button to download the web application as an icon on your desktop. This allows you to access the text editor like a native application.

The application employs a service worker created with Workbox, which caches static assets for offline use, providing you with a seamless experience, whether you are online or offline.

## Access the Deployed Application

You can also access the deployed application online via the following link: [Browser-Based Text Editor](https://text-editor-jate-1-5ed8b8106068.herokuapp.com/)

Enjoy using the text editor for all your writing needs!
