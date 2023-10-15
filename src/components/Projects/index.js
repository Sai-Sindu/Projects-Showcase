import {Component} from 'react'

import Header from '../Header'
import LoaderView from '../LoaderView'
import ProjectThumbnail from '../ProjectThumbnail'

import {
  MainContainer,
  SelectCard,
  OptionCard,
  FailureViewContainer,
  FailureViewImg,
  FailureViewTitle,
  FailureViewDescription,
  RetryButton,
  ProjectsContainer,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConst = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Projects extends Component {
  state = {
    activeCategory: categoriesList[0].id,
    projectsList: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getProjects()
  }

  onChangeCategory = event => {
    this.setState({activeCategory: event.target.value}, this.getProjects)
  }

  renderCategories = () => {
    const {activeCategory} = this.state

    return (
      <SelectCard onChange={this.onChangeCategory} value={activeCategory}>
        {categoriesList.map(eachCategory => (
          <OptionCard key={eachCategory.id} value={eachCategory.id}>
            {eachCategory.displayText}
          </OptionCard>
        ))}
      </SelectCard>
    )
  }

  getProjects = async () => {
    const {activeCategory} = this.state

    console.log(activeCategory)

    this.setState({apiStatus: apiStatusConst.inProgress})
    const projectsApiUrl = `https://apis.ccbp.in/ps/projects?category=${activeCategory}`
    const response = await fetch(projectsApiUrl)
    const projectsData = await response.json()
    if (response.ok) {
      const updatedData = projectsData.projects.map(eachProject => ({
        id: eachProject.id,
        imageUrl: eachProject.image_url,
        name: eachProject.name,
      }))
      this.setState({
        apiStatus: apiStatusConst.success,
        projectsList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  renderLoadingView = () => <LoaderView />

  onClickRetry = () => {
    this.getProjects()
  }

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureViewImg
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureViewTitle>Oops! Something Went Wrong</FailureViewTitle>
      <FailureViewDescription>
        We cannot seem to find the page you are looking for.
      </FailureViewDescription>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state
    return (
      <ProjectsContainer>
        {projectsList.map(eachProject => (
          <ProjectThumbnail projectDetails={eachProject} key={eachProject.id} />
        ))}
      </ProjectsContainer>
    )
  }

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.inProgress:
        return this.renderLoadingView()
      case apiStatusConst.success:
        return this.renderSuccessView()
      case apiStatusConst.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <MainContainer>
          {this.renderCategories()}
          {this.renderViews()}
        </MainContainer>
      </>
    )
  }
}

export default Projects
