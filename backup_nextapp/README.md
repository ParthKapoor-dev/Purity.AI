# 💫 Create Next JS

Welcome to the Next.js Starter Pack! This package is designed to help you quickly set up a Next.js project with essential features such as authentication, UI components, theme management, and more.

## 📖 Table of Contents
- [Introduction](#introduction)
- [Included Features & Packages](#included-features--packages)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Sample App](#sample-app)
- [Contributing](#contributing)
- [License](#license)

## 📝 Introduction

The Next.js Starter Pack is a boilerplate that includes a complete setup for a modern web application. It integrates authentication, UI components, theme management, and database ORM, allowing you to kickstart your project without hassle.
## 🌐 Deployement & Documentation

Check out the sample deployed version of the app: [Next.js Starter Pack Sample](https://devwizz-nextjs.vercel.app/)

Complete documentation is available at: [Create Next JS Docs](https://devwizz-nextjs.vercel.app/docs)
## ✨ Included Features & Packages

- **Next.js** - The React Framework for Production
- **NextAuth.js** - Authentication for Next.js
- **ShadCN UI** - A collection of UI components
- **Next Themes** - Theme management for Next.js
- **Prisma** - Next-generation ORM for Node.js
- **Tailwind CSS** - A utility-first CSS framework
- **Lucide-react** - Beautiful & consistent icon toolkit
- **Framer Motion** - Motion library for React

## ⚙️ Installation

To create a new project using this starter pack, follow these steps:

1. **Create a new project:**

    ```sh
    npx @devwizz/create-next-js my-app
    ```

2. **Navigate to the project directory:**

    ```sh
    cd my-app
    ```

3. **Set up your environment variables:**

    Create a `.env` file in the root of your project and add the following variables:

    ```env
    DATABASE_URL=your-database-url
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    ```

4. **Install dependencies:**

    ```sh
    npm install
    ```

5. **Run the development server:**

    ```sh
    npm run dev
    ```

## 🔧 Configuration

Ensure that you have the required environment variables set up in your `.env` file. This is crucial for the authentication and database connection to work properly.

You can find more details on how to obtain your Google Client ID and Secret from the [Google Developer Console](https://console.developers.google.com/).

## 💡 Usage

Once your project is set up and running, you can start building your application. Refer to the documentation of each included package for detailed usage instructions and examples:

- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [ShadCN UI Documentation](https://shadcn.dev/docs)
- [Next Themes Documentation](https://next-themes.vercel.app/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide-react Documentation](https://lucide.dev/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)


## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
