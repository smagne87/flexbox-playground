import ExampleCard from "../components/ExampleCard";

export const GapPage = () => {
  return (
    <>
      <ExampleCard
        title="Gap Between Items"
        description="Adds spacing between flex children without needing margin utilities."
        code={`<div className="flex gap-4">
  <div className="bg-purple-500 w-12 h-12" />
  <div className="bg-purple-500 w-12 h-12" />
</div>`}
      >
        <div className="flex gap-4 border rounded">
          <div className="bg-purple-500 w-12 h-12 rounded" />
          <div className="bg-purple-500 w-12 h-12 rounded" />
        </div>
      </ExampleCard>
    </>
  );
};
