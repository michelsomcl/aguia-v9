
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-6 py-10">
        <h1 className="text-3xl font-bold text-center">Welcome to Your Project</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          This is a clean, empty project that you can use as a starting point for your application.
          Simply edit this page or add new components to begin building.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
