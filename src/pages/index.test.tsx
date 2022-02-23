import React from 'react'
import IndexPage from './index'
import { render, screen } from '@testing-library/react'

describe('when running', () => {
  it('renders something', () => {
    render(<IndexPage />)
  })

  it('has the header text', () => {
    render(<IndexPage />)
    expect(screen.getByRole('heading')).toHaveTextContent(/New Zealand General Election 2020.*/)
  })

  it('renders an element for each electorate', () => {
    const countMaoriElectorates = 7
    const countNonMaoriElectorates = 65
    const expectedNumberHexagons = countMaoriElectorates + countNonMaoriElectorates

    render(<IndexPage />)
    expect(screen.getAllByTestId('electorate')).toHaveLength(expectedNumberHexagons)
  })
})
