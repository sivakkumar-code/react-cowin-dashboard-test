import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccByGender} = props

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="60%"
          data={vaccByGender}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="75%"
          dataKey="count"
        >
          <Cell fill="#f54394" name="Male" />
          <Cell fill="#5a8dee" name="Female" />
          <Cell fill="#2cc6c6" name="Others" />
        </Pie>
        <Legend iconType="circle" layout="horizontal" />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default VaccinationByGender
