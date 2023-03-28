import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccByAge} = props

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccByAge}
          startAngle={0}
          endAngle={360}
          dataKey="count"
        >
          <Cell fill="#2d87bb" name="18-44" />
          <Cell fill="#a3df9f" name="44-60" />
          <Cell fill="#64c2a6" name="Above 60" />
        </Pie>
        <Legend iconType="circle" layout="horizontal" />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByAge
