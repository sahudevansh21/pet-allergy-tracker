import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-indigo-800 mb-4">Pet Allergy Tracker</h1>
        <p className="text-xl text-gray-700 mb-8">
          Keep your dog or cat safe by logging triggers, symptoms, and vet advice all in one place.
        </p>
        <Link href="/log">
          <a className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Start Logging
          </a>
        </Link>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Log Symptoms & Triggers</h2>
          <p className="text-gray-600">Record daily reactions, foods, environment factors and attach photos.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Vet Notes & Alerts</h2>
          <p className="text-gray-600">Save veterinary recommendations and receive real‑time alerts for high‑risk items.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Reports & Insights</h2>
          <p className="text-gray-600">Visualize patterns over weeks or months to identify hidden allergens.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-indigo-50 rounded-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Ready to protect your pet?</h2>
        <p className="text-lg text-gray-700 mb-6">Create a free account and start tracking today.</p>
        <Link href="/signup">
          <a className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition">
            Sign Up Free
          </a>
        </Link>
      </section>
    </main>
  );
}