import ExampleCard from "../components/ExampleCard"

export const JustifyContentPage = () => {
  return (
    <>
      <ExampleCard
        title="Justify Content: Center"
        description="Centra los elementos en el eje principal (horizontal en este caso)."
        code={`<div className="flex justify-center gap-2">
  <div className="bg-pink-500 w-12 h-12" />
  <div className="bg-indigo-500 w-12 h-12" />
</div>`}
      >
        <div className="flex justify-center gap-2 border rounded w-1/2">
          <div className="bg-pink-500 w-12 h-12 rounded" />
          <div className="bg-indigo-500 w-12 h-12 rounded" />
        </div>
      </ExampleCard>

      <ExampleCard
        title="Justify Content: Space Between"
        description="Espacia los elementos al máximo entre ellos."
        code={`<div className="flex justify-between">
  <div className="bg-blue-400 w-12 h-12" />
  <div className="bg-blue-400 w-12 h-12" />
  <div className="bg-blue-400 w-12 h-12" />
</div>`}
      >
        <div className="flex justify-between w-1/2 border rounded">
          <div className="bg-blue-400 w-12 h-12 rounded" />
          <div className="bg-blue-400 w-12 h-12 rounded" />
          <div className="bg-blue-400 w-12 h-12 rounded" />
        </div>
      </ExampleCard>
    </>
  )
}
