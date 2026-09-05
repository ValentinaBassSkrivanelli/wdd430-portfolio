interface SkillCardProps {
  name: string;
  description: string;
  level?: string;
}

export default function SkillCard({
  name,
  description,
  level,
}: SkillCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-900">
        {name}
      </h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      {level && (
        <span className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {level}
        </span>
      )}
    </div>
  );
}