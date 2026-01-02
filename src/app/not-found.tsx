import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center p-8">
        <h1 className="text-5xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found.</p>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    </main>
  );
}
