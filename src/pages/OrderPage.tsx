import ExampleCard from "../components/ExampleCard";

export const OrderPage = () => {
  return (
    <>
      <ExampleCard
        title="Order Property"
        description="Changes the visual order of flex items."
        code={`<div className="flex gap-2">
  <div className="bg-teal-500 w-12 h-12 order-2" />
  <div className="bg-teal-500 w-12 h-12 order-1" />
</div>`}
      >
        <div className="flex gap-2 border rounded">
          <div className="bg-teal-500 w-12 h-12 rounded order-2 flex justify-center items-center">
            1
          </div>
          <div className="bg-teal-500 w-12 h-12 rounded order-1 flex justify-center items-center">
            2
          </div>
        </div>
      </ExampleCard>
    </>
  );
};
