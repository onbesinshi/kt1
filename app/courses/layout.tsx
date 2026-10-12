import type { ReactNode } from 'react';

interface CoursesLayoutProps {
  children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
  return (
    <section style={{ border: '1px solid #999', padding: 16, marginTop: 16 }}>
      <h2>Раздел «Курсы»</h2>
      {children}
    </section>
  );
}