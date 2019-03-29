// @flow
import React from 'react'
import styled from 'styled-components'
import type { TrackType } from '../helpers/types'
import Track from './Track'

const TracksContainer = styled.div``

const Header = styled.div`
  display: flex;
`

const Title = styled.div`
  width: 20%;
  font-weight: 600;
  padding-left: 4px;
`

type Props = {
  tracks: TrackType[],
  onChange: (id: string, name: string, value: string) => void,
}

const Tracks = ({ tracks, onChange }: Props) => {
  return (
    <TracksContainer>
      <Header>
        <Title>Lat</Title>
        <Title>Lon</Title>
        <Title>Speed</Title>
        <Title>Heading</Title>
        <Title>Target number</Title>
      </Header>
      {tracks.map((track: TrackType) => (
        <Track key={track.id} track={track} onChange={onChange} />
      ))}
    </TracksContainer>
  )
}

export default Tracks
