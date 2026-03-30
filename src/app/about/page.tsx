export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold">About Agentopia</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Agentopia is a platform for building, deploying, and orchestrating AI
          agents. We make it easy to create intelligent workflows powered by the
          latest large language models.
        </p>
        <section aria-labelledby="mission-heading" className="text-left">
          <h2 id="mission-heading" className="text-2xl font-semibold mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            To empower developers and teams with the tools they need to build
            reliable, scalable AI agent systems — from simple automations to
            complex multi-agent delivery pipelines.
          </p>
        </section>
        <section aria-labelledby="team-heading" className="text-left">
          <h2 id="team-heading" className="text-2xl font-semibold mb-2">
            The Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Built by a small, focused team obsessed with developer experience
            and the future of autonomous software delivery.
          </p>
        </section>
      </div>
    </main>
  );
}
