import ExampleCard from "../components/ExampleCard";

export const FlexDirectionPage = () => {
  return (
    <>
      <ExampleCard
        title="Flex Direction: Row"
        description="Display the elements horizontally (default)."
        code={`<div className="flex flex-row gap-2">
  <div className="bg-blue-500 w-12 h-12" />
  <div className="bg-red-500 w-12 h-12" />
</div>`}
      >
        <div className="flex flex-row gap-2 border rounded">
          <div className="bg-blue-500 w-12 h-12 rounded" />
          <div className="bg-red-500 w-12 h-12 rounded" />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Flex Direction: Column"
        description="Display the elements vertically."
        code={`<div className="flex flex-col gap-2">
  <div className="bg-green-500 w-12 h-12" />
  <div className="bg-yellow-500 w-12 h-12" />
</div>`}
      >
        <div className="flex flex-col gap-2 border rounded">
          <div className="bg-green-500 w-12 h-12 rounded" />
          <div className="bg-yellow-500 w-12 h-12 rounded" />
        </div>
      </ExampleCard>
    </>
  );
};
