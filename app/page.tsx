import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Automate Report',
    description: 'Professional data visualization project combining Power BI and SQL to explore data.',
    technologies: ['Python', 'Power BI', 'SQL'],
    link: 'https://github.com/ValentinaBassSkrivanelli/AutomateReport'
  },
  {
    title: 'Event Booking Client-Server System',
    description: 'A client-server system for booking events.',
    technologies: ['React', 'Node.js', 'Express'],
    link: 'https://github.com/ValentinaBassSkrivanelli/event-booking-client-server'
  }
];

export default function Home() { 
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}