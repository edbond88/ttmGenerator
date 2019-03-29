// @flow
import React from 'react'
import styled from 'styled-components'
import type { CoordsType, TrackType } from '../helpers/types'
import { calculateTTM, generateTTMString } from '../helpers'

const TTMListContainer = styled.div`
  margin: 24px 0 0 0;
  background: #efefef;
  padding: 8px;
`

type Props = {
  tracks: TrackType[],
  source: CoordsType,
}

const TTMList = ({ tracks, source }: Props) => {
  return (
    <TTMListContainer>
      {tracks.map((track: TrackType) => (
        <div key={`ttm-${track.id}`}>{generateTTMString(calculateTTM(track, source))}</div>
      ))}
    </TTMListContainer>
  )
}

export default TTMList
