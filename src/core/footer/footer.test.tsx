import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the header component', () => {
  describe('When it is rendered', () => {
    test('Then the text isdi coders should be in the document ', () => {
      render(<Footer></Footer>);
      const linkElement = screen.getByText(/isdi coders/);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
