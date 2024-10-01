## 📋 <a name="table">Table of Contents</a>

1. 📝 [Introduction](#project-outline)
2. ⚙️ [Tech Stack](#tech-stack)
3. ⭐ [Quick Start](#quick-start)
4. 🚀 [Considerations](#considerations)
5. 🎯 [Recommended Extensions](#extensions)

## <a name="project-outline">📝 Project Outline</a>

It is recommended to read the project artifact agreement to understand the overall deliverable presented. As a brief overview, this project contains the following functional requirements:

### Pages

- **Landing Page**
- **Quiz Page**
- **Profile Page**

**Authentication:**

- **Credentials Authentication Provider:** Users can create accounts and log in using their own email and password.
- **OAuth 2.0 Google Provider:** Users can also authenticate using their Google accounts for a seamless login experience.

**UI Components:**

- **Custom Animation Component Wrappers:** Enhance the user experience with dynamic and visually appealing animations.
- **Custom Primitive Components:** Custom components such as headings, paragraphs, cards, form input fields, buttons etc. were created.

**Backend Infrastructure:**

- **Basic Middleware:** Implement essential middleware functionalities for request handling and authentication to preserve protected routes.
- **API Direct:** While the project doesn't require server-side business logic currently, the API directory provides a foundation for future expansion. This enables integration with external services like GPT or other LLMs, data manipulation, and other advanced features.
  - **Custom Primitive Components:** Implement a library of reusable components such as headings, paragraphs, cards, forms, input fields, and layout elements.

# <a name="quick-start">⭐ Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Next.js configuration
NEXTAUTH_URL=http://localhost:3000/api/auth
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXTAUTH_SECRET=

# Mailing service
RESEND_API_KEY=

# Database configuration
DATABASE_URL=
DIRECT_URL=

# Google OAuth 2.0 provider credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

```

# <a name="tech-stack">⚙️ Tech Stack</a>

This project utilizes a carefully selected set of technologies to ensure a robust, scalable, and user-friendly application.

- **Next.js:** A framework built on top of React.js, Next.js offers a powerful set of features for building server-rendered and statically generated web applications. Its built-in optimizations ensure fast loading times and a smooth user experience.
  - [Documentation: https://nextjs.org/docs](https://nextjs.org/docs)
- **Prisma:** An open-source database toolkit that simplifies database interactions, making it easier to manage and access data. Prisma provides type-safe data access, helping to prevent errors and improve code maintainability.
  - [Documentation: https://www.prisma.io/docs](https://www.prisma.io/docs)
- **Radix UI:** A low-level UI component library that offers a collection of high-quality, accessible, and customizable building blocks. This allows developers to build consistent and visually appealing user interfaces with ease.
  - [Documentation: https://www.radix-ui.com/docs/primitives](https://www.radix-ui.com/docs/primitives)
- **SVGR:** A tool that automatically transforms SVG (Scalable Vector Graphics) files into React components. This streamlines the process of integrating and manipulating SVGs within the application, enhancing its visual design.
  - [Documentation: https://react-svgr.com/docs/](https://react-svgr.com/docs/)
- **Bcrypt:** A library designed to securely hash passwords, safeguarding user data by preventing unauthorized access.
  - [Documentation: https://www.npmjs.com/package/bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Framer Motion:** A motion library for React that enables developers to create smooth and visually appealing animations and transitions. This enhances user engagement by providing a more dynamic and enjoyable experience.
  - [Documentation: https://www.framer.com/motion](https://www.framer.com/motion)
- **React Hook Form:** A library that simplifies the process of handling forms in React applications. It streamlines data validation and submission, improving the overall efficiency and user-friendliness of forms.
  - [Documentation: https://react-hook-form.com/](https://react-hook-form.com/)
- **Next Auth:** A comprehensive open-source authentication solution tailored for Next.js applications. Next Auth provides secure and flexible user authentication methods, allowing users to sign in using various providers and securely manage their accounts.
  - [Documentation: https://next-auth.js.org/](https://next-auth.js.org/)
- **Tailwind CSS:** A utility-first CSS framework that offers a set of pre-defined utility classes. This allows developers to quickly create custom user interfaces without writing extensive CSS code.
  - [Documentation: https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
- **Zod:** A JavaScript validation library that enforces data integrity and consistency. Zod helps ensure that data meets specific requirements, reducing errors and improving the reliability of the application.
  - [Documentation: https://zod.dev/](https://zod.dev/)
- **UUID:** A library used to generate universally unique identifiers. UUIDs are essential for managing data and objects efficiently, preventing conflicts and ensuring accurate identification.
  - [Documentation: https://www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid)
- **ESLint:** A code linting tool that helps enforce coding standards and maintain code quality. ESLint identifies potential errors and stylistic inconsistencies, improving code readability and maintainability.
  - [Documentation: https://eslint.org/docs/user-guide/getting-started](https://eslint.org/docs/user-guide/getting-started)
- **TypeScript:** A typed superset of JavaScript that adds static typing to the language. TypeScript enhances code readability, maintainability, and reduces errors during development.
  - [Documentation: https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- **PostCSS:** A tool that extends CSS capabilities with JavaScript. This allows for custom CSS transformations and enables developers to leverage advanced features for styling.
  - [Documentation: https://postcss.org/](https://postcss.org/)
- **Autoprefixer:** A PostCSS plugin that automatically adds vendor prefixes to CSS rules. This ensures browser compatibility by making sure that CSS styles are rendered correctly across different browsers.
  - [Documentation: https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)
- **React:** A JavaScript library for building user interfaces, providing a declarative approach to UI development. React simplifies the process of creating interactive and dynamic user interfaces.
  - [Documentation: https://reactjs.org/](https://reactjs.org/)
- **React DOM:** The bridge between React and the Document Object Model (DOM), enabling React components to interact with the browser's rendering engine. React DOM handles the rendering process and updates the DOM based on changes in the React component tree.
  - [Documentation: https://reactjs.org/docs/react-dom.html](https://reactjs.org/docs/react-dom.html)
- **Node.js:** A JavaScript runtime environment that allows developers to run JavaScript outside of a web browser. Node.js is used to build server-side applications and provides a powerful platform for creating backend logic.
  - [Documentation: https://nodejs.org/en/docs](https://nodejs.org/en/docs)
- **Resend:** A service that provides reliable email delivery for your application. It offers features like email tracking, analytics, and API integration, making it easier to manage and monitor your application's email communications.
  - Documentation: https://docs.resend.io/

### Database Platform

The project utilizes a PostgreSQL database managed through Supabase. Supabase provides a user-friendly and scalable platform for managing databases, allowing developers to focus on building their application's logic rather than managing complex database configurations.

- [Documentation: https://supabase.com/docs](https://supabase.com/docs)

### Hosting Provider

The project is deployed using Vercel, a popular hosting provider for static and serverless applications. Vercel offers a fast and reliable platform for deploying Next.js applications, making it easy to publish and manage the application online.

- [Documentation: https://vercel.com/docs](https://vercel.com/docs)

### Domain Provider

The project uses Hostinger as the domain provider, responsible for managing and registering the domain name for the application. Hostinger offers a range of domain registration and hosting services.

- [Documentation: https://www.hostinger.com/](https://www.hostinger.com/)

### Third-Party Tools

The project integrates with Typeform, a popular platform for creating interactive forms and surveys. Typeform provides a user-friendly interface for building engaging forms that can be easily embedded into the application.

The other third party application used is Zapier. Zapier handles automatic email triggers whenever a user completes a form in Typeform. The account

- [Documentation: https://www.typeform.com/](https://www.typeform.com/)
- [Documentation: https://zapier.com/app/home/ ](https://zapier.com/app/home/)

# <a name="considerations">🚀 Considerations</a>

The following are some considerations that you, as the client, must understand proceeding handover:

1. The database will shutdown after a period of inactivity. In order to restore it, follow these steps:
   1. Go to https://supabase.com/dashboard/projects
   2. Sign In
   3. Go to the unfaircontracts project
   4. Click ‘restore database’
2. In order to customise the behaviour of outbound emails when the quiz has been completed by a user, follow these steps:
   1. Login to [https://zapier.com](https://zapier.com/app/zaps) using google (**stratacheckonline@gmail.com)**
   2. Navigate to the `zaps` list and lick on the one labeled **[`When a new entry is submitted in Typeform`](https://zapier.com/webintent/edit-zap/235803068)**
   3. Click on the `Send Email` card and edit the HTML body field.
   4. When finished, save the zap and it will be published
3. As the project matures, be mindful of dependency management. It's crucial to keep all dependencies up-to-date to benefit from the latest features, performance improvements, and security patches. Here are the steps to update dependencies:
   1. Run `npm outdated` to see which packages have updates available.
   2. Update individual packages using `npm update <package_name>`.
   3. For major updates that may contain breaking changes, carefully read the package's changelog before updating.
   4. After updating, thoroughly test your application to ensure everything still works as expected.

# <a name="considerations">🎯 Recommended Extensions</a>

This project was developed with expendability in mind. Some of the recommended extension would be:

- [ ] Create a custom dashboard for users to land on after sign in that will contain the information needed to interact with the contract analysis tool
- [ ] Change the default redirect URL from `/getting-started` (`getting-started` is the endpoint where a typeform embed is located so that users can fill out the quiz)to `/dashbaord`or something similar
- [ ] Update landing page content with more business specific marketing material
- [ ] Create API endpoints to communicated and process GPT completions
- [ ] Create a form uploading component that allows users to upload pdf documents
- [ ] Create API endpoints to process the data from an uploaded document to store this data in the database
