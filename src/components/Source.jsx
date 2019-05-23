// @flow
import React from 'react'
import styled from 'styled-components'
import type { CoordsNameType } from '../helpers/types'

const SourceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-weight: 400;
  margin: 0 0 5px 0;
`

const InputWr = styled.div`
  display: flex;
  width: 380px;
`

const Input = styled.input`
  width: 50%;
  font-size: 18px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-right: 0;
  border-radius: 30px 0 0 30px;

  &:focus {
    outline: none;
  }

  &:last-child {
    border-right: 1px solid #ccc;
    border-radius: 0 30px 30px 0;
  }
`

type Props = {
  lat: number,
  lon: number,
  onChange: (name: CoordsNameType, value: number) => void,
}

const Source = ({ lat, lon, onChange }: Props) => {
  const handleChangeInput = event => {
    const { name, value }: { name: CoordsNameType, value: string } = event.target
    const numberValue: number = value
    onChange(name, numberValue)
  }

  return (
    <SourceContainer>
      <Title>Radar coordinates</Title>
      <InputWr>
        <Input type="text" name="lat" value={lat} onChange={handleChangeInput} />
        <Input type="text" name="lon" value={lon} onChange={handleChangeInput} />
      </InputWr>
    </SourceContainer>
  )
}

export default Source
