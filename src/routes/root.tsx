import { createRootRoute } from '@tanstack/react-router';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const rootRoute = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
