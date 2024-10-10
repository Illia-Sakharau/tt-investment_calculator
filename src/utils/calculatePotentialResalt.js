export default ({ initialInvestment, monthlyInvestment, investmentPeriod, investPercentage }) => {
  const potentialResalts = new Array(investmentPeriod).fill(undefined);

  for (let i = 0; i < potentialResalts.length; i++) {
    const year = new Date().getFullYear() + 1 + i;
  
    const totalInvested = initialInvestment + (i + 1) * 12 * monthlyInvestment;

    const previusReturn = i === 0 ? 0 : potentialResalts[i-1].totalReturn;
    const thisYearReturn = Math.round((totalInvested + previusReturn) * investPercentage / 100)
    const totalReturn = thisYearReturn + previusReturn;

    const portfolioValue = totalInvested + totalReturn;
  
    potentialResalts[i] = {
      year,
      portfolioValue,
      totalReturn,
      totalInvested,
    }
  }

  return potentialResalts;
}