// @flow
import LatLon from 'geodesy/latlon-vincenty'
import type { CoordsType, TrackType, TTMType } from './types'

export const normalizeTracks = (tracks: TrackType[]): {} =>
  tracks.reduce((res, item) => {
    if (!res[item.uid]) {
      res[item.uid] = [item]
    } else {
      res[item.uid].push(item)
    }
    return res
  }, {})

export const generateTTMString = ({ distance, bearing, speed, rotate, uid }: TTMType): string => {
  return `$RATTM,${uid},${distance},${bearing},T,${speed},${rotate},T,4.25,320.8,N,L,,M*0D`
}

export const calculateTTM = (track: TrackType, source: CoordsType): TTMType => {
  const p1 = new LatLon(track.lat, track.lon)
  const p2 = new LatLon(source.lat, source.lon)

  const distance = p1.distanceTo(p2) / 1000
  const bearing = p2.initialBearingTo(p1)

  return {
    uid: track.uid,
    speed: track.speed,
    rotate: track.rotate,
    distance,
    bearing,
  }
}
