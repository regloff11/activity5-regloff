// In CalculateCommission.js

export function calculateCommissionFunction(sales, rate, base) {
    // implementation
}

// In CalculateCommission.test.js

import { calculateCommissionFunction } from '../CalculateCommission';

describe('calculateCommissionFunction', () => {
    test('commission for total sales less than or equal to 1000', () => {
        const [totalSales, commission] = calculateCommissionFunction(10, 10, 10);

        expect(totalSales).toBe(1000);
        expect(commission).toBe(100);
    });
});
