import Link from 'next/link';

interface Course {
  slug: string;
  title: string;
}

export default function CoursesPage() {
  const courses: Course[] = [
    { slug: 'nextjs', title: 'Next.js с нуля' },
    { slug: 'react', title: 'React для начинающих' },
    { slug: 'typescript', title: 'TypeScript на практике' },
  ];

  return (
    <div>
      <h1>Курсы</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.slug}>
            <Link href={`/courses/${course.slug}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}