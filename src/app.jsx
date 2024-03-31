import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import Navbar from '~/components/Navbar';
import './app.css';

function App() {
  return (
    <Router
      root={(props) => (
        <div class="flex flex-col text-[#111517] bg-[#fafafa] dark:text-white dark:bg-[#202c37]">
          <Navbar />
          <main class="min-h-screen flex flex-col p-8 text-center">
            <Suspense>{props.children}</Suspense>
          </main>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

export default App;
