import React from 'react';

const DocsPage = () => {
  return (
    <div className="container mx-auto p-8 text-lg max-md:text-sm" >
      <h1 className="text-4xl font-semibold mb-4">Next.js Starter Pack</h1>
      <p className="mb-8">Welcome to the Next.js Starter Pack documentation. This package is designed to help you quickly set up a Next.js project with essential features like authentication, UI components, and more.</p>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p>
          The Next.js Starter Pack is a boilerplate that includes a complete setup for a modern web application. It integrates authentication, UI components, theme management, and database ORM, allowing you to kickstart your project without hassle.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Installation</h2>
        <ol className="list-decimal list-inside">
          <li className="mb-2">
            Create a new project in your terminal:
            <pre className="bg-gray-200 ml-6 py-2 px-4 rounded-md max-md:overflow-scroll">
              <code>npx @devwizz/create-next-js my-app</code>
            </pre>
          </li>
          <li className="mb-2">
            Navigate to the project directory:
            <pre className="bg-gray-200 ml-6 py-2 px-4 rounded-md">
              <code>cd my-app</code>
            </pre>
          </li>
          <li className="mb-2">
            Set up your environment variables in a <code>.env</code> file:
            <pre className="bg-gray-200 ml-6 py-2 px-4 rounded-md">
              <code>
                DATABASE_URL<br />
                GOOGLE_CLIENT_ID<br />
                GOOGLE_CLIENT_SECRET<br />
                NEXTAUTH_SECRET
              </code>
            </pre>
          </li>
          <li className="mb-2">
            Install dependencies:
            <pre className="bg-gray-200 ml-6 py-2 px-4 rounded-md">
              <code>npm install</code>
            </pre>
          </li>
          <li className="mb-2">
            Run the development server:
            <pre className="bg-gray-200 ml-6 py-2 px-4 rounded-md">
              <code>npm run dev</code>
            </pre>
          </li>
        </ol>
      </section>


      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Included Features & Packages</h2>
        <ul className="list-disc list-inside">
          <li><strong>Next.js</strong> - The React Framework for Production</li>
          <li><strong>NextAuth.js</strong> - Authentication for Next.js</li>
          <li><strong>ShadCN UI</strong> - A collection of UI components</li>
          <li><strong>Next Themes</strong> - Theme management for Next.js</li>
          <li><strong>Prisma</strong> - Next-generation ORM for Node.js</li>
          <li><strong>Tailwind CSS</strong> - A utility-first CSS framework</li>
          <li><strong>Lucide-react</strong> - Beautiful & consistent icon toolkit</li>
          <li><strong>Framer Motion</strong> - Motion library for React</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Configuration</h2>
        <p>
          Ensure that you have the required environment variables set up in your <code>.env</code> file. This is crucial for the authentication and database connection to work properly.
        </p>
        <p>
          You can find more details on how to obtain your Google Client ID and Secret from the Google Developer Console.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Usage</h2>
        <p>
          Once your project is set up and running, you can start building your application. Refer to the documentation of each included package for detailed usage instructions and examples.
        </p>
        <ul className="list-disc list-inside">
          <li><a href="https://next-auth.js.org/getting-started/introduction" className="text-blue-500">NextAuth.js Documentation</a></li>
          <li><a href="https://shadcn.dev/docs" className="text-blue-500">ShadCN UI Documentation</a></li>
          <li><a href="https://next-themes.vercel.app/" className="text-blue-500">Next Themes Documentation</a></li>
          <li><a href="https://www.prisma.io/docs/" className="text-blue-500">Prisma Documentation</a></li>
          <li><a href="https://tailwindcss.com/docs" className="text-blue-500">Tailwind CSS Documentation</a></li>
          <li><a href="https://lucide.dev/docs" className="text-blue-500">Lucide-react Documentation</a></li>
          <li><a href="https://www.framer.com/motion/" className="text-blue-500">Framer Motion Documentation</a></li>
        </ul>
      </section>
    </div>
  );
};

export default DocsPage;
