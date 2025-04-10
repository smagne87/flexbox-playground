import ExampleCard from "../components/ExampleCard";

export const AlignSelfPage = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-700">Align Self</h2>

      <p>
        The <code>align-self</code> utility allows a single flex item to
        override the <code>align-items</code> value set on the parent. It's
        helpful when you need one item aligned differently from the rest.
      </p>

      <ExampleCard
        title="self-start"
        description="Aligns the item to the top (start) of the cross axis."
        code={`<div class="flex h-40 items-center bg-gray-100">
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">1</div>
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded self-start">2</div>
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">3</div>
</div>`}
      >
        <div className="flex h-40 items-center bg-gray-100 rounded border">
          <div className="w-24 h-12 bg-blue-500 text-white rounded text-center">1</div>
          <div className="w-24 h-12 bg-blue-500 text-white rounded text-center self-start">
            2
          </div>
          <div className="w-24 h-12 bg-blue-500 text-white rounded text-center">3</div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="self-end"
        description="Aligns the item to the bottom (end) of the cross axis."
        code={`<div class="flex h-40 items-center bg-gray-100">
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">1</div>
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded self-end">2</div>
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">3</div>
</div>`}
      >
        <div className="flex h-40 items-center bg-gray-100 rounded border">
          <div className="w-24 h-12 bg-green-500 text-white rounded text-center">1</div>
          <div className="w-24 h-12 bg-green-500 text-white rounded text-center self-end">
            2
          </div>
          <div className="w-24 h-12 bg-green-500 text-white rounded text-center">3</div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="self-stretch"
        description="Stretches the item to fill the height of the container."
        code={`<div class="flex h-40 items-start bg-gray-100">
  <div class="w-24 h-12 bg-purple-500 text-white rounded text-center">1</div>
  <div class="w-24 bg-purple-500 text-white text-center rounded self-stretch">2</div>
  <div class="w-24 h-12 bg-purple-500 text-white text-center rounded">3</div>
</div>`}
      >
        <div className="flex h-40 items-start bg-gray-100 rounded border">
          <div className="w-24 h-12 bg-purple-500 text-white text-center rounded">
            1
          </div>
          <div className="w-24 bg-purple-500 text-white text-center self-stretch rounded">
            2
          </div>
          <div className="w-24 h-12 bg-purple-500 text-white text-center rounded">
            3
          </div>
        </div>
      </ExampleCard>
    </div>
  );
};
