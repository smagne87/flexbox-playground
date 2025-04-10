import ExampleCard from "../components/ExampleCard"

export const FlexWrapPage = () => {
  return (
    <>
      <ExampleCard
        title="Flex Wrap: Wrap"
        description="Allows items to wrap onto multiple lines when they don't fit."
        code={`<div className="flex flex-wrap gap-2 max-w-xs">
  <div className="bg-blue-400 w-24 h-12" />
  <div className="bg-blue-400 w-24 h-12" />
  <div className="bg-blue-400 w-24 h-12" />
</div>`}
      >
        <div className="flex flex-wrap gap-2 max-w-xs border p-2 rounded">
          <div className="bg-blue-400 w-24 h-12 rounded" />
          <div className="bg-blue-400 w-24 h-12 rounded" />
          <div className="bg-blue-400 w-24 h-12 rounded" />
        </div>
      </ExampleCard>
    </>
  )
}
