// Update this page (the content is just a fallback if you fail to update the page)

import { Layout } from "@/components/layout/Layout";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <Layout>
          <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">
            Start building your amazing project here!
          </p>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
