import Loader from 'react-loader-spinner'

import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <LoaderContainer data-testid="loader">
    <Loader type="ThreeDots" height={50} width={50} color="#328af2" />
  </LoaderContainer>
)
export default LoaderView
