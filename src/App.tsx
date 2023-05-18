import { useEffect, useState } from "react";
import Show from "./show/Show";
import List from "./list/List";

function App() {
  const [currentPage, setCurrentPage] = useState(
    Number(window.location.hash.slice(1))
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      setCurrentPage(hash?.length > 0 ? Number(hash.slice(1)) : 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="bg-pic flex min-h-[100dvh] w-[100dvw] flex-col bg-gray-50 ">
      <Show currentPage={1} isActive={currentPage === 1} />
      <Show currentPage={2} isActive={currentPage === 2} />
      <Show currentPage={3} isActive={currentPage === 3} />
      <Show currentPage={4} isActive={currentPage === 4} />
      {!currentPage && <List />}
    </div>
  );
}

export default App;
