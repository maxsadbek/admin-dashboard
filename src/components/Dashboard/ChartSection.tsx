import RevneuseChart from "./RevneuChart"

const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <RevneuseChart />
      </div>
    </div>
  )
}

export default ChartSection
