import ExampleCard from "../components/ExampleCard";

export const FlexGrowShrinkPage = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-700">
        Flex Grow / Shrink / Basis
      </h2>

      <p>
        These utilities control how flex items grow or shrink to fill space in a
        flex container. Use <code>flex-grow</code> to allow items to expand,{" "}
        <code>flex-shrink</code> to allow them to shrink, and <code>basis</code>{" "}
        to define their default size.
      </p>

      {/* flex-grow */}
      <ExampleCard
        title="flex-grow"
        description="The second item grows to take up the remaining space."
        code={`<div class="flex bg-gray-100">
  <div class="w-24 h-12 bg-blue-500 text-white text-center">1</div>
  <div class="flex-grow h-12 bg-blue-700 text-white text-center">2</div>
  <div class="w-24 h-12 bg-blue-500 text-white text-center">3</div>
</div>`}
      >
        <div className="flex bg-gray-100 border rounded w-1/2">
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">1</div>
          <div className="flex-grow h-12 bg-blue-700 text-white text-center rounded">
            2
          </div>
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">3</div>
        </div>
      </ExampleCard>

      {/* flex-shrink */}
      <ExampleCard
        title="flex-shrink"
        description="The second item is allowed to shrink, while the others keep their width."
        code={`<div class="flex w-64 bg-gray-100">
  <div class="w-32 h-12 bg-green-500 text-white text-center">1</div>
  <div class="w-64 flex-shrink h-12 bg-green-700 text-white text-center">2</div>
  <div class="w-32 h-12 bg-green-500 text-white text-center">3</div>
</div>`}
      >
        <div className="flex w-64 bg-gray-100 border rounded">
          <div className="w-32 h-12 bg-green-500 text-white text-center rounded">1</div>
          <div className="w-64 flex-shrink h-12 bg-green-700 text-white text-center rounded">
            2
          </div>
          <div className="w-32 h-12 bg-green-500 text-white text-center rounded">3</div>
        </div>
      </ExampleCard>

      {/* basis */}
      <ExampleCard
        title="basis"
        description="Use basis to define the default size before growing/shrinking."
        code={`<div class="flex bg-gray-100">
  <div class="basis-1/4 h-12 bg-purple-500 text-white text-center">1/4</div>
  <div class="basis-1/2 h-12 bg-purple-700 text-white text-center">1/2</div>
  <div class="basis-1/4 h-12 bg-purple-500 text-white text-center">1/4</div>
</div>`}
      >
        <div className="flex bg-gray-100  border rounded w-1/2">
          <div className="basis-1/4 h-12 bg-purple-500 text-white text-center rounded">
            1/4
          </div>
          <div className="basis-1/2 h-12 bg-purple-700 text-white text-center rounded">
            1/2
          </div>
          <div className="basis-1/4 h-12 bg-purple-500 text-white text-center rounded">
            1/4
          </div>
        </div>
      </ExampleCard>
    </div>
  );
};
