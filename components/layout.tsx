import React from "react"
import styled from "styled-components"

type test = {
    hi: string;
}

const Container = styled.div`
  margin: 3rem auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 99vh;
  background-color: red;
`

const layout = (props: test) => {
  return <Container>Hello world 231!</Container>
}

export default layout
