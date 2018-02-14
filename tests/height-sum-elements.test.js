/* eslint-disable no-undef */
import {
  nodeListToArrayElement,
  getClientHeightSumElements,
  getOffsetHeightSumElements,
  getScrollHeightSumElements
} from '../dist'
describe('getClientHeightSumElements', () => {
  const scopes = [
    {clientHeight: 200},
    {clientHeight: 400},
    {clientHeight: 150},
    {clientHeight: 70}
  ]
  it('should return 820', () => {
    expect(getClientHeightSumElements(scopes)).toBe(820)
  })
})
describe('getOffsetHeightSumElements', () => {
  const scopes = [
    {offsetHeight: 100},
    {offsetHeight: 200},
    {offsetHeight: 300},
    {offsetHeight: 400}
  ]
  it('should return 1000', () => {
    expect(getOffsetHeightSumElements(scopes)).toBe(1000)
  })
})
describe('getScrollHeightSumElements', () => {
  const scopes = [
    {scrollHeight: 100},
    {scrollHeight: 100},
    {scrollHeight: 100},
    {scrollHeight: 100}
  ]
  it('should return 400', () => {
    expect(getScrollHeightSumElements(scopes)).toBe(400)
  })
})
describe('nodeListToArrayElement', () => {
  document.body.innerHTML = `
    <div id="block">
      <div class="elem" style="height: 100px"></div>
      <div class="elem" style="height: 200px"></div>
      <div class="elem" style="height: 50px"></div>
      <div class="elem" style="height: 150px"></div>
    </div>
  `
  const nodeList = document.getElementsByClassName('elem')
  const elements = nodeListToArrayElement(nodeList)
  it('should return 4', () => {
    expect(elements.length).toBe(4)
  })
  it('should return object of Element', () => {
    expect(elements[0] instanceof Element).toBe(true)
    expect(elements[1] instanceof Element).toBe(true)
    expect(elements[2] instanceof Element).toBe(true)
    expect(elements[3] instanceof Element).toBe(true)
  })
})
