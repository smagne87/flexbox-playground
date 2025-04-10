import ExampleCard from "../components/ExampleCard";

export const AlignContentPage = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-blue-700">Align Content</h2>

      <p>
        The <code>align-content</code> utility in Flexbox is used when there are
        multiple lines of flex items. It defines how the space between and
        around these lines is distributed. It only works if{" "}
        <code>flex-wrap</code> is enabled.
      </p>

      <ExampleCard
        title="content-start"
        description="Items packed to the top of the container."
        code={`<div class="flex flex-wrap content-start h-48 bg-gray-100">
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">1</div>
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">2</div>
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">3</div>
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">4</div>
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">5</div>
  <div class="w-24 h-12 bg-blue-500 text-white text-center rounded">6</div>
</div>`}
      >
        <div className="flex flex-wrap content-start h-48 bg-gray-100 rounded border">
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">
            1
          </div>
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">
            2
          </div>
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">
            3
          </div>
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">
            4
          </div>
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">
            5
          </div>
          <div className="w-24 h-12 bg-blue-500 text-white text-center rounded">
            6
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="content-center"
        description="Items centered vertically across lines."
        code={`<div class="flex flex-wrap content-center h-48 bg-gray-100">
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">1</div>
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">2</div>
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">3</div>
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">4</div>
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">5</div>
  <div class="w-24 h-12 bg-green-500 text-white text-center rounded">6</div>
</div>`}
      >
        <div className="flex flex-wrap content-center h-48 bg-gray-100 rounded border">
          <div className="w-24 h-12 bg-green-500 text-white text-center rounded">
            1
          </div>
          <div className="w-24 h-12 bg-green-500 text-white text-center rounded">
            2
          </div>
          <div className="w-24 h-12 bg-green-500 text-white text-center rounded">
            3
          </div>
          <div className="w-24 h-12 bg-green-500 text-white text-center rounded">
            4
          </div>
          <div className="w-24 h-12 bg-green-500 text-white text-center rounded">
            5
          </div>
          <div className="w-24 h-12 bg-green-500 text-white text-center rounded">
            6
          </div>
        </div>
      </ExampleCard>

      <ExampleCard
        title="content-between"
        description="Items spread out across the vertical space, first at the top, last at the bottom."
        code={`<div class="flex flex-wrap content-between h-48 bg-gray-100">
  <div class="w-24 h-12 bg-purple-500 text-white text-center rounded">1</div>
  <div class="w-24 h-12 bg-purple-500 text-white text-center rounded">2</div>
  <div class="w-24 h-12 bg-purple-500 text-white text-center rounded">3</div>
  <div class="w-24 h-12 bg-purple-500 text-white text-center rounded">4</div>
  <div class="w-24 h-12 bg-purple-500 text-white text-center rounded">5</div>
  <div class="w-24 h-12 bg-purple-500 text-white text-center rounded">6</div>
</div>`}
      >
        <div className="flex flex-wrap content-between h-48 bg-gray-100 w-full rounded border">
          <div className="w-24 h-12 bg-purple-500 text-white text-center rounded">
            1
          </div>
          <div className="w-24 h-12 bg-purple-500 text-white text-center rounded">
            2
          </div>
          <div className="w-24 h-12 bg-purple-500 text-white text-center rounded">
            3
          </div>
          <div className="w-24 h-12 bg-purple-500 text-white text-center rounded">
            4
          </div>
          <div className="w-24 h-12 bg-purple-500 text-white text-center rounded">
            5
          </div>
          <div className="w-24 h-12 bg-purple-500 text-white text-center rounded">
            6
          </div>
        </div>
      </ExampleCard>
    </div>
  );
};
