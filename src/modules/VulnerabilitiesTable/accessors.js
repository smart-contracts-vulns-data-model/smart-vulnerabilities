export function accessorVulnerability (row) {
  return row.name
}

export function accessorLevel (row) {
  return row.level
}

export function accessorCategories (row) {
  return row.categories.map(c => c.name)
}

export function accessorMitigations (row) {
  return row.mitigations.map(c => c.name)
}

export function accessorTimeView (row) {
  return row.timeView
}
