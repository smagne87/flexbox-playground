import ExampleCard from "../components/ExampleCard";

export const FlexShorthandPage = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-700">Flex (Shorthand)</h2>

      <p>
        Tailwind provides shorthand utilities for setting the <code>flex</code>{" "}
        property, which is a combination of <code>flex-grow</code>,{" "}
        <code>flex-shrink</code>, and <code>flex-basis</code>. These are helpful
        for quick layouts.
      </p>

      <ExampleCard
        title="flex-1"
        description="Item grows and shrinks as needed, starting from 0 basis."
        code={`<div class="flex bg-gray-100">
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">Fixed</div>
  <div class="flex-1 h-12 bg-blue-700 text-white text-center rounded">Flex 1</div>
</div>`}
      >
        <div className="flex bg-gray-100 rounded border">
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">
            Fixed
          </div>
          <div className="flex-1 h-12 bg-blue-700 text-white text-center rounded">
            Flex 1
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="flex-auto"
        description="Item grows and shrinks, starting from its content size."
        code={`<div class="flex bg-gray-100">
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">Fixed</div>
  <div class="flex-auto h-12 bg-green-700 text-white text-center rounded">Flex Auto</div>
</div>`}
      >
        <div className="flex bg-gray-100 rounded border">
          <div className="w-24 h-12 bg-green-500 text-white text-center rounded">
            Fixed
          </div>
          <div className="flex-auto h-12 bg-green-700 text-white text-center rounded">
            Flex Auto
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="flex-initial"
        description="Item shrinks but doesn't grow. Basis is auto."
        code={`<div class="flex bg-gray-100">
  <div class="flex-initial w-48 h-12 bg-purple-500 text-white text-center rounded">Flex Initial</div>
  <div class="flex-1 h-12 bg-purple-700 text-white text-center rounded">Flex 1</div>
</div>`}
      >
        <div className="flex bg-gray-100 rounded border">
          <div className="flex-initial w-48 h-12 bg-purple-500 text-white text-center rounded">
            Flex Initial
          </div>
          <div className="flex-1 h-12 bg-purple-700 text-white text-center rounded">
            Flex 1
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="flex-none"
        description="Item doesn’t grow or shrink, fixed size."
        code={`<div class="flex bg-gray-100 rounded border">
  <div class="flex-none w-48 h-12 bg-red-500 text-white text-center rounded">Flex None</div>
  <div class="flex-1 h-12 bg-red-700 text-white text-center rounded">Flex 1</div>
</div>`}
      >
        <div className="flex bg-gray-100 rounded border">
          <div className="flex-none w-48 h-12 bg-red-500 text-white text-center rounded">
            Flex None
          </div>
          <div className="flex-1 h-12 bg-red-700 text-white text-center rounded">
            Flex 1
          </div>
        </div>
      </ExampleCard>
    </div>
  );
};
