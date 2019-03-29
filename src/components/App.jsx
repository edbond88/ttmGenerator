// @flow
import React, { useState } from 'react'
import styled from 'styled-components'
import * as shortid from 'shortid'
import type { CoordsType, CoordsNameType, TrackType } from '../helpers/types'
import Source from './Source'
import Tracks from './Tracks'
import TracksAction from './TracksActions'
import TTMList from './TTMList'
import Map from './Map'

const AppContainer = styled.div`
  padding: 24px;
`

const sourceInit: CoordsType = {
  lat: 40.39343817966825,
  lon: -73.9879041228013,
}

const trackInit: TrackType[] = [
  {
    id: shortid.generate(),
    lat: 40.31875441395524,
    lon: -73.77966225350048,
    speed: 7,
    rotate: 45,
    uid: '1',
  },
]

const App = () => {
  const [source, setSource] = useState(sourceInit)
  const [tracks, setTracks] = useState(trackInit)

  const addTrack = (track: TrackType): void => {
    const newTracks = [...tracks, track]
    setTracks(newTracks)
  }

  const handleSourceChange = (name: CoordsNameType, value: number): void => {
    const newSource: CoordsType = { ...source, lon: value }
    setSource(newSource)
  }

  const handleTrackChange = (id: string, name: string, value: string | number): void => {
    const newTracks = tracks.map(t => {
      const newTrack = { ...t }
      if (newTrack.id === id) {
        newTrack[name] = value
      }
      return newTrack
    })
    setTracks(newTracks)
  }

  const handleCreateTrackBlank = (): void => {
    const lastTrack: TrackType = tracks[tracks.length - 1]
    const emptyTrack: TrackType = { ...lastTrack, id: shortid.generate() }
    addTrack(emptyTrack)
  }

  const handleCreateNewTrack = (coordObj: Object): void => {
    const { latlng } = coordObj
    const lastTrack = tracks[tracks.length - 1]
    const newTrack: TrackType = {
      ...lastTrack,
      id: shortid.generate(),
      lat: latlng.lat,
      lon: latlng.lng,
    }

    addTrack(newTrack)
  }

  return (
    <AppContainer>
      <Source lat={source.lat} lon={source.lon} onChange={handleSourceChange} />
      <TracksAction onCreateTrackBlank={handleCreateTrackBlank} />
      <Tracks tracks={tracks} onChange={handleTrackChange} />
      <TTMList tracks={tracks} source={source} />
      <Map tracks={tracks} source={source} onMapClick={handleCreateNewTrack} />
    </AppContainer>
  )
}

export default App
