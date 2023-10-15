import {ProjectCard, ProjectImg, Name} from './styledComponents'

const ProjectThumbnail = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails

  return (
    <ProjectCard>
      <ProjectImg src={imageUrl} alt={name} />
      <Name>{name}</Name>
    </ProjectCard>
  )
}

export default ProjectThumbnail
