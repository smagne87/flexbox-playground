import ExampleCard from "../components/ExampleCard"

export const AlignItemsPage = () => {
  return (
    <>
      <ExampleCard
        title="Align Items: Center"
        description="Aligns children along the cross axis (vertical in row layout)."
        code={`<div className="flex items-center h-32 border">
  <div className="bg-blue-500 w-12 h-12" />
</div>`}
      >
        <div className="flex items-center h-32 border rounded">
          <div className="bg-blue-500 w-12 h-12 rounded" />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Align Items: Stretch"
        description="Default behavior. Children stretch to fill container's cross axis."
        code={`<div className="flex items-stretch h-32 border">
  <div className="bg-red-500 w-12" />
  <div className="bg-green-500 w-12" />
</div>`}
      >
        <div className="flex items-stretch h-32 border rounded">
          <div className="bg-red-500 w-12 rounded" />
          <div className="bg-green-500 w-12 rounded" />
        </div>
      </ExampleCard>
    </>
  )
}
