import React, { useState } from 'react';
import Display from 'Display';

const Calculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);

  const calculateMortgage = () => {
    const monthlyInterestRate = (interestRate / 100) / 12;
    const totalPayments = loanTerm * 12;
    const mortgagePayment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments))
      / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    return mortgagePayment.toFixed(2);
  };

  return (
    <div className="p-4 text-white">
      <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        placeholder="Principal Amount"
        className="bg-black border-b border-white mb-4 p-2 text-right w-48 text-2xl font-mono"
      />
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        placeholder="Interest Rate (%)"
        className="bg-black border-b border-white mb-4 p-2 text-right w-48 text-2xl font-mono"
      />
      <input
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
        placeholder="Loan Term (years)"
        className="bg-black border-b border-white mb-4 p-2 text-right w-48 text-2xl font-mono"
      />

      <Display value={calculateMortgage()} />
    </div>
  );
};

export default Calculator;
