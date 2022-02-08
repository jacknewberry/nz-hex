import React from 'react'
import IndexPage from './index'
import { render, screen } from '@testing-library/react'

describe('when running', () => {
  it('renders something', () => {
    render(<IndexPage />)
  })

  it('has the header text', () => {
    render(<IndexPage />)
    expect(screen.getByRole('heading')).toHaveTextContent(/New Zealand Population.*/)
  })
})
