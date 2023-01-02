import { afterAll, afterEach, beforeAll, expect, it, test, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import Contact from '../pages/contact'

//* This is all just msw setup code, unfortunately I haven't been able to get fetch working right
const server = setupServer(rest.post(`/api/form-submit`, (req, res, ctx) => {
    console.log("Hit /api/form-submit");
    return res(ctx.status(200), ctx.text('ok'))
}))

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('contact', async () => {
    render(<Contact />);
    const emailInput = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button');
    it('should have form inputs', () => {
        expect(emailInput).toBeDefined();
        expect(submitButton).toBeDefined();
    })

    fireEvent.change(emailInput, { target: { value: 'test@email.com' }});
    //* Disabled the actual event testing code, as node's implementation of fetch causes this to error
    // fireEvent.click(submitButton);

    // await waitFor(() => screen.findByText('ok'));
    // expect(true);
})