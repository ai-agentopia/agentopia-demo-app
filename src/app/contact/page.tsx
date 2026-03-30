import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Agentopia',
  description: 'Get in touch with the Agentopia team.',
};

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">Contact Us</h1>
        <p className="text-zinc-400 text-lg">
          Have a question, idea, or want to collaborate? We&apos;d love to hear from you.
        </p>
      </div>

      <ContactForm />

      {/* Alternative contact info */}
      <div className="mt-12 pt-8 border-t border-zinc-800 grid sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Email</h2>
          <a
            href="mailto:hello@agentopia.ai"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            hello@agentopia.ai
          </a>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">GitHub</h2>
          <a
            href="https://github.com/ai-agentopia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            github.com/ai-agentopia
          </a>
        </div>
      </div>
    </section>
  );
}
