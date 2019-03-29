// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import forEach from 'lodash/forEach'
import L from 'leaflet'
import 'leaflet-rotatedmarker'
import type { CoordsType, TrackType } from '../helpers/types'
import icon from './icons/icon.svg'
import { normalizeTracks } from '../helpers'

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;

  #map {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`

type Props = {
  tracks: TrackType[],
  source: CoordsType,
  onMapClick: (event: Object) => void,
}

class MapComponent extends Component<Props> {
  lMap = {}

  mapIcon = {
    ais: L.icon({
      iconUrl: icon,
      iconSize: [16, 22],
      iconAnchor: [8, 11],
    }),
  }

  markers = {}

  tracksLayer: Object = L.layerGroup()

  componentDidMount() {
    const { tracks, source, onMapClick } = this.props
    this.lMap = L.map('map').setView(source, 10)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Delta Maps',
    }).addTo(this.lMap)

    this.tracksLayer.addTo(this.lMap)

    this.lMap.on('click', onMapClick)

    if (tracks) {
      this.paintTracks(tracks)
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const { onMapClick } = nextProps
    this.clearMarkers()
    this.paintTracks(nextProps.tracks)
    this.lMap.off('click', onMapClick)
    this.lMap.on('click', onMapClick)
  }

  componentWillUnmount() {
    this.destroyMap()
  }

  destroyMap() {
    this.clearMarkers()
    this.lMap.off()
    if (this.lMap) this.lMap.remove()
  }

  clearMarkers() {
    forEach(this.markers, markerLayer => {
      markerLayer.forEach(marker => marker.off())
    })
    this.markers = {}
    this.tracksLayer.clearLayers()
  }

  painTrack(track: TrackType, uid: string, iconType: string) {
    const marker = L.marker([track.lat, track.lon], {
      rotationAngle: track.rotate,
      icon: this.mapIcon[iconType],
    })

    marker.id = track.id

    if (!this.markers[uid]) {
      this.markers[uid] = [marker]
    } else {
      this.markers[uid].push(marker)
    }

    this.tracksLayer.addLayer(marker)
  }

  paintTracks(tracks: TrackType[]) {
    this.clearMarkers()
    const normalizedTracks = normalizeTracks(tracks)

    forEach(normalizedTracks, (tracksList, uid) => {
      tracksList.forEach(track => {
        const iconType = 'ais'
        this.painTrack(track, uid, iconType)
      })
    })
  }

  render() {
    return (
      <MapContainer>
        <div id="map" />
      </MapContainer>
    )
  }
}

export default MapComponent
