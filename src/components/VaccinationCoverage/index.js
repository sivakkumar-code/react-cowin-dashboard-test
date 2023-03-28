import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVacc} = props
  console.log(last7DaysVacc)

  const dataFormatter = number => {
    if (number > 100000) {
      return `${number / 100000}k`
    }
    return `${number}`
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={last7DaysVacc}
        margin={{top: 5}}
        borderRadius={15}
        width={1000}
        height={300}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{stroke: '#6c757d', strokeWidth: 1}}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{stroke: '#6c757d', strokeWidth: 1}}
        />
        <Legend wrapperStyle={{paddingTop: 30, paddingBottom: 30}} />
        <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage
