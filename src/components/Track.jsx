// @flow
import React from 'react'
import styled from 'styled-components'
import type { TrackType } from '../helpers/types'

const TrackContainer = styled.div`
  width: 100%;
  input {
    width: 20%;
    border: 1px solid #ccc;
    padding: 3px 4px;
    border-right: 0;
    border-bottom: 0;

    &:last-child {
      border-right: 1px solid #ccc;
    }
  }

  &:last-child {
    input {
      border-bottom: 1px solid #ccc;
    }
  }
`

type Props = {
  track: TrackType,
  onChange: (id: string, name: string, value: string) => void,
}

const Track = ({ track, onChange }: Props) => {
  const { id, lat, lon, speed, rotate, uid } = track

  const handleChangeTrackInput = event => {
    const {
      target: { name, value },
    } = event
    onChange(id, name, value)
  }
  return (
    <TrackContainer>
      <input type="text" name="lat" value={lat} onChange={handleChangeTrackInput} />
      <input type="text" name="lon" value={lon} onChange={handleChangeTrackInput} />
      <input type="text" name="speed" value={speed} onChange={handleChangeTrackInput} />
      <input type="text" name="rotate" value={rotate} onChange={handleChangeTrackInput} />
      <input type="text" name="uid" value={uid} onChange={handleChangeTrackInput} />
    </TrackContainer>
  )
}

export default Track
