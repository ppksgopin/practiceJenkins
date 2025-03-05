import theme from './theme'
import styled from 'styled-components'

const UserInfo = styled.div`
  background: ${props => props.background || theme.colors.primary};

  @media (max-width: ${theme.medias.phablet}) {
    background: #CC66FF;
  }
`

export default UserInfo
