import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  initial: 'INITIAL',
}

class CowinDashboard extends Component {
  state = {
    whatToDisplay: apiStatus.initial,
    last7DaysVacc: [],
    vaccByAge: [],
    vaccByGender: [],
  }

  componentDidMount() {
    this.fetchData()
    console.log('working...')
  }

  fetchData = async () => {
    this.setState({whatToDisplay: apiStatus.loading})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {method: 'GET'}
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      const responseData = await response.json()
      console.log(responseData)
      const {
        last_7_days_vaccination: last7DaysVacc,
        vaccination_by_age: vaccByAge,
        vaccination_by_gender: vaccByGender,
      } = responseData
      this.setState({
        last7DaysVacc,
        vaccByAge,
        vaccByGender,
        whatToDisplay: apiStatus.success,
      })
    } else {
      this.setState({whatToDisplay: apiStatus.failure})
    }
  }

  fetchSuccess = () => {
    const {last7DaysVacc, vaccByAge, vaccByGender} = this.state

    return (
      <>
        <div className="card-container">
          <h1 className="card-title">Vaccination Coverage</h1>
          <VaccinationCoverage last7DaysVacc={last7DaysVacc} />
        </div>
        <div className="card-container">
          <h1 className="card-title">Vaccination by gender</h1>
          <VaccinationByGender vaccByGender={vaccByGender} />
        </div>
        <div className="card-container">
          <h1 className="card-title">Vaccination by Age</h1>
          <VaccinationByAge vaccByAge={vaccByAge} />
        </div>
      </>
    )
  }

  fetchFailure = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-img"
      />
      <h1 className="failure-view-heading">Something went wrong</h1>
    </div>
  )

  loading = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  displayPageContent = () => {
    const {whatToDisplay} = this.state
    console.log(whatToDisplay)

    switch (whatToDisplay) {
      case apiStatus.success:
        return this.fetchSuccess()
      case apiStatus.failure:
        return this.fetchFailure()
      case apiStatus.loading:
        return this.loading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="main-container">
          <header className="header-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="header-heading">Co-WIN</h1>
          </header>
          <main className="main-body-container">
            <h1 className="main-body-heading">CoWIN Vaccination in India</h1>
            {this.displayPageContent()}
          </main>
        </div>
      </div>
    )
  }
}

export default CowinDashboard
