// @flow
import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const TracksActionContainer = styled.div`
  margin: 24px 0 12px;
`

type Props = {
  onCreateTrackBlank: () => void,
}

const TracksAction = ({ onCreateTrackBlank }: Props) => {
  return (
    <TracksActionContainer>
      <Button
        type="primary"
        shape="round"
        icon="plus"
        htmlType="button"
        onClick={onCreateTrackBlank}
      >
        Add track
      </Button>
    </TracksActionContainer>
  )
}

export default TracksAction
