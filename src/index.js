/**
 * @param columns {Element[]}
 * @param prop {string}
 * @return {number}
 */
const getHeightSumElements = (columns, prop) => {
  const heights = columns.map((column) => {
    return column[prop]
  })
  if (heights.length === 0) {
    return 0
  }
  return heights.reduce((prev, cur) => prev + cur)
}
/**
 * @param columns {Element[]}
 * @return {number}
 */
export const getClientHeightSumElements = (columns) => getHeightSumElements(columns, 'clientHeight')
/**
 * @param columns {Element[]}
 * @return {number}
 */
export const getOffsetHeightSumElements = (columns) => getHeightSumElements(columns, 'offsetHeight')
/**
 * @param columns {Element[]}
 * @return {number}
 */
export const getScrollHeightSumElements = (columns) => getHeightSumElements(columns, 'scrollHeight')
/**
 * @param nodeList {NodeList}
 * @return {Element[]}
 */
export const nodeListToArrayElement = (nodeList) => {
  const elements = []
  for (let i = 0; i < nodeList.length; i++) {
    elements.push(nodeList.item(i))
  }
  return elements
}
export default getHeightSumElements
