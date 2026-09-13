import { Project } from '@/lib/projects-db';

export default async function SchoolProjectsPage() {
  const response = await fetch(
    'http://localhost:3000/api/projects?type=school'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch school projects');
  }

  const projects: Project[] = await response.json();

  return (
    <main>
      <h1>School Projects</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  );
}