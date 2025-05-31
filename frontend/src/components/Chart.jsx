import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
function Chart({expenses, categoryData}){
    const COLORS = ["#9b87f5", "#6E59A5", "#D6BCFA", "#805AD5", "#553C9A"];
    return(
        <div className="w-full p-6 bg-slate-200">
        <h2 className="text-xl font-semibold mb-4 text-[#31207e]">Expense Analysis</h2>
        {expenses.length === 0 ? (
          <p className="text-gray-500 text-center py-12">Add some expenses to see the chart</p>
        ) : (
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    )
}

export default Chart;