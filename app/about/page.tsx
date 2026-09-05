import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
  
      <section>
        <h1 className="text-4xl font-bold text-gray-900">
          About Me
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          I am a Software Development student interested in web development,
          software testing, and technology.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Technical Skills
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            name="Java"
            description="Object-oriented programming and application development."
            level="Learning"
          />

          <SkillCard
            name="React"
            description="Building interactive and reusable user interfaces."
            level="Learning"
          />

          <SkillCard
            name="Next.js"
            description="Developing modern web applications with React and TypeScript."
            level="Learning"
          />

          <SkillCard
            name="SQL"
            description="Working with databases, queries, and data management."
            level="Intermediate"
          />

          <SkillCard
            name="Python"
            description="Scripting, data analysis, and automation."
            level="Intermediate"
          />

          <SkillCard
            name="Git & GitHub"
            description="Version control and collaborative software development."
            level="Intermediate"
          />
        </div>
      </section>
    </main>
  );
}