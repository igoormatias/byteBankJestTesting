import React from 'react';
import { render } from '@testing-library/react'

import Transacao from './Transacao';

describe('Component de transacao do extrato', () => {
    it ('o snapshot deve permanecer sempre o mesmo', () => {
        const { container } = render(<Transacao
        data="23/11/1993"
        tipo="saque"
        valor="20.00"
        />)
        
        expect(container.firstChild).toMatchSnapshot();
    })

})