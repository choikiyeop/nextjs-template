import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
 
test('홈페이지 렌더링 확인', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'Nextjs' })).toBeDefined()
})