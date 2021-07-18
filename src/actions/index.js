import * as actionTypes from '../constants/actionTypes'

export const markTile = ({ row, col }) => ({
  type: actionTypes.MARK_TILE, row, col
})
