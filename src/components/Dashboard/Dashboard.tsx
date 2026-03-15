import ChartSection from "./ChartSection"
import StatusGrid from "./StatusGrid"
import TableSection from "./TableSection"

const Dashboard = () => {
  return (
    <div>
      {/* Status Grid */}
      <StatusGrid />
      {/* Chart Section */}
      <ChartSection />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

