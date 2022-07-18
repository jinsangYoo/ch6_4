import React from "react"
import { FaStar } from "react-icons/fa"

const createArray = (length) => [...Array(length)]
const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
)

export default function StarRating({ style = {}, selectedStars = 0, totalStars = 5, onRate = (f) => f }) {
  return (
    <div style={{ padding: "5px", ...style }}>
      {createArray(totalStars).map((noUsed, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i + 1)} />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </div>
  )
}
