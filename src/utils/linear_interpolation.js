export function pointOrEllipseIntersection(px, py, cx, cy, a, b) {
    if (a <= 0 || b <= 0) return { x: cx, y: cy, inside: true }
    const dx = px - cx
    const dy = py - cy

    // check if point is inside
    const normSq = (dx * dx) / (a * a) + (dy * dy) / (b * b)
    if (normSq <= 1) {
        return { x: px, y: py, inside: true }
    }

    // if dx and dy are both zero (point at center), return center
    if (dx === 0 && dy === 0) return { x: cx, y: cy, inside: true }

    // find t such that (t*dx)^2/a^2 + (t*dy)^2/b^2 = 1 ->
    // t = 1 / sqrt( (dx^2)/(a^2) + (dy^2)/(b^2) )
    const denom = (dx * dx) / (a * a) + (dy * dy) / (b * b)
    const t = 1 / Math.sqrt(denom)

    const ix = cx + dx * t
    const iy = cy + dy * t
    return { x: ix, y: iy}
}

export function lerp (start, end, t) {
  return start * (1 - t) + end * t;
}

export function symmetricPoint(a, b) {
  return {
    x: 2 * b.x - a.x,
    y: 2 * b.y - a.y
  }
}