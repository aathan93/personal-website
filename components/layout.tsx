import React, { Children, useState } from "react"
import styled from "styled-components"

type test = {
  hi: string
}

const Container = styled.div`
  margin: 3rem auto;
  height: 100vh;
  border: 10px solid black;
  position: relative;

`


const layout: React.FC<test> = (props) => {
  return <Container>{props.children}</Container>
}

export default layout
