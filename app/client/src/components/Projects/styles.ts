import { Box, Button, Paper, styled } from '@mui/material'
import theme from '../../themes/theme'

export const ProjectsSection = styled(Box)`
  flex-grow: 1;
  min-height: 100vh;
  margin-botton: 10vh;
`
export const ProjectCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.palette.primary.main};
  color: white;
  box-shadow: 1px 1px 10px 5px grey;
  border-radius: 25px 0;
  padding: 20px;
`

export const CardButton = styled(Button)`
  background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
  border-radius: 25px;
  &:hover: {
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }
`
