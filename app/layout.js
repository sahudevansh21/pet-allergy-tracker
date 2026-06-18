import './globals.css';

export const metadata = {
  title: 'Pet Allergy Tracker',
  description: 'Track your pet\'s allergy triggers, symptoms and vet notes.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}